import { create } from "zustand";
import { getImageDownloadUrl, getCategories, addProductToCategory, getProductsByCategory, updateProductInCategory, deleteProductFromCategory } from "../utilities/crud.js";
import { storage } from "../utilities/db.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const useStore = create((set) => ({
	categories: [],
	products: [],
	setCategories: (categories) => set(() => ({ categories })),
	setProducts: (products) => set(() => ({ products })),
	setFile: (file) => set(() => ({ file })),

	fetchCategories: async () => {
		// Fetch categories from server
		const categories = await getCategories();

		// Update local state
		set({ categories });
	},
	// ...state.products, product creates a new array with the current products and adds the new product also. Spread operator, then.

	addProduct: async (categoryId, product, file) => {
		// Upload file to Firebase storage
		const fileRef = ref(storage, `${categoryId}/${file.name}`);
		await uploadBytes(fileRef, file);

		// sonce category constructs a path from gs we need to construct one here
		const fileUrl = `gs://${fileRef.bucket}/${fileRef.fullPath}`;

		product.imgUrl = fileUrl;
		console.log('set to', product.imgUrl);
		// Add product to cat inn db
		const docRef = await addProductToCategory(categoryId, product);

		product.id = docRef.id;
		set(state => {
			const newProducts = [...state.products, product];
			return { products: newProducts };
		});

		// await addProductToCategory(categoryId, product);
	},


	// gets the catID and the product ID,
	updateProduct: async (categoryId, productId, updatedProduct) => {

		// Update product in local state
		set(state => {
			// creates a new array of the products, and then uses ? to check if they match id, 
			// then creates a new array of prods with the updated product.
			const updatedProducts = state.products.map(product =>
				product.id === productId ? { ...product, ...updatedProduct } : product
			);
			return { products: updatedProducts };
		});

		// Update product in Firebase
		await updateProductInCategory(categoryId, productId, updatedProduct);
	},
	deleteProduct: async (categoryId, productId) => {
		// Delete product from local state
		set(state => {
			const remainingProducts = state.products.filter(product => product.id !== productId);
			return { products: remainingProducts };
		});

		// Delete product from Firebase
		await deleteProductFromCategory(categoryId, productId);
	},
	fetchProducts: async (categoryId) => {
		// Get all products in cat
		let products = await getProductsByCategory(categoryId);

		// Get the imgrl
		products = await Promise.all(products.map(async product => {
			const imageUrl = await getImageDownloadUrl(product.imgUrl);
			return { ...product, imageUrl };
		}));

		// Update local state
		set({ products });
	},
}));

export default useStore;