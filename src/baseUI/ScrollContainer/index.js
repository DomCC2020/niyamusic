import styled from 'styled-components'
import { px, variables } from '../../styles/global-style'

const PageWrapper = styled.div`
  height: 100%;
  padding: 0 ${variables['$padding-x']} ${px(10)};
  position: relative;
  box-sizing: border-box;
`
export default PageWrapper
