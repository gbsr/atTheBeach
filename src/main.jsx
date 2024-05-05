import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";

import Content from "./organisms/Body.jsx";
import ProductContent from "./organisms/Products.jsx";
import Admin from "./organisms/Administrator.jsx";

const router = createHashRouter([
	{
		path: "/*",
		element: <App />,
		children: [
			{
				// we use index that tell the router that this is the default page
				index: true,
				element: <Content />,
			},
			{
				path: "products",
				element: <ProductContent />,
			},
			{
				path: "beachboys",
				element: <Admin />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
