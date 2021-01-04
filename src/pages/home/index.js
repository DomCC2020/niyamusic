import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'

import AliveRoute from '../../components/AliveRoute'

import Recommend from '../recommend'
import Singers from '../singers'
import Rank from '../rank'

import SearchInput from '../../components/SearchInput'

import { HomeContainer, Top, Tab, SearchBox, Container } from './style'
function Home () {
  return (
    <HomeContainer>
      <Top>
        <Tab>
          {/*  <NavLink to='/recommend' activeClassName='active'>推荐</NavLink> */}
          <NavLink to='/home/recommend'>推荐</NavLink>
          <NavLink to='/home/singers'>歌手</NavLink>
          <NavLink to='/home/rank'>排行榜</NavLink>
        </Tab>
        <NavLink to='/rank' className='icon iconfont icon-touxiang' />
      </Top>
      <SearchBox>
        <SearchInput />
      </SearchBox>
      <Container>
        <AliveRoute path='/home/recommend' livePath={['/home/singers', '/home/rank', '/demo']} component={Recommend} />
        <AliveRoute path='/home/singers' livePath={['/home/recommend', '/home/rank']} component={Singers} />
        <AliveRoute path='/home/rank' livePath={['/home/recommend', '/home/singers']} component={Rank} />
      </Container>
    </HomeContainer>
  )
}

export default memo(Home)
