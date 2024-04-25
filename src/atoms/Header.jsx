import styled from "styled-components";
const StyledHeader = styled.header`
	position: sticky;
	top: 0;
`;

const Header = () => {
	return (
		<StyledHeader>
			<h1>My Header</h1>
		</StyledHeader>
	);
};

export default Header;
