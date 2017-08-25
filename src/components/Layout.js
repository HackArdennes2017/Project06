import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

@connect(null, { goBack })
class Layout extends Component {
  state = {
    hasEntered: false,
  }
  componentDidMount() {
    window.requestAnimationFrame(() => this.setState({ hasEntered: true }))
  }
  render() {
    const {
      children,
      withNavBar = true,
      animateNavBar = true,
      animateContent = true,
      className,
      title,
      goBack,
      ...props
    } = this.props
    const { hasEntered } = this.state

    return (
      <Motion
        style={{
          offset: spring(animateNavBar ? (hasEntered ? 0 : 30) : 0),
          opacity: spring(animateContent ? (hasEntered ? 1 : 0) : 1),
        }}
      >
        {m =>
          <div style={{ minHeight: '100vh' }}>
            {withNavBar &&
              <div
                style={{
                  height: 50,
                }}
                className="navbar-container"
              >
                <div className="navbar">
                  <i
                    onClick={goBack}
                    className="material-icons"
                    style={{ position: 'relative', fontSize: 35, left: -10 }}
                  >
                    keyboard_arrow_left
                  </i>
                  <div
                    style={{
                      transform: `translate3d(0, ${m.offset}%, 0)`,
                      opacity: m.opacity,
                    }}
                  >
                    {title}
                  </div>
                  <div>
                    <i className="material-icons">account_circle</i>
                  </div>
                </div>
              </div>}
            <div
              className={className}
              style={{ opacity: m.opacity }}
              {...props}
            >
              {children}
            </div>
          </div>}
      </Motion>
    )
  }
}

export default Layout
