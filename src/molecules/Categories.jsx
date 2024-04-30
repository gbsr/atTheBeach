import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Category from "../atoms/Category.jsx";
import useStore from "../store";

const StyledCategories = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 300px;
	max-height: 300px;
`;

const Categories = () => {
	const categories = useStore((state) => state.categories);
	const fetchCategories = useStore((state) => state.fetchCategories);

	useEffect(() => {
		fetchCategories();
	}, [fetchCategories]);

	return (
		<StyledCategories>
			<h1>Categories</h1>
			{categories.map((cat) => (
				<Category key={cat.id} cat={cat.category}>
					<Link to={`/category/${cat.id}`}>{cat.category}</Link>
				</Category>
			))}
		</StyledCategories>
	);
};

export default Categories;
