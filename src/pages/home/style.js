import styled from 'styled-components'
import { variables, px } from '../../styles/global-style'

const $space_y = px(12)
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
    padding:0 ${$space_y};
     height: 400px;
     transform:translateZ(0);
    .container-search{
        padding: 0 0 10px
    }
    
    
`
