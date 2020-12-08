import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App
