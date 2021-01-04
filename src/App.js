import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Routes from './routes'

function App () {
  return (
    <div className="App">
     
      <HashRouter>
        <Routes />
      </HashRouter>
    
    </div>
  )
}

export default App
