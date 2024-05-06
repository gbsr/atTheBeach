import styled from "styled-components";
import useStore from "../utilities/store";
import AddProduct from "./AddProductForm.jsx";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import EditModal from "./EditModal.jsx";
import Categories from "../molecules/Categories";
import ScrollToTopButton from "../atoms/ScrollButton.jsx";
import Cart from "../assets/img/misc/cart.svg";
import products from "../utilities/store.js";

const AddToCart = styled.img`
	width: 80px;
	height: 80px;
	cursor: pointer;
	transform: translateY(-0.5rem);
`;

const AddToCartButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
`;

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
	border: 1px solid rgb(40 129 168);

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

const PriceWrapper = styled.div`
	display: flex;
	flex-direciton: row;
	gap: 2rem;
`;

const Content = () => {
	const { category } = useParams();
	const products = useStore((state) => state.products);
	const fetchProducts = useStore((state) => state.fetchProducts);
	const deleteProduct = useStore((state) => state.deleteProduct);
	const addProduct = useStore((state) => state.addProduct);
	const isLoggedIn = useStore((state) => state.isLoggedIn);
	const [editingProduct, setEditingProduct] = useState(null);
	const addToCart = useStore((state) => state.addToCart);

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

	const handleAddToCart = (product) => {
		addToCart(product);
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
							<PriceWrapper>
								{product.price}
								<AddToCartButton onClick={() => handleAddToCart(product)}>
									<AddToCart src={Cart} alt="Add Product to Cart" />
								</AddToCartButton>
							</PriceWrapper>
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
			<ScrollToTopButton />
		</StyledBody>
	);
};
export default Content;
