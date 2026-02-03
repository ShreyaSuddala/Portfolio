import { keyframes, css } from 'styled-components'

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const slideInUpAnimation = css`
  animation: ${slideInUp} 0.6s ease-out forwards;
`

export const slideInDownAnimation = css`
  animation: ${slideInDown} 0.6s ease-out forwards;
`

export const slideInLeftAnimation = css`
  animation: ${slideInLeft} 0.6s ease-out forwards;
`

export const slideInRightAnimation = css`
  animation: ${slideInRight} 0.6s ease-out forwards;
`

export default slideInUp
