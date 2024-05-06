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
	margin-top: 8rem;
	border-radius: 10px;
	width: 80vw;
	height: 70vh;
	font-size: 1, 5rem;
`;

const IncreaseButton = styled.button`
	background: #118ab0;
	width: 80px;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	font-size: 1rem;
`;

const DecreaseButton = styled.button`
	background: #ff0000;
	width: 80px;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	cursor: pointer;
	font-size: 1rem;
`;
const CloseButton = styled.button`
	background: #ff0000;
	color: #ffffff;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	cursor: pointer;
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	justfiy-content: space-between;
	margin: 0 auto;
`;

const ProductImage = styled.img`
	max-width: 380px;
	max-height: 380px;
	border-radius: 10px;
	border: 1px solid rgb(40 129 168);
	margin: 0 auto;
	@media (max-width: 720px) {
		max-width: 180px;
		max-height: 180px;
	}
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
							<h3>
								{product.name} - {product.price}
							</h3>
							<ProductImage src={product.imageUrl} alt={product.name} />
							<p>Quantity: {product.quantity}</p>
							<ButtonWrapper>
								<DecreaseButton onClick={() => removeFromCart(product.id)}>-</DecreaseButton>
								<IncreaseButton onClick={() => addToCart(product)}>+</IncreaseButton>
							</ButtonWrapper>
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
