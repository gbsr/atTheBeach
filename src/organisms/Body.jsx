import styled from "styled-components";
import waveBottom from "../assets/img/body/waves.svg";
import waveTop from "../assets/img/body/wavesNegative.svg";
import Categories from "../molecules/Categories";

const StyledBody = styled.div`
	background: #fcfcfd;
	width: 100vw;
	position: relative;
`;

const StyledText = styled.div`
	padding: 1rem;
	max-width: 1200px;
	font-size: 2rem;
	margin: 0 auto;
	color: #118ab0;
`;

const LeftText = styled.p`
	position: absolute;
	padding-left: 4rem;
	top: -10rem;
	font-size: 4rem;
	transform: rotate(-1.07deg);
	color: #118ab0;
`;

const StyledWaveTop = styled.img`
	width: 216vw;
	height: 18rem;
	transform: rotate(3deg) translateY(8rem);
`;
const StyledWaveBottom = styled.img`
	width: 190vw;
	transform: translateY(-1rem);
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
	padding-bottom: 14rem;
`;

const RightText = styled.p`
	padding-right: 4rem;
	font-size: 3rem;
	transform: rotate(-1.07deg);
	color: #edddc8;
	z-index: 1;
	text-align: end;
	background: #118ab0;
	top: -2rem;
	margin: 0;
`;

const WaveContainer = styled.div`
	width: 100%;
	padding-top: 6rem;
`;

const Spacer = styled.div`
	transform: translateY(-1rem);
	width: 100vw;
	height: 23rem;
	background: #118ab0;
`;

const StyledP = styled.p`
	padding: 1rem;
	font-size: clamp(2rem, 2vw, 2.5rem);
`;

const Content = () => {
	return (
		<StyledBody>
			<WaveContainer>
				<TextContainer>
					<LeftText>Badass Beach Day Essentials</LeftText>
				</TextContainer>
				<StyledWaveTop src={waveTop} />
				<Spacer>
					<RightText>with a twist of the classics</RightText>
				</Spacer>
				<StyledWaveBottom src={waveBottom} />
			</WaveContainer>
			<StyledText>
				<StyledP>
					Here At the Beach we believe that style marries function. Yes, we do have the classic beach stuff here, but
					seriously, they are so dang cool looking though.
				</StyledP>
				<StyledP>
					You've probably had a pair of flip flops before, but we gaurantee you that you've never had a pair of flip
					flops like ours. You've probably had water guns before, but holycrap, have you seen our water guns? They're so
					cool.
				</StyledP>
			</StyledText>
			<Categories />
		</StyledBody>
	);
};

export default Content;
