import styled from 'styled-components'
import { $gray_100, px, variables } from '../../../../styles/global-style'

export const ListWrapper = styled.div `
  
`
export const List = styled.div `
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content: space-between;
`

export const ListItem = styled.div`
  position:relative;
  width: 32.3%;
  .dec{
    .dec-text{
      font-size: ${variables['$font-size-s']};
      line-height: 1.2;
      color: ${variables['$color']};
      margin: ${px(4)} 0 ${px(5)}
    }
  }
`
export const ImgWrapper = styled.div`
  position:relative;
  background-color:${$gray_100};
  border-radius: ${variables['$border-radius']};
  overflow:hidden;
  // 防止闪烁
  transform:translateZ(0);
  &::after{
    content:'';
    display: block;
    padding-top:100%;
  }
  .decorate{
    position: absolute;
    z-index:${variables['$z-index-l']};
    top:0;
    right: 0;
    width: 100%;
    height: ${px(30)};
    background: linear-gradient(to bottom, rgb(0 0 0 / 40%), transparent);
  }
  .pay-count{
    position:absolute;
    top: ${px(5)};
    right: ${px(8)};
    z-index: ${variables['$z-index-l']};
    >.icon,.pay-count__text{
      font-size: ${variables['$font-size-ss']};
      color: ${variables['$white']};
      margin-left: 4px
    }
  }
  img{
    position:absolute;
    z-index: ${variables['$z-index']};
    left:0;
    top:0;
    width:100%;
    height:100%;
  }
  
`
