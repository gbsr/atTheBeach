import styled from "styled-components";
import waveBottom from "../assets/img/body/waves.svg";
import waveTop from "../assets/img/body/wavesNegative.svg";
import Categories from "../molecules/Categories";
import ScrollToTopButton from "../atoms/ScrollButton";
import Sun from "../assets/img/body/sun.svg";

const StyledBody = styled.div`
	background: #fcfcfd;
	// width: 100vw;
	// position: relative;
`;

const StyledSunContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const StyledSun = styled.img`
	width: 25%;
`;

const StyledWaveTop = styled.img`
	width: 216vw;
	transform: scale(1.1) rotate(3deg);
`;
const StyledWaveBottom = styled.img`
	width: 260vw;
	transform: translateY(-5rem);
`;

const RightTextContainer = styled.div`
	background: #118ab0;
	transform: translatey(-5rem);
	padding-block: 1rem;
	width: 100%;
`;

const Text = styled.p`
	position: relative;
	z-index: 100;
	font-size: 3rem;
	transform: rotate(-1.07deg);
	color: #edddc8;
	text-align: center;
	background: #118ab0;
	top: 0;
	margin: 0;
`;

const WaveContainer = styled.div`
	width: 100%;
	pointer-events: none;
`;

const StyledP = styled.p`
	padding: 1rem;
	font-size: clamp(2rem, 2vw, 2.5rem);
	color: #118ab0;
	max-width: 800px;
	margin: 0 auto;
	padding-bottom: 6rem;
`;

const Content = () => {
	return (
		<StyledBody>
			<StyledSunContainer>
				<StyledSun src={Sun} alt="Image of a Sun" />
			</StyledSunContainer>
			<WaveContainer>
				<StyledWaveTop src={waveTop} />
				<RightTextContainer>
					<Text>Badass Beach Day Essentials with a twist of the classics</Text>
				</RightTextContainer>
				<StyledWaveBottom src={waveBottom} />
			</WaveContainer>
			<Categories className="Categories" />
			<StyledP>
				Here At the Beach we believe that style marries function. Yes, we do have the classic beach stuff here, but
				seriously, they are so dang cool looking though. <br />
				<br />
				You've probably had a pair of flip flops before, but we gaurantee you that you've never had a pair of flip flops
				like ours. You've probably had water guns before, but holycrap, have you seen our water guns? They're so cool.
			</StyledP>
			<ScrollToTopButton />
		</StyledBody>
	);
};

export default Content;
