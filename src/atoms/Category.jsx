import styled from "styled-components";

const StyledCategory = styled.div`
	padding: 1rem;
	border-radius: 10px;
	border: 1px solid #1a1a1a;
`;

function Category({ cat }) {
	return (
		<StyledCategory>
			<h1>{cat}</h1>
		</StyledCategory>
	);
}

export default Category;
