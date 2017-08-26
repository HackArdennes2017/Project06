import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Button from 'components/Button'
import Layout from 'components/Layout'

import 'styles/welcome.scss'

const LogoIcon = ({ style, icon }) =>
  <div className="logo-icons" style={style}>
    <div className="translate">
      <img src={`/assets/logo_icons/${icon}.svg`} className="scale" />
    </div>
  </div>

@connect(null, { push })
class Welcome extends Component {
  state = { isLoading: false }

  handleContinue = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.props.push('/festivals')
    }, 800)
  }

  render() {
    const { isLoading } = this.state
    return (
      <Layout withNavBar={false} className="flex-auto items-center p3">
        <div
          className="justify-center items-center relative"
          style={{ marginTop: 60 }}
        >
          <div className="logo-icons-wrapper" style={{ opacity: 0.6 }}>
            <LogoIcon icon="chair" style={{ top: 0, left: 10 }} />
            <LogoIcon icon="tent" style={{ top: -35, left: 70 }} />
            <LogoIcon icon="mattress" style={{ top: 0, right: 0 }} />
            <LogoIcon icon="sleeping-bag" style={{ top: 55, left: -20 }} />
            <LogoIcon icon="chair" style={{ bottom: -20, left: 65 }} />
            <LogoIcon icon="tent" style={{ bottom: 0, left: 0 }} />
            <LogoIcon icon="sleeping-bag" style={{ bottom: 0, right: 0 }} />
            <LogoIcon icon="tent" style={{ top: 55, right: -17 }} />
          </div>
          <img
            className="relative"
            alt="logo"
            height={170}
            src="/assets/logo.png"
            style={{ zIndex: 10 }}
          />
        </div>
        <div
          onClick={() => this.props.push('/about')}
          className="flex-row items-center"
          style={{ position: 'absolute', top: 15, right: 15, fontSize: 12 }}
        >
          <i className="material-icons mr1" style={{ fontSize: 18 }}>
            info
          </i>
          {'Comment ça marche ?'}
        </div>
        <div
          className="mt4"
          style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold' }}
        >
          Les Sardines
        </div>
        <div className="mt2" style={{ width: 270, textAlign: 'center' }}>
          La plateforme solidaire de matériel de camping pour festivaliers
        </div>
        <Button
          isLoading={isLoading}
          className="welcome-button"
          onClick={this.handleContinue}
        >
          Je commence !
        </Button>
      </Layout>
    )
  }
}

export default Welcome
