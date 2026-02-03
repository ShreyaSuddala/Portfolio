import { keyframes, css } from 'styled-components'

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`

const bounceUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 1;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const bounceAnimation = css`
  animation: ${bounce} 2s ease-in-out infinite;
`

export const bounceInAnimation = css`
  animation: ${bounceIn} 0.8s ease-out forwards;
`

export const bounceUpAnimation = css`
  animation: ${bounceUp} 0.6s ease-out forwards;
`

export default bounce
