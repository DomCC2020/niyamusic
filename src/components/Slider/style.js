import styled from 'styled-components'
import { variables } from '../../styles/global-style'

export const Container = styled.div`
    width:100%;
    height:130px;
    touch-action:none;
    
    .slider-box{
        width:auto;
        height:100%;
        position: relative;
        .swiper-wrapper{
            .swiper-slide{
                width: 83%;
                height: 100%;
                border-radius:${variables['$border-radius-sm']};
                overflow:hidden;
                transform:scale3d(0.9, 0.9, 1);
                transition: transform 0.1s ease-in-out 0s;
            }
            .swiper-slide-active{
                border-radius:${variables['$border-radius']};
                overflow:hidden;
                border-radius: ${variables['$border-radius-lg']};
                transform:scale3d(1, 1, 1);
                //transform:scaleY(1);
            } 
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
