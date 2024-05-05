import styled from "styled-components";
import BgWave from "../atoms/Wave.jsx";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
	color: black;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 180px;
	z-index: 10;
`;

const StyledFooterContent = styled.div`
	background: #118ab0
	height: 100%;
`;

const StyledLink = styled(Link)`
	color: #e7d5ba;
	font-size: 1.5rem;
	text-decoration: none;
	padding: 1rem;
`;

const Wrapper = styled.div`
	position: absolute;
	bottom: 0px;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<BgWave />
			<StyledFooterContent>
				<Wrapper>
					<StyledLink to="/">Home</StyledLink>
					<StyledLink to="/beachboys">Login</StyledLink>
				</Wrapper>
			</StyledFooterContent>
		</StyledFooter>
	);
};

export default Footer;
