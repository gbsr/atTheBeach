import styled from "styled-components";
import bg from "../assets/img/footer/footer.svg";

const StyledWave = styled.img`
	transform: translateY(-2.25rem);
	width: 290vw;
	pointer-events: none;
`;

const Wave = () => {
	return <StyledWave src={bg} alt="wave" />;
};

export default Wave;
