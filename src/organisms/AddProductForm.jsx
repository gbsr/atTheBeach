import styled from "styled-components";
import { useState } from "react";
import { useStore } from "../utilities/store.js";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 0 auto;
	padding-bottom: 2rem;
	max-width: 480px;
`;

const SaveButton = styled.button`
	background: #118ab0;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
`;

const AddProductForm = () => {
	const { setFile, addProduct, file } = useStore();
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
		<StyledForm onSubmit={handleSubmit}>
			<h3>Add Product</h3>
			<input type="file" name="file" onChange={handleChange} />
			<input type="text" name="name" placeholder="Product name" onChange={handleChange} />
			<input type="text" name="desc" placeholder="Product description" onChange={handleChange} />
			<input type="text" name="price" placeholder="Product price" onChange={handleChange} />
			<input type="text" name="category" placeholder="Product category" onChange={handleChange} />
			<SaveButton type="submit">Save</SaveButton>
		</StyledForm>
	);
};

export default AddProductForm;
