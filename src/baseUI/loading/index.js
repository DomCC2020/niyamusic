import React from 'react'
import styled, { keyframes } from 'styled-components'

import { variables } from '../../styles/global-style'

const loading = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`

const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: ${variables['$z-index-ll']};
  ${variables['flexCenter']()};
  >div {
    width: 60px;
    height: 60px;
    background-color: ${variables['theme-color']};
    opacity: 0.6;
    border-radius: 50%;
    position:absolute;
    animation: ${loading} 1.4s infinite  ease-in-out;
  }
  >div:nth-child(2){
    animation-delay: -0.7s;
  }
 

`

function Loading () {
  return (
    <LoadingWrapper>
      <div/>
      <div />
    </LoadingWrapper>
  )
}

export default Loading
