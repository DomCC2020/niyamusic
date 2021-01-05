// import React from 'react'
// import { Redirect } from 'react-router-dom'

// import Home from '../pages/home'
// import Recommend from '../pages/recommend'
// import Singers from '../pages/singers'
// import Rank from '../pages/rank'

// const routes = [
//   {
//     path: '/',
//     component: Home,
//     routes: [{
//       path: '/',
//       exact: true,
//       render: ()=> <Redirect to='/recommend' />
//     }, {
//       path: '/recommend',
//       component: Recommend
//     }, {
//       path: '/singers',
//       component: Singers
//     }, {
//       path: '/rank',
//       component: Rank
//     }]
//   },
//   {
//     path: '/demo',
//     component: Rank,
//   }
// ]

// export default routes

import React from 'react'

import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import AliveRoute from '../components/AliveRoute'
import RouteCatch from '../components/RouteCatch'
import Home from '../pages/home'
import Recommend from '../pages/recommend'
import Singers from '../pages/singers'
import Rank from '../pages/rank'
import Demo from '../pages/ClassPageDemo'
// import NotLiveRoute from 'react-live-route'

// const LiveRoute = withRouter(NotLiveRoute)

function Routes () {
  return (
    <>
      <Switch>
        <Route exact path='/' render={()=><Redirect to='/home/recommend' />} />
      </Switch>
      <AliveRoute path='/home' livePath={'/demo'} component={Home} />
  
      {/* </Switch> */}

      <AliveRoute path='/recommend' livePath={'/demo'} component={Recommend} />
      <AliveRoute path='/demo' livePath={['/home/recommend', '/recommend']} component={Demo} />
      {/* AliveRoute */}
    </>
  )
}

export default Routes
