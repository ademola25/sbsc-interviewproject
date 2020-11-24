import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/auth/Login'
import Dashboard from './components/pages/dashboard/Dashboard'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
