import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products';

const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={
      props => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
    }
  />
)

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to='/Products' />
    }
  />
)

const Routes = ({authed}) => (
  <Router>
    <Switch>
      <PrivateRoute authed={authed} path='/Products' component={Products} />
      <PublicRoute authed={authed} exact path='/Login' component={Login} />
      <PublicRoute authed={authed} exact path='/' component={Home} />
      <Route render={() => <p>Error 404</p>} />
    </Switch>
  </Router>
)

export default Routes
