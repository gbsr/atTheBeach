import { db } from './db.js';
import { collection, getDocs, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

async function getCategories() {
	try {
		// get the categories. Also get the first products image of each category so we can conditionally render them in case we add more later on ^^
		const storage = getStorage();
		const categoriesRef = collection(db, 'store');
		const snapshot = await getDocs(categoriesRef);

		const categories = await Promise.all(snapshot.docs.map(async docSnapshot => {
			const productsRef = collection(db, `store/${docSnapshot.id}/products`);
			const productsSnapshot = await getDocs(productsRef);

			// get the first product, and the image of that product
			let categoryImageUrl = '';
			if (!productsSnapshot.empty) {
				const firstProductData = productsSnapshot.docs[0].data();
				if (firstProductData.imgUrl) {
					// console.log('imgUrl:', firstProductData.imgUrl);
					const path = firstProductData.imgUrl.substring(firstProductData.imgUrl.indexOf('/', 5));
					// console.log('path:', path);
					const imageUrlRef = ref(storage, path);
					categoryImageUrl = await getDownloadURL(imageUrlRef);
				}
			}
			// make an array of products
			const products = productsSnapshot.docs.map(productDoc => ({
				id: productDoc.id,
				...productDoc.data()
			}));
			return {
				id: docSnapshot.id,
				category: docSnapshot.id,
				products: products,
				imageUrl: categoryImageUrl,
			};
		}));
		// console.log('categories: ', categories);
		return categories;
	} catch (error) {
		console.error("Error fetching categories: ", error);
	}
}

async function getImageDownloadUrl(imgUrl) {
	try {
		if (!imgUrl) {
			console.error('No imgUrl');
			return;
		}

		// console.log('imgUrl:', imgUrl);
		const storage = getStorage();
		const path = imgUrl.substring(imgUrl.indexOf('/', 5));
		// console.log('imgUrl path:', path);

		const imageUrlRef = ref(storage, path);
		const downloadUrl = await getDownloadURL(imageUrlRef);
		return downloadUrl;
	} catch (error) {
		console.error("Error getting download URL: ", error);
	}
}

async function addProductToCategory(categoryId, product) {
	const categoryDoc = doc(db, 'store', categoryId);
	const productsRef = collection(categoryDoc, 'products');
	try {
		// URL object so we can extra the path instead of the full url
		const url = new URL(product.imgUrl);
		// Extract path from the URL object
		const path = url.pathname;
		// Store path in the product object
		product.imgUrl = path;
		console.log('product.imgUrl:', product.imgUrl);
		const docRef = await addDoc(productsRef, product);
		console.log("Document written with ID: ", docRef.id);
		return docRef;
	} catch (error) {
		console.error("Error adding document: ", error);
	}
}

async function getProductsByCategory(category) {
	const categoryDoc = doc(db, 'store', category);
	const productsRef = collection(categoryDoc, 'products');
	try {
		const querySnapshot = await getDocs(productsRef);
		const products = querySnapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}));
		// console.log(products);
		return products;
	} catch (error) {
		console.error("Error getting documents: ", error);
	}
}

async function updateProductInCategory(categoryId, productId, updatedProduct) {
	const categoryDoc = doc(db, 'store', categoryId);
	const productDoc = doc(categoryDoc, 'products', productId);
	try {
		await updateDoc(productDoc, updatedProduct);
		console.log("Product updated successfully.");
	} catch (error) {
		console.error("Error updating product: ", error);
	}
}

async function deleteProductFromCategory(categoryId, productId) {
	// makw sure categoryId and productId are strings
	if (typeof categoryId !== 'string' || typeof productId !== 'string') {
		throw new Error('categoryId and productId must be strings');
	}
	const categoryDoc = doc(db, 'store', categoryId);
	const productDoc = doc(categoryDoc, 'products', productId);
	try {
		await deleteDoc(productDoc);
		console.log("Product deleted successfully.");
	} catch (error) {
		console.error("Error deleting product: ", error);
	}
}

export { getImageDownloadUrl, getCategories, addProductToCategory, getProductsByCategory, updateProductInCategory, deleteProductFromCategory };