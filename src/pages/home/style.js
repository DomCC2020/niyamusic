import styled from 'styled-components'
import { variables, px } from '../../styles/global-style'

const $space_y = px(12)
const $tab_h = px(48)
const $searBox_h = px(40)

export const HomeContainer = styled.div`
    height:100%;
    padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
    padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
`
export const Top = styled.div`
    height: ${$tab_h};
    display:flex;
    align-items:center;
    padding:${$space_y} ${variables['$padding-x']};
    box-sizing: border-box;
    background-color:${variables['$white']};
    >div{
        flex:1
    }
    >a{
        font-size: ${px(25)};
        color:${variables['theme-color']};
    }
`

export const Tab = styled.div`
    display:inline-flex;
    a{
        font-size: ${variables['$font-size-l']};
        color: ${variables['$dark']};
        display:block;
        padding: 0 0  ${px(3)};
        margin-right: ${px(15)};
        border-bottom: 3px solid transparent;
        &.active{
            color:${variables['theme-color']};
            font-weight:${variables['$font-weight-bold']};
            border-bottom-color:${variables['theme-color']};
        }
    }
`

export const SearchBox = styled.div`
  width: 100%;
  height: ${$searBox_h};
  padding:0 ${px(12)} 4px;
  box-sizing:border-box;
  background-color: ${variables['$white']};
  top:0;
  right: 0;
  z-index: ${variables['$z-index']};
` 

export const Container = styled.div`
    // calc运算符一定要保留空格
    height: calc(100% - ${$tab_h} - ${$searBox_h});
    /* padding-top: ${px(8)}; */
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
`
