import styled from "styled-components";
import splash from "../assets/img/misc/splash.svg";
import waveBottom from "../assets/img/body/waves.svg";
import waveTop from "../assets/img/body/wavesNegative.svg";

const Splash = styled.img`
	margin: 0 auto;
	height: 12rem;
	width: 100%;
`;

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
	height: 16rem;
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
	top: 7rem;
	padding-bottom: 14rem;
`;

const RightText = styled.p`
	padding-right: 4rem;
	font-size: 4rem;
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
	return (
		<StyledBody>
			<Splash src={splash} alt="splash" />
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
		</StyledBody>
	);
};

export default Content;
