import { db } from './FireBaseDB.js';


// end of file provides some real world use examples for ref
function addProductToCategory(categoryId, product) {
	const productRef = db.collection('store').doc(categoryId).collection('products');
	productRef.add(product)
		.then(docRef => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch(error => {
			console.error("Error adding document: ", error);
		});
}

function getProductsByCategory(category) {
	const productsRef = db.collection('store').doc(category).collection('products');
	productsRef.get()
		.then(querySnapshot => {
			const products = [];
			querySnapshot.forEach(doc => {
				products.push({
					id: doc.id,
					...doc.data()
				});
				// print id and then jsonify the data
				console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
			});
			return products;
		})
		.catch(error => {
			console.error("Error getting documents: ", error);
		});

}

function updateProductInCategory(categoryId, productId, updatedProduct) {
	const productRef = db.collection('store').doc(categoryId).collection('products').doc(productId);
	productRef.update(updatedProduct)
		.then(() => {
			console.log("Product updated successfully.");
		})
		.catch(error => {
			console.error("Error updating product: ", error);
		});
}

function deleteProductFromCategory(categoryId, productId) {
	const productRef = db.collection('store').doc(categoryId).collection('products').doc(productId);
	productRef.delete()
		.then(() => {
			console.log("Product deleted successfully.");
		})
		.catch(error => {
			console.error("Error deleting product: ", error);
		});
}

function withKey(doc) {
	let o = doc.data();
	o.key = doc.id;  // "id" is the document reference
	return o;
}

export { addProductToCategory, getProductsByCategory, updateProductInCategory, deleteProductFromCategory, withKey };


/* Suppose 'X1Y2Z3' is the category ID

addProductToCategory('X1Y2Z3', {
	name: 'PewPew',
	desc: 'Seriously powerful watergun',
	imgUrl: 'http://example.com/lasersoaker.jpg',
	price: 1200
});

Update this product where ID is 'P12345'

updateProductInCategory('X1Y2Z3', 'P12345', {
	price: 1300,
	desc: 'Updated description: even more powerful watergun'
});

Delete the 'PewPew' product from the category 'X1Y2Z3'
deleteProductFromCategory('X1Y2Z3', 'P12345');

Get all the products in catID X1Y2Z3
getProductsByCategory('X1Y2Z3');

*/
