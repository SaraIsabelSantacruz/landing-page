import React, { Component, Fragment } from 'react'
import Technologies from '../components/sections/Technologies'
import Woloxers from '../components/sections/Woloxers'
import Benefits from '../components/sections/Benefits'
import Requirements from '../components/sections/Requirements'
import Header from '../components/componentsHeader/Header'
import Footer from '../components/componentsFooter/Footer'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header pageType={'home'}/> 
        <Technologies/>
        <Woloxers/>
        <Benefits/>
        <Requirements/>
        <Footer pageType={'home'}/>
      </Fragment>
    )
  }
}

export default Home