import styled from 'styled-components'
import { variables } from '../../styles/global-style'

export const Container = styled.div`
    width:100%;
    height:160px;
    touch-action:none;
    
    .slider-box{
        width:auto;
        height:100%;
        position: relative;
        .swiper-wrapper{
            .swiper-slide{
                width: 100%;
                height: 100%;
                
            }
            /* .swiper-slide-active{
                border-radius: ${variables['$border-radius-lg']};
                transform:scale(1)
            }  */
        }
        .swiper-pagination-bullet-active{
            background-color:${variables['theme-color']}
        }  
    }
`
export const BgImg = styled.div`
    width: 100%;
    height: 100%;
    background:url(${props=>props.imageUrl}) center no-repeat;
    background-size: cover
`
