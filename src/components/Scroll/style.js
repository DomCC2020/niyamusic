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
    /* height:100%; */
    transform:translate3d(0, 0, 0);
    margin-top: 0;
    margin-bottom:0;
    transform-origin: left top 0;
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

export const RefreshLoadWrapper = styled.div`
  width: 100%;
  height: 40px;
  margin-top: -40px;
  overflow:hidden;
  >.refresh-load{
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
    >.loading-item{
      width: 4px;
      height: 15px;
      background-color: #ffbe51;
      opacity: 0.2;
      margin:0 2px;
      &:nth-child(1){
        transform:scaleY(0.5)
      }
      &:nth-child(2){
        transform:scaleY(0.8)
      }
      &:nth-child(3){
        transform:scaleY(1)
      }
      &:nth-child(4){
        transform:scaleY(0.8)
      }
      &:nth-child(5){
        transform:scaleY(0.5)
      }
    }
  }
  >.refresh-load.animate{
    >.loading-item{
      animation: ${dance} 0.5s ease-in-out infinite;
      &:nth-child(1){
        animation-delay: 0.1s
      }
      &:nth-child(2){
        animation-delay: 0.2s
      }
      &:nth-child(3){
        animation-delay: 0.3s
      }
      &:nth-child(4){
        animation-delay: 0.2s
      }
      &:nth-child(5){
        animation-delay: 0.1s
      }
    }
  }


`
