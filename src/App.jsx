import Content from "./organisms/Body.jsx";
import Header from "./molecules/Header.jsx";
import Footer from "./molecules/Footer.jsx";
import ProductContent from "./organisms/Products.jsx";
import Admin from "./organisms/Administrator.jsx";
import AdminLogin from "./molecules/Login.jsx";
import Checkout from "./organisms/Checkout.jsx";
import { useRoutes } from "react-router-dom";

import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

	html, body {
		font-family: "Monomaniac One", sans-serif;
  font-weight: 400;
  font-style: normal;
		margin: 0;
		padding: 0;
		height: 97vh;
		overflow-x: hidden;
		
	}
	label {
		font-size: 1rem;
	}
	button {
		cursor: pointer;
	}
	
	a {
		text-decoration: none;
	}
	footer {
		position: absolute;
		bottom: 0px;
		pointer-events: none;
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
	const element = useRoutes([
		{
			path: "/main",
			element: <Content />,
		},
		{
			path: "beachboys-admin",
			element: <Admin />,
		},
		{
			path: "/beachboys",
			element: <AdminLogin />,
		},
		{
			path: "/",
			element: <Content />,
		},
		{
			path: "checkout",
			element: <Checkout />,
		},
		{
			path: "/category/:category",
			element: <ProductContent />,
		},
	]);

	return (
		<>
			<GlobalStyle />
			<StyledApp>
				<Header />
				{element}
				<Footer />
			</StyledApp>
		</>
	);
}

export default App;
