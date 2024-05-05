import styled from "styled-components";

const StyledCategory = styled.div`
	padding: 1rem;
	border-radius: 10px;
	border: 1px solid rgb(40 129 168);
	background-size: cover;
	background-position: center;
	color: #e7d5ba;
	letter-spacing: 0.1rem;
	width: 180px;

	@media (max-width: 568px) {
		width: 100px;
		height: 80px;
		font-size: 0.8rem;
		justify-content: center;
		align-items: center;
`;

const CategoryWrapper = ({ imageUrl, children }) => (
	<StyledCategory
		style={{
			backgroundImage: `linear-gradient(to bottom, transparent 40%, rgb(40 129 168) 50%, transparent 80%), url(${imageUrl})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
		}}>
		{children}
	</StyledCategory>
);

function Category({ cat }) {
	// console.log(cat);

	return (
		<CategoryWrapper imageUrl={cat.imageUrl}>
			<h1>{cat.category}</h1>
		</CategoryWrapper>
	);
}
export default Category;
