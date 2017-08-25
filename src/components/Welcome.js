import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Button from 'components/Button'
import Layout from 'components/Layout'

import 'styles/welcome.scss'

@connect(null, { push })
class Welcome extends Component {
  state = {
    isLoading: false,
  }
  hanleContinue = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.props.push('/festivals')
    }, 800)
  }
  render() {
    const { isLoading } = this.state
    return (
      <Layout withNavBar={false} className="flex-auto items-center p3">
        <div className="justify-center items-center" style={{ marginTop: 70 }}>
          <img height={170} src="/assets/logo.png" />
        </div>
        <div className="mt4">Sardine. Blabla marketing.</div>
        <Button
          isLoading={isLoading}
          className="welcome-button"
          onClick={this.hanleContinue}
        >
          Continuer
        </Button>
      </Layout>
    )
  }
}

export default Welcome
