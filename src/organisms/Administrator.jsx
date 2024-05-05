import styled from "styled-components";
import waveBottom from "../assets/img/body/waves.svg";
import waveTop from "../assets/img/body/wavesNegative.svg";

import { useState } from "react";

const StyledBody = styled.div`
	background: #fcfcfd;
	width: 100vw;
	height: fit-content;
	position: relative;
	overflow: hidden;
`;

const StyledText = styled.div`
	padding: 1rem;
	max-width: 1200px;
	font-size: 3rem;
	margin: 0 auto;
	padding-bottom: 10rem;
	color: #118ab0;
`;

const StyledWaveTop = styled.img`
	width: 216vw;
	height: 16rem;
	transform: rotate(3deg) translateY(8rem);
`;
const StyledWaveBottom = styled.img`
	width: 190vw;
	transform: translateY(-1rem);
`;

const WaveContainer = styled.div`
	width: 100%;
	padding-top: 14rem;
`;

const Spacer = styled.div`
	transform: translateY(-1rem);
	width: 100vw;
	height: 20rem;
	background: #118ab0;
`;

const StyledP = styled.p`
	font-size: 3rem;
	padding: 1rem;
`;

const Content = () => {
	const [file, setFile] = useState();

	function handleChange(event) {
		setFile(event.target.files[0]);
	}

	return (
		<StyledBody>
			<WaveContainer>
				{/* TODO: Setup proper file upload to firebase */}
				<form>
					<h1>Select Product Image</h1>
					<input type="file" />
					<button type="submit">Upload</button>
				</form>
				<StyledWaveTop src={waveTop} />
				<Spacer></Spacer>
				<StyledWaveBottom src={waveBottom} />
			</WaveContainer>
			<StyledText>
				<StyledP>Here we do admin stuff. Enjoy.</StyledP>
			</StyledText>
		</StyledBody>
	);
};

export default Content;
