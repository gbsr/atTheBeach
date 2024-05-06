import { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollButton = styled.button`
	position: fixed;
	bottom: 70px;
	right: 20px;
	font-size: 1.25rem;
	background: #118ab0;
	border: none;
	border-radius: 50%;
	width: 80px;
	height: 80px;
	cursor: pointer;
	color: #e7d5ba;
	display: ${(props) => (props.$visible ? "block" : "none")};
`;

const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false);

	const checkScrollTop = () => {
		const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		setVisible(scrollTop > 200);
	};

	const scrollTop = () => {
		document.body.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		document.body.addEventListener("scroll", checkScrollTop);
		return () => document.body.removeEventListener("scroll", checkScrollTop);
	}, []);

	return (
		<ScrollButton onClick={scrollTop} $visible={visible}>
			Back to Top
		</ScrollButton>
	);
};

export default ScrollToTopButton;
