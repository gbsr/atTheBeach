import { create } from "zustand";
import { getImageDownloadUrl, getCategories, addProductToCategory, getProductsByCategory, updateProductInCategory, deleteProductFromCategory } from "../utilities/crud.js";

export const useStore = create((set) => ({
	categories: [],
	products: [],
	setCategories: (categories) => set(() => ({ categories })),
	setProducts: (products) => set(() => ({ products })),


	fetchCategories: async () => {
		// Fetch categories from server
		const categories = await getCategories();

		// Update local state
		set({ categories });
	},
	addProduct: async (categoryId, product) => {

		// ...state.products, product creates a new array with the current products and adds the new product also. Spread operator, then.
		set(state => {
			const newProducts = [...state.products, product];
			return { products: newProducts };
		});

		// Add prod to db
		await addProductToCategory(categoryId, product);
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