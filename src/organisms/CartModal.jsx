import { useStore } from "../utilities/store";
import styled from "styled-components";

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

const IncreaseButton = styled.button`
	background: #118ab0;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
`;

const DecreaseButton = styled.button`
	background: #ff0000;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	cursor: pointer;
`;
const CloseButton = styled.button`
	background: #ff0000;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	cursor: pointer;
`;

const CartModal = () => {
	const cart = useStore((state) => state.cart);
	const removeFromCart = useStore((state) => state.removeFromCart);
	const addToCart = useStore((state) => state.addToCart);
	const setCartModalIsOpen = useStore((state) => state.setCartModalIsOpen);

	const handleClose = () => {
		setCartModalIsOpen(false);
		console.log("trying to close modal");
	};

	return (
		<Modal>
			<ModalContent>
				{cart && cart.length > 0 ? (
					cart.map((product) => (
						<div key={product.id}>
							<h3>{product.name}</h3>
							<p>{product.price}</p>
							<p>Quantity: {product.quantity}</p>
							<DecreaseButton onClick={() => removeFromCart(product.id)}>-</DecreaseButton>
							<IncreaseButton onClick={() => addToCart(product.id)}>+</IncreaseButton>
						</div>
					))
				) : (
					// if cart is empty render this instead, hence the : operator
					<p>Your cart is empty.</p>
				)}
				<CloseButton onClick={handleClose}>Close</CloseButton>
			</ModalContent>
		</Modal>
	);
};

export default CartModal;
