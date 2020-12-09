import styled from 'styled-components'

export const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  transform:translateZ(0);
  // touch-action: none; /*必须添加防止body一起滚动*/ 
  .demo{
    transform:translateZ(0);
    transition:transform 3s ease 0
  }
`
