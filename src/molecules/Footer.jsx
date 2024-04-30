import styled from "styled-components";
import BgWave from "../atoms/Wave.jsx";

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

const StyledFooterText = styled.p``;

const Wrapper = styled.div`
	position: absolute;

	font-size: 3rem;
	bottom: -2rem;
	width: 100vw;
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<BgWave />
			<StyledFooterContent>
				<Wrapper>
					<StyledFooterText>Home</StyledFooterText>
				</Wrapper>
			</StyledFooterContent>
		</StyledFooter>
	);
};

export default Footer;
