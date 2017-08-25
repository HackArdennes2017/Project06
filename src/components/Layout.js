import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import cx from 'classnames'

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
            <div onClick={goBack}>Back</div>
            <div>
              {title}
            </div>
            <div>Profile</div>
          </div>}
        <div className={cx('px3 py1', className)} {...props}>
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
