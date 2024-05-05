import styled from "styled-components";
import { useState } from "react";
import { useStore } from "../utilities/store.js";

const StyledBody = styled.div`
	background: #fcfcfd;
	width: 100vw;
	height: fit-content;
	position: relative;
	overflow: hidden;
`;

const Container = styled.div`
	width: 100%;
	padding-top: 14rem;
	display: flex;
`;

const Content = () => {
	const { setFile, addProduct } = useStore();
	const [product, setProduct] = useState({
		name: "",
		desc: "",
		price: "",
		category: "",
	});
	function handleChange(event) {
		if (event.target.name === "file") {
			setFile(event.target.files[0]);
		} else {
			setProduct({
				...product,
				[event.target.name]: event.target.value,
			});
		}
	}

	const { file } = useStore();

	async function handleSubmit(event) {
		event.preventDefault();
		if (!file) {
			console.log("No file selected");
			return;
		}
		const categoryId = product.category;
		if (!categoryId) {
			console.log("No category selected");
			return;
		}
		await addProduct(categoryId, product, file);
		console.log("File uploaded");
	}

	return (
		<StyledBody>
			<Container>
				<form onSubmit={handleSubmit}>
					<h2>Select Product Image</h2>
					<input type="file" name="file" onChange={handleChange} />
					<button type="submit">Upload</button>
					<input type="text" name="name" placeholder="Product name" onChange={handleChange} />
					<input type="text" name="desc" placeholder="Product description" onChange={handleChange} />
					<input type="text" name="price" placeholder="Product price" onChange={handleChange} />
					<input type="text" name="category" placeholder="Product category" onChange={handleChange} />
				</form>
			</Container>
		</StyledBody>
	);
};

export default Content;
