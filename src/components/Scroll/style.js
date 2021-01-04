import styled, { keyframes } from 'styled-components'

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow:auto;
  position: relative;
  transform:translateZ(0);
  -webkit-overflow-scrolling:touch;
  
  /* touch-action: none; */
  .scrollView{
    /* height: calc(100% + 40px ); */
    // overflow:auto;
    zoom:1;
    
    // touch-action: none;
  }
`
const dance = keyframes`
  0%, 100%{
    transform: scaleY(1)
  }
  50%{
    transform: scaleY(0.5)
  }
`

export const RefreshLoading = styled.div`
  width: 100%;
  height: 40px;
  display:flex;
  justify-content: center;
  align-items:center;
  margin-top: -40px;
  >.loading-item{
    width: 4px;
    height: 15px;
    background-color: #ffbe51;
    opacity: 0.4;
    margin:0 2px;
    animation: ${dance} 0.5s ease-in-out infinite;
  }
  >.loading-item:nth-child(1){
    animation-delay: 0s
  }
  >.loading-item:nth-child(2){
    animation-delay: 0.2s
  }
  >.loading-item:nth-child(3){
    animation-delay: 0.4s
  }
  >.loading-item:nth-child(4){
    animation-delay: 0.6s
  }
  >.loading-item:nth-child(5){
    animation-delay: 0.8s
  }

`
