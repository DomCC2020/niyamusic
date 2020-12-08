import styled from'styled-components';
import { variables } from '../../styles/global-style';

export const Container = styled.div`
    width:100%;
    height:140px;
    touch-action:none;
    .slider-box{
        width:auto;
        height:100%;
        position: relative;
        overflow:hidden;
        .swiper-wrapper{
            .swiper-slide{
                width: 83%;
                height: 100%;
                border-radius: ${variables['$border-radius-sm']};
                transform:scale(0.93,0.9);
                transition:transform 0.2s cubic-bezier(0.32, 0.31, 0.58, 1) 0s;
                transform-origin:center;
                overflow:hidden;
            }
            .swiper-slide-active{
                border-radius: ${variables['$border-radius-lg']};
                transform:scale(1)
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
