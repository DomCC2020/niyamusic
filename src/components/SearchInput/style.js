import styled from 'styled-components'
import { $gray_500, $gray_600, px, variables } from '../../styles/global-style'

export const Container = styled.div`
    display:flex;
    align-items:center;
    position:relative;
    padding: ${px(5)} 0;
    padding-right: ${px(8)};
    background-color: #e9ecef;
    border-radius: ${variables['$border-radius']};
    height:${px(35)};
    box-sizing:border-box;
    z-index:0;
    .icon{
        font-size: ${variables['$font-size-l']};
        color: ${$gray_600};
        padding:0 ${px(8)};
        margin:0;
        background:transparent;
        
        &:active{
            background:transparent;
        }
    }
    .placeholder{
        font-size: ${variables['$font-size-base']};
        color: ${$gray_500};
        position:absolute;
        margin:auto;
        left: 34px;
        line-height:${px(35)};
        z-index:-1;
        transform: scale(1);
        transition: transform 1s ease-in-out 
    }
`
export const Input = styled.input`
    font-size: ${variables['$font-size-base']};
    color: ${$gray_600};
    padding:0;
    margin:0;
    flex:1;
    background:transparent;
`
