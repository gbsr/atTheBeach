import styled from "styled-components";
import useStore from "../utilities/store";
import AddProduct from "./AddProductForm.jsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import EditModal from "./EditModal.jsx";
import Categories from "../molecules/Categories";

const StyledBody = styled.div`
	background: #fcfcfd;
	width: 100vw;
	height: fit-content;
	position: relative;
	overflow: hidden;
`;

const StyledProduct = styled.div`
	padding: 1rem;
	font-size: 3rem;
	margin: 0 auto;
	padding-bottom: 10rem;
	color: #118ab0;
	display: flex;
	flex-wrap: wrap;
	gap: 0.65rem;
`;

const Product = styled.div`
	font-size: 2rem;
	padding: 1rem;
	display: flex;
	gap: 1rem;
	flex-direction: column;
`;

const Card = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;

	@media (max-width: 568px) {
		flex-direction: column;
	}
`;

const ProductImage = styled.img`
	max-width: 380px;
	max-height: 380px;
	border-radius: 10px;

	@media (max-width: 720px) {
		max-width: 180px;
		max-height: 180px;
	}
`;

const DeleteButton = styled.button`
	background: #ff0000;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	cursor: pointer;
`;

const Content = () => {
	const { category } = useParams();
	const products = useStore((state) => state.products);
	const fetchProducts = useStore((state) => state.fetchProducts);
	const deleteProduct = useStore((state) => state.deleteProduct);
	const addProduct = useStore((state) => state.addProduct);
	const isLoggedIn = useStore((state) => state.isLoggedIn);
	const [editingProduct, setEditingProduct] = useState(null);

	function handleOpenModal(product) {
		setEditingProduct(product);
	}

	function handleCloseModal() {
		setEditingProduct(null);
	}

	useEffect(() => {
		if (category) {
			fetchProducts(category);
		}
	}, [category, fetchProducts]);

	const handleDelete = async (product) => {
		if (product) {
			await deleteProduct(product.categoryId, product.id);
			await fetchProducts(category);
		}
	};

	const handleAddProduct = async (categoryId, product, file) => {
		await addProduct(categoryId, product, file);
		await fetchProducts(category);
	};

	return (
		<StyledBody>
			<Categories />
			<StyledProduct>
				{isLoggedIn && <AddProduct onAddProduct={handleAddProduct} />}
				{products.map((product) => (
					<Card key={product.id}>
						<Product>
							{product.name}
							<ProductImage src={product.imageUrl} alt={product.name} />
							{product.price}
							{isLoggedIn && (
								<>
									<DeleteButton type="button" onClick={() => handleDelete(product)}>
										Delete
									</DeleteButton>
									<button type="button" onClick={() => handleOpenModal(product)}>
										Edit
									</button>
								</>
							)}
						</Product>
						<Product>{product.desc}</Product>
					</Card>
				))}
				{editingProduct && <EditModal product={editingProduct} onClose={handleCloseModal} />}
			</StyledProduct>
		</StyledBody>
	);
};
export default Content;
