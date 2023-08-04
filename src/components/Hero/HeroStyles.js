import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 80vh;
  background-color: white;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;


export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  object-fit: contain;
  overflow: hidden;
`;



export const HeroText = styled.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: black;
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  background-color: #3DD1E7;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  width: 100%;
  max-width: 460px;
  cursor: pointer;
  transform: rotate(-2deg);

  @media (max-width: 768px) {
    /* Adjust the padding for smaller screens */
    padding: 0.6rem 1.4rem;
    /* Adjust the max-width to fit the screen */
    max-width: 100%;
  }
}
`;
