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
	z-index: 1000000;
`;

const AddProductForm = () => {
	const { setFile, addProduct, file } = useStore();
	const [errors, setErrors] = useState([]);
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

    let newErrors = {};

    if (!file) {
      newErrors.file = "No file selected";
    }
    if (!product.name) {
      newErrors.name = "Please enter a product name";
    }
    if (!product.desc) {
      newErrors.desc = "Please enter a product description";
    }
    if (!product.price || isNaN(product.price)) {
      newErrors.price = "Please enter a valid product price";
    }
    if (!product.category) {
      newErrors.category = "No category selected";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await addProduct(product.category, product, file);
  }

	return (
		<StyledForm onSubmit={handleSubmit}>
			<h3>Add Product</h3>
			<label htmlFor="file">Select a file:</label>
			{errors.file && <p>{errors.file}</p>}
			<input type="file" name="file" onChange={handleChange} />

			<label htmlFor="name">Product name:</label>
			{errors.name && <p>{errors.name}</p>}
			<input type="text" name="name" placeholder="Product name" onChange={handleChange} />

			<label htmlFor="desc">Product description:</label>
			{errors.desc && <p>{errors.desc}</p>}
			<input type="text" name="desc" placeholder="Product description" onChange={handleChange} />

			<label htmlFor="price">Product price:</label>
			{errors.price && <p>{errors.price}</p>}
			<input type="text" name="price" placeholder="Product price" onChange={handleChange} />

			<label htmlFor="category">Product category:</label>
			{errors.category && <p>{errors.category}</p>}
			<input type="text" name="category" placeholder="Product category" onChange={handleChange} />

			<SaveButton type="submit">Save</SaveButton>
		</StyledForm>
	);
};

export default AddProductForm;
