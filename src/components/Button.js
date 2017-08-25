import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import cx from 'classnames'

import 'styles/button.scss'

const springConfig = {
  stiffness: 300,
}

class Button extends Component {
  render() {
    const {
      children,
      isLoading,
      className,
      style,
      onClick,
      ...props
    } = this.props
    return (
      <Motion
        style={{
          offsetY: spring(isLoading ? 100 : 0, springConfig),
          opacity: spring(isLoading ? 0.9 : 1),
        }}
      >
        {m =>
          <div
            className={cx('button', className)}
            style={{
              opacity: m.opacity,
              ...style,
            }}
            onClick={isLoading ? undefined : onClick}
            {...props}
          >
            <div
              className="flex flex-row items-center"
              style={{
                height: '100%',
                transform: `translate3d(0, ${-m.offsetY}%, 0)`,
              }}
            >
              {children}
            </div>
            <div
              className="flex flex-row items-center justify-center"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                transform: `translate3d(0, ${100 - m.offsetY}%, 0)`,
              }}
            >
              <img src="/assets/spinner.svg" height="60%" />
            </div>
          </div>}
      </Motion>
    )
  }
}

export default Button
