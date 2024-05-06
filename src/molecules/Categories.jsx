import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Category from "../atoms/Category.jsx";
import useStore from "../utilities/store.js";

const StyledCategories = styled.div`
	display: flex;
	margin: 0 auto;
	flex-direction: row;
	flex-wrap: wrap;
	font-size: 1.5rem;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	margin-bottom: 2rem;
	padding-top: 8rem;
`;

const Categories = () => {
	const categories = useStore((state) => state.categories);
	const fetchCategories = useStore((state) => state.fetchCategories);

	useEffect(() => {
		fetchCategories();
	}, []);

	return (
		<StyledCategories>
			{categories.map((cat) => (
				<Link to={`/category/${cat.category}#products`} key={cat.id}>
					<Category cat={cat}>{cat.category}</Category>
				</Link>
			))}
		</StyledCategories>
	);
};

export default Categories;
