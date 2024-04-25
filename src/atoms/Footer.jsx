import styled from "styled-components";

const StyledFooter = styled.div`
	color: black;
	position: fixed;
	left: 0;
	bottom: 0;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<h1>FOOTER</h1>
		</StyledFooter>
	);
};

export default Footer;
