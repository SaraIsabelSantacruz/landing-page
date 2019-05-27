import React, { Component } from 'react'
import { connect } from 'react-redux'
import Routes from './routes/Routes'

class App extends Component {

  render () {
    const {authentication} = this.props
    return (
      <div id='App'>
        <Routes authed={authentication.loggedIn} />
      </div>
    )
  }
}

const mapStateToProps = ({authentication}) => ({authentication})
export default connect(mapStateToProps)(App)
