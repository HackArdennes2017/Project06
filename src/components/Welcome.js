import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Button from 'components/Button'
import Layout from 'components/Layout'

import 'styles/welcome.scss'

@connect(null, { push })
class Welcome extends Component {
  render() {
    return (
      <Layout withNavBar={false} className="flex-auto items-center p3">
        <div
          className="justify-center items-center"
          style={{ width: 80, height: 80, background: 'red' }}
        >
          Logo
        </div>
        <div className="mt4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Button isLoading={isLoading} className="welcome-button" onClick={this.hanleContinue}>
          Continuer
        </Button>
      </Layout>
    )
  }
}

export default Welcome
