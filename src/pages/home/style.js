import styled from 'styled-components'
import { variables, px } from '../../styles/global-style'

const $space_y = px(12)

export const HomeContainer = styled.div`
    height:100%;
    padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
    padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
`
export const Top = styled.div`
    display:flex;
    align-items:center;
    padding:${$space_y} ${variables['$padding-x']};
    div{
        flex:1
    }
    >a{
        font-size: ${px(25)};
        color:${variables['$primary']};
        
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
            color:${variables['$primary']};
            font-weight:${variables['$font-weight-bold']};
            border-bottom-color:${variables['$primary']}
        }
    }
`

export const Container = styled.div`
    // calc运算符一定要保留空格
    height: calc(100% - ${px(52)});
    position: relative;
    overflow: hidden;
    .container-search{
        padding:0 ${$space_y} 8px;
        width:100%;
        background: #fff;
        position:absolute;
        z-index: ${variables['$z-index']};
        box-sizing:border-box;
        // transform: translateY(-45px)
    }
    .container-page{
        
        padding:${px(45)} 0;
        // overflow:scroll;
        box-sizing:border-box;
    }
`
