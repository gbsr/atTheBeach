import styled from "styled-components";
import Logo from "../atoms/Logo.jsx";
import WaveTop from "../atoms/WaveTop.jsx";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
	position: sticky;
	top: -33px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100vw;
	height: 268px;
	z-index: 10;
	opacity: 0.95;
`;

const Header = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};
	return (
		<StyledHeader>
			<WaveTop />
			<Logo onClick={handleClick} />
		</StyledHeader>
	);
};

export default Header;
