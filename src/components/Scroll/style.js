import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform:translateZ(0);
  touch-action: none;
  #scrollView{
    height: 100%;
    overflow:auto;
    zoom:1;
    
    // touch-action: none;
  }
`
