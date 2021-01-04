import styled from 'styled-components'
import { px, variables } from '../../../../styles/global-style'

export const ListWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
`
export const ListItem = styled.div`
  border-bottom: ${variables['$border-width']} ${variables['$border-color']} solid;
  padding: ${px(4)} 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img{
    width: ${px(50)};
    height: ${px(50)};
    border-radius: ${variables['$border-radius-sm']};
    margin-right: ${px(10)}
  }
  >.name{
    font-size: ${variables['$font-size-base']};
    color: ${variables['$color']};
  }
`

// .strip-loading {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 200px;
//     height: 200px;
//     li {
//         border-radius: 3px;
//         width: 6px;
//         height: 30px;
//         background-color: #f66;
//         animation: beat 1s ease-in-out infinite;
//         & + li {
//             margin-left: 5px;
//         }
//         &:nth-child(2) {
//             animation-delay: 200ms;
//         }
//         &:nth-child(3) {
//             animation-delay: 400ms;
//         }
//         &:nth-child(4) {
//             animation-delay: 600ms;
//         }
//         &:nth-child(5) {
//             animation-delay: 800ms;
//         }
//         &:nth-child(6) {
//             animation-delay: 1s;
//         }
//     }
// }
// @keyframes beat {
//     0%,
//     100% {
//         transform: scaleY(1);
//     }
//     50% {
//         transform: scaleY(.5);
//     }
// }
