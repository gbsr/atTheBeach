import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-bottom: 2rem;
	padding-top: 10rem;
	max-width: 480px;
	font-family: "Monomaniac One", sans-serif;
	letter-spacing: 1px;
	font-size: 1.5rem;
	margin: 0 auto;
	overflow-y: hidden;
	position: fixed;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const CheckoutButton = styled.button`
	background: #118ab0;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	font-family: "Monomaniac One", sans-serif;
	letter-spacing: 1px;
	font-size: 1.5rem;
`;
const CancelButton = styled.button`
	background: #ff0000;

	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	font-family: "Monomaniac One", sans-serif;
	letter-spacing: 1px;
	font-size: 1.5rem;
`;

const Checkout = () => {
	const [errors, setErrors] = useState({});

	const validateForm = (event) => {
		const errors = {};
		const formElements = event.target.elements;

		if (!formElements.name.value) {
			errors.name = "Name is required";
		}
		if (!formElements.Address.value) {
			errors.Address = "Address is required";
		}
		if (!formElements.email.value) {
			errors.email = "Email is required";
		}
		if (!formElements.phone.value) {
			errors.phone = "Phone number is required";
		}

		setErrors(errors);

		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (validateForm(event)) {
			console.log("checkout complete");
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit}>
			<label>
				Your Name
				<input type="text" name="name" placeholder="Your Name" required />
				{errors.name && <p>{errors.name}</p>}
			</label>
			<label>
				Address
				<input type="text" name="Address" placeholder="Address" required />
				{errors.Address && <p>{errors.Address}</p>}
			</label>
			<label>
				Email Address
				<input
					type="email"
					name="email"
					placeholder="Email Address"
					required
					pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
				/>
				{errors.email && <p>{errors.email}</p>}
			</label>
			<label>
				Phone Number
				<input
					type="tel"
					name="phone"
					placeholder="Phone (xxx-xxx-xxx)"
					required
					pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					onInvalid={(e) => {
						e.target.setCustomValidity("Please enter a phone number in the format XXX-XXX-XXXX");
					}}
					onChange={(e) => {
						e.target.setCustomValidity("");
					}}
				/>
			</label>
			<Link to="/">
				<CheckoutButton type="submit">Checkout</CheckoutButton>
			</Link>
			<Link to="/">
				<CancelButton>Cancel</CancelButton>
			</Link>
		</StyledForm>
	);
};

export default Checkout;
