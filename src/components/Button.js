import React from 'react'
import cx from 'classnames'

import 'styles/button.scss'

export default ({ children, className, ...props }) =>
  <div className={cx('button p2', className)} {...props}>
    {children}
  </div>
