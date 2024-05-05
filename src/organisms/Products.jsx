import styled from "styled-components";
import useStore from "../utilities/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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

const Content = () => {
	const { category } = useParams();
	const products = useStore((state) => state.products);
	const fetchProducts = useStore((state) => state.fetchProducts);

	useEffect(() => {
		fetchProducts(category);
	}, [category, fetchProducts]);

	return (
		<StyledBody>
			<StyledProduct>
				{products.map((product) => (
					<Card key={product.id}>
						<Product>
							{product.name}
							<ProductImage src={product.imageUrl} alt={product.name} />
							{product.price}
						</Product>
						<Product>{product.desc}</Product>
					</Card>
				))}
			</StyledProduct>
		</StyledBody>
	);
};

export default Content;
