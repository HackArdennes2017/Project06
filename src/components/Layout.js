import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'

@connect(null, { goBack })
class Layout extends Component {
  render() {
    const {
      children,
      withNavBar = true,
      className,
      title,
      goBack,
      ...props
    } = this.props

    return (
      <div style={{ height: '100vh' }}>
        {withNavBar &&
          <div style={{ height: 50 }} className="navbar">
            <div onClick={goBack}>
              <i className="material-icons">keyboard_arrow_left</i>
            </div>
            <div>
              {title}
            </div>
            <div>
              <i className="material-icons">face</i>
            </div>
          </div>}
        <div className={className} {...props}>
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
