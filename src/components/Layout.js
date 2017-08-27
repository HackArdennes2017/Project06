import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import { connect } from 'react-redux'
import { goBack, replace, push } from 'react-router-redux'
import cx from 'classnames'

@connect(null, { goBack, replace, push })
class Layout extends Component {
  state = { hasEntered: false }

  componentWillMount() {
    if (!this.props.hideVote) {
      document.body.classList.add('showVote')
    } else {
      document.body.classList.remove('showVote')
    }
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
      backRoute,
      replace,
      withoutBack,
      style,
      push, // eslint-disable-line
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
                  position: 'fixed',
                  height: 50,
                  top: 0,
                  width: '100%',
                }}
                className="navbar-container"
              >
                <div className="navbar">
                  {withoutBack
                    ? <div style={{ width: 35 }} />
                    : <i
                        onClick={backRoute ? () => replace(backRoute) : goBack}
                        className="material-icons"
                        style={{
                          position: 'relative',
                          fontSize: 35,
                          left: -10,
                        }}
                      >
                        keyboard_arrow_left
                      </i>}
                  <div
                    style={{
                      transform: `translate3d(0, ${m.offset}%, 0)`,
                      opacity: m.opacity,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    className="justify-center items-center"
                    style={{ width: 35, height: 35 }}
                  >
                    <i
                      className="material-icons"
                      onClick={() => this.props.push('/profile')}
                      style={{
                        position: 'relative',
                        left: 7,
                      }}
                    >
                      account_circle
                    </i>
                  </div>
                </div>
              </div>}
            <div
              className={cx('flex-auto', className)}
              style={{
                opacity: m.opacity,
                marginTop: withNavBar ? 50 : 0,
                ...style,
              }}
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
