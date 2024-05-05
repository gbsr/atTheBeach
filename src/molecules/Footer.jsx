import styled from "styled-components";
import BgWave from "../atoms/Wave.jsx";
import { Link } from "react-router-dom";
import { useStore } from "../utilities/store.js";

const StyledFooter = styled.footer`
	color: black;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80px;
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
	const isLoggedIn = useStore((state) => state.isLoggedIn);
	const logOut = useStore((state) => state.logOut);

	const handleLogOut = () => {
		logOut();
	};

	return (
		<StyledFooter>
			<BgWave />
			<StyledFooterContent>
				<Wrapper>
					<StyledLink to="/">Home</StyledLink>
					{isLoggedIn ? (
						<StyledLink to="/" onClick={handleLogOut}>
							Logout
						</StyledLink>
					) : (
						<StyledLink to="/beachboys">Login</StyledLink>
					)}
				</Wrapper>
			</StyledFooterContent>
		</StyledFooter>
	);
};

export default Footer;
