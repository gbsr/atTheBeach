import styled from "styled-components";
import logo from "../assets/img/header/logo.png";

const StyledHeader = styled.div`
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: url(${logo});
	background-repeat: no-repeat;
	background-position: center;
	width: 100vw;
	height: 268px;
	z-index: 10;
	opacity: 0.95;
	cursor: pointer;

	@media (max-width: 568px) {
		background-size: 50%;
	}
`;

const Logo = ({ onClick }) => {
	return <StyledHeader onClick={onClick} />;
};

export default Logo;
