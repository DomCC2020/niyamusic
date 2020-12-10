import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import SearchInput from '../../components/SearchInput'
import Scroll from '../../components/Scroll'
import { HomeContainer, Top, Tab, Container } from './style'

function Home (props) {
  const { route } = props
  // console.log(route.routes)
  return (
    <HomeContainer>
      <Top>
        <Tab>
          {/*  <NavLink to='/recommend' activeClassName='active'>推荐</NavLink> */}
          <NavLink to='/recommend'>推荐</NavLink>
          <NavLink to='/singers'>歌手</NavLink>
          <NavLink to='/rank'>排行榜</NavLink>
        </Tab>
        <NavLink to='/rank' className='icon iconfont icon-touxiang' />
      </Top>
      <Container>
        {renderRoutes(route.routes)}
      </Container>
    </HomeContainer>
  )
}

export default memo(Home)
