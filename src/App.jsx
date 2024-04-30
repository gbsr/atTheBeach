import Header from "./molecules/Header.jsx";
import Footer from "./molecules/Footer.jsx";
import Content from "./organisms/Body.jsx";
import { HashRouter } from "react-router-dom";

import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	html, body {
		font-family: "Monomaniac One", sans-serif;
  font-weight: 400;
  font-style: normal;
		margin: 0;
		padding: 0;
		height: 100vh;
	}
	footer {
		position: absolute;
		bottom: 0px;
		}
	}
`;

const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: #fcfcfd;
	color: #1a1a1a;
`;

function App() {
	return (
		<HashRouter>
			<GlobalStyle />
			<StyledApp>
				<Header />
				<Content></Content>
				<Footer />
			</StyledApp>
		</HashRouter>
	);
}

export default App;
