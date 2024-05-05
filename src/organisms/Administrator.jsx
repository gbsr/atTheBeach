import styled from "styled-components";
import Categories from "../molecules/Categories";
import AddProductForm from "./AddProductForm";

const StyledBody = styled.div`
	background: #fcfcfd;
	width: 100vw;
	height: fit-content;
	position: relative;
	overflow: hidden;
`;

const Content = () => {
	return (
		<StyledBody>
			<AddProductForm />
			<Categories />
		</StyledBody>
	);
};

export default Content;
