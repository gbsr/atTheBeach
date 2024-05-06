import { useStore } from "../utilities/store";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
	z-index: 100000000;
`;

const ModalContent = styled.div`
	background-color: white;
	padding: 20px;
	margin-top: 12rem;
	border-radius: 10px;
	width: 80vw;
	height: 67vh;
	font-size: 1, 5rem;
	overflow-y: auto;
	overflow-x: hidden;
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
	font-size: 1.5rem;
	font-family: "Monomaniac One", sans-serif;
	letter-spacing: 1px;
	width: 8rem;
	border: 1px solid rgb(40 129 168);
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;
const CheckoutButton = styled.button`
	font-size: 1.5rem;
	background: #54ff29;
	color: #1a1a1a;
	border: none;
	border-radius: 5px;
	padding: 0.5rem;
	cursor: pointer;
	font-family: "Monomaniac One", sans-serif;
	letter-spacing: 1px;
	width: 8rem;
	border: 1px solid rgb(40 129 168);
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.65rem;
	justify-content: center;
	margin: 0 auto;
	padding-bottom: 2rem;
`;
const CheckoutWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	gap: 1.65rem;
	bottom: 0;
	left: 0;
	justify-content: space-evenly;
	width: 100%;
	padding-bottom: 2rem;
`;

const ProductImage = styled.img`
	max-width: 180px;
	max-height: 180px;
	border-radius: 10px;
	border: 1px solid rgb(40 129 168);
	margin: 0 auto;
	@media (max-width: 720px) {
		max-width: 180px;
		max-height: 180px;
	}
`;

const StyledText = styled.p`
	font-size: 1.5rem;
	font-family: "Monomaniac One", sans-serif;
	letter-spacing: 1px;
	width: 100%;
	text-align: center;
	color: #2881a8;
`;

const ProductWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;

	@media (max-width: 568px) {
		flex-direction: column;
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

	const handleCheckout = () => {
		setCartModalIsOpen(false);
	};
	return (
		<Modal>
			<ModalContent>
				{cart && cart.length > 0 ? (
					cart.map((product) => (
						<div key={product.id}>
							<StyledText>
								{product.name} - {product.price}
							</StyledText>
							<ProductWrapper>
								<ProductImage src={product.imageUrl} alt={product.name} />
								<StyledText>{product.desc} </StyledText>
							</ProductWrapper>
							<StyledText>Quantity: {product.quantity}</StyledText>
							<ButtonWrapper>
								<DecreaseButton onClick={() => removeFromCart(product.id)}>-</DecreaseButton>
								<IncreaseButton onClick={() => addToCart(product)}>+</IncreaseButton>
							</ButtonWrapper>
						</div>
					))
				) : (
					// if cart is empty render this instead, hence the : operator
					<StyledText>Your cart is empty.</StyledText>
				)}
				<CheckoutWrapper>
					<CloseButton onClick={handleClose}>Close</CloseButton>
					<Link to="/checkout" onClick={handleCheckout}>
						<CheckoutButton>Checkout</CheckoutButton>
					</Link>
				</CheckoutWrapper>
			</ModalContent>
		</Modal>
	);
};

export default CartModal;
