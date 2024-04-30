import styled from "styled-components";
import bg from "../assets/img/header/bg.svg";

const StyledWave = styled.img`
	width: 100vw;
	position: absolute;
	top: 0;
`;

const WaveTop = () => {
	return <StyledWave src={bg} alt="wave" />;
};

export default WaveTop;
