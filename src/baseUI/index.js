import styled from 'styled-components'
import { variables, px } from '../styles/global-style'

export const Title = styled.h2`
  font-size:${variables['$title-size-base']};
  font-weight: ${variables['$font-weight-bold']};
  color: ${variables['$title-color']};
  margin: ${px(10)} 0 ${px(12)}
`
