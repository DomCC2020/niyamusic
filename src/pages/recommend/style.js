import styled from 'styled-components'
import { px, variables } from '../../styles/global-style'

export const RecommendWrapper = styled.div`
  position: relative;
  height: 100%;
`

export const SearchBox = styled.div`
  width: 100%;
  padding:0 ${px(12)} 8px;
  position: absolute;
  box-sizing:border-box;
  background-color: ${variables['$white']};
  top:0;
  right: 0;
  z-index: ${variables['$z-index']};
  
` 
export const Container = styled.div`
  // height: 100%;
  padding: ${px(45)}  ${variables['$padding-x']} 0;
  box-sizing:border-box;
` 
