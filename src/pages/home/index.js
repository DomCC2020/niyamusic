import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import SearchInput from '../../components/SearchInput'
import { Top, Tab, Content } from './style'

function Home (props) {
  const { route } = props
  // console.log(route.routes)
  return (
    <div>
      <Top>
        <Tab>
          {/*  <NavLink to='/recommend' activeClassName='active'>推荐</NavLink> */}
          <NavLink to='/recommend'>推荐</NavLink>
          <NavLink to='/singers'>歌手</NavLink>
          <NavLink to='/rank'>排行榜</NavLink>
        </Tab>
        <NavLink to='/rank' className='icon iconfont icon-touxiang' />
      </Top>
      <Content>
        <SearchInput />
        <div className='content-page'>
          {renderRoutes(route.routes)}
        </div>
      </Content>
    </div>
  )
}

export default memo(Home)
