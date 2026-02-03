import { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const fadeInAnimation = css`
  animation: ${fadeIn} 0.6s ease-out forwards;
`

export const fadeInUpAnimation = css`
  animation: ${fadeInUp} 0.6s ease-out forwards;
`

export const fadeInDownAnimation = css`
  animation: ${fadeInDown} 0.6s ease-out forwards;
`

export const fadeInLeftAnimation = css`
  animation: ${fadeInLeft} 0.6s ease-out forwards;
`

export const fadeInRightAnimation = css`
  animation: ${fadeInRight} 0.6s ease-out forwards;
`

export default fadeIn
