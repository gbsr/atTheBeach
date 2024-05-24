import { useState, useEffect } from "react";
import { useStore } from "../utilities/store";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 10px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const SaveButton = styled.button`
	background: #118ab0;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
`;

const CloseButton = styled.button`
	background: #ff0000;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	cursor: pointer;
	z-index: 1000000;
`;

const StyledP = styled.p`
	font-size: 1rem;
`;

const EditModal = ({ product, onClose }) => {
	const { setFile, updateProduct } = useStore();
	const { category } = useParams();
	const [errors, setErrors] = useState({});
	const [productDetails, setProductDetails] = useState({
		name: "",
		desc: "",
		price: "",
		category: "",
	});

	useEffect(() => {
		setProductDetails({
			name: product.name,
			desc: product.desc,
			price: product.price,
			category: product.category,
		});
	}, [product]);

	function handleChange(event) {
		if (event.target.name === "file") {
			setFile(event.target.files[0]);
		} else {
			setProductDetails({
				...productDetails,
				[event.target.name]: event.target.value,
			});
		}
	}

	async function handleSubmit(event) {
    event.preventDefault();

    let newErrors = {};

    if (!productDetails.name) {
      newErrors.name = "Please enter a product name";
    }
    if (!productDetails.desc) {
      newErrors.desc = "Please enter a product description";
    }
		// same here, we want to add a symbol or something perhaps..so regex it is!
		const priceRegex = /^[0-9\s$€£¥]*$/;
		if (!product.price || !priceRegex.test(product.price)) {
			newErrors.price = "Please enter a valid product price";
		}
	
    if (!productDetails.category) {
      newErrors.category = "No category selected";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const updatedProduct = {
      ...productDetails,
      category: category,
    };
    await updateProduct(category, product.id, updatedProduct);
  }
	return (
    <Modal>
      <ModalContent>
        <StyledForm onSubmit={handleSubmit}>
          <h3>{productDetails.name}</h3>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            onChange={handleChange}
            value={productDetails.name}
          />
          {errors.name && <StyledP>{errors.name}</StyledP>}
          <input
            type="text"
            name="desc"
            placeholder="Product description"
            onChange={handleChange}
            value={productDetails.desc}
          />
          {errors.desc && <StyledP>{errors.desc}</StyledP>}
          <input
            type="text"
            name="price"
            placeholder="Product price"
            onChange={handleChange}
            value={productDetails.price}
          />
          {errors.price && <StyledP>{errors.price}</StyledP>}
          <input
            type="text"
            name="category"
            placeholder="Product category"
            onChange={handleChange}
            value={productDetails.category}
          />
          {errors.category && <StyledP>{errors.category}</StyledP>}
          <SaveButton type="submit">Save</SaveButton>
        </StyledForm>

        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </Modal>
  );
};

export default EditModal;
