import styled from "styled-components";
import Logo from "../atoms/Logo.jsx";
import WaveTop from "../atoms/WaveTop.jsx";

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	height: 268px;
	z-index: 10;
	opacity: 0.95;
`;

const Header = () => {
	return (
		<StyledHeader>
			<WaveTop />
			<Logo />
		</StyledHeader>
	);
};

export default Header;
