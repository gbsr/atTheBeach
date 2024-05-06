import styled from "styled-components";
import waveBottom from "../assets/img/body/waves.svg";
import waveTop from "../assets/img/body/wavesNegative.svg";
import Categories from "../molecules/Categories";
import ScrollToTopButton from "../atoms/ScrollButton";

const StyledBody = styled.div`
	background: #fcfcfd;
	// width: 100vw;
	// position: relative;
`;

const LeftText = styled.p`
	position: absolute;
	padding-left: 3rem;
	margin-top: 14rem;
	font-size: 4rem;
	transform: rotate(-1.07deg);
	color: #118ab0;
`;

const StyledWaveTop = styled.img`
	width: 216vw;
	transform: translateY(7rem) scale(1.1) rotate(3deg);
`;
const StyledWaveBottom = styled.img`
	width: 260vw;
`;

const RightTextContainer = styled.div`
	background: #118ab0;
	padding-block: 1rem;
	width: 100%;
`;

const TextContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	width: 100%;
	max-width: 1600px;
	position: relative;
	// top: 7rem;
	padding-bottom: 2rem;
`;

const RightText = styled.p`
	position: relative;
	z-index: 100;
	padding-right: 4rem;
	font-size: 3rem;
	transform: rotate(-1.07deg);
	color: #edddc8;
	text-align: end;
	background: #118ab0;
	top: 0;
	margin: 0;
`;

const WaveContainer = styled.div`
	width: 100%;
	padding-top: 6rem;
	pointer-events: none;
`;

const StyledP = styled.p`
	padding: 1rem;
	font-size: clamp(2rem, 2vw, 2.5rem);
	color: #118ab0;
	max-width: 1200px;
	margin: 0 auto;
	padding-bottom: 6rem;
`;

const Content = () => {
	return (
		<StyledBody>
			<TextContainer className="LeftTextContainer">
				<LeftText className="Text">Badass Beach Day Essentials</LeftText>
			</TextContainer>
			<WaveContainer>
				<StyledWaveTop src={waveTop} />
				<RightTextContainer>
					<RightText>with a twist of the classics</RightText>
				</RightTextContainer>
				<StyledWaveBottom src={waveBottom} />
			</WaveContainer>
			<Categories className="Categories" />
			<StyledP>
				Here At the Beach we believe that style marries function. Yes, we do have the classic beach stuff here, but
				seriously, they are so dang cool looking though.
			</StyledP>
			<StyledP>
				You've probably had a pair of flip flops before, but we gaurantee you that you've never had a pair of flip flops
				like ours. You've probably had water guns before, but holycrap, have you seen our water guns? They're so cool.
			</StyledP>
			<ScrollToTopButton />
		</StyledBody>
	);
};

export default Content;
