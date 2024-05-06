import styled from "styled-components";
import BgWave from "../atoms/Wave.jsx";
import { Link } from "react-router-dom";
import { useStore } from "../utilities/store.js";
import CartModal from "../organisms/CartModal.jsx";
import CartIcon from "../assets/img/misc/cart.svg";

const Cart = styled.img`
	width: 80px;
	height: 80px;
	cursor: pointer;
	transform: translateY(0.5rem);
`;

const CartButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 0;
`;

const StyledFooter = styled.footer`
	color: black;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80px;
	z-index: 10;
`;

const StyledFooterContent = styled.div`
	background: #118ab0
	height: 100%;
`;

const StyledLink = styled(Link)`
	color: #e7d5ba;
	font-size: 1.25rem;
	text-decoration: none;
	padding: 1rem;
`;

const Wrapper = styled.div`
	position: absolute;
	bottom: 0px;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: flex-end;
`;

const TotalItem = styled.div`
	width: 1.65rem;
	height: 1.65rem;
	border-radius: 50%;
	border: 2px solid #e7d5ba;
	background: #ff0000;
	position: absolute;
	color: #e7d5ba;
	font-size: 1.5rem;
	bottom: 2.85rem;
	left: 17.5rem;
`;

const Footer = () => {
	const isLoggedIn = useStore((state) => state.isLoggedIn);
	const logOut = useStore((state) => state.logOut);
	const setCartModalIsOpen = useStore((state) => state.setCartModalIsOpen);
	const cartModalIsOpen = useStore((state) => state.cartModalIsOpen);
	const cart = useStore((state) => state.cart);

	const handleLogOut = () => {
		logOut();
	};

	const handleCart = () => {
		setCartModalIsOpen(true);
	};

	// calculate total items in cart
	const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

	return (
		<StyledFooter>
			<BgWave />
			<StyledFooterContent>
				<Wrapper>
					<StyledLink to="/">Home</StyledLink>
					<CartButton onClick={handleCart}>
						<Cart src={CartIcon} alt="Cart" />
						{totalItems > 0 && <TotalItem>{totalItems}</TotalItem>}
					</CartButton>
					{isLoggedIn ? (
						<StyledLink to="/" onClick={handleLogOut}>
							Logout
						</StyledLink>
					) : (
						<StyledLink to="/beachboys">Login</StyledLink>
					)}
				</Wrapper>
			</StyledFooterContent>
			{cartModalIsOpen && <CartModal />}
		</StyledFooter>
	);
};

export default Footer;
