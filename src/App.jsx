import Header from "./atoms/Header.jsx";
import Footer from "./atoms/Footer.jsx";
import Body from "./organisms/Body.jsx";

import styled from "styled-components";

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const StyledBody = styled.div`
	flex: 1 0 auto;
`;

// Your existing Header and Footer styled components remain the same

function App() {
	return (
		<StyledApp>
			<Header />
			<StyledBody>
				<Body />
			</StyledBody>
			<Footer />
		</StyledApp>
	);
}

export default App;
