import React from 'react'

export default props => (
  <svg
    style={{
      enableBackground: 'new 0 0 64 64',
    }}
    viewBox='0 0 64 80'
    {...props}
  >
    <path
      d='M32 4c15.4 0 28 12.6 28 28S47.4 60 32 60 4 47.4 4 32 16.6 4 32 4m0-4C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0z'
    />
    <circle
      cx='20'
      cy='23.5'
      r='5'
    />
    <circle
      cx='44'
      cy='23.5'
      r='5'
    />
    <path
      d='M46.5 45.5c-2.6-5.4-8.1-9.1-14.5-9.1s-11.9 3.7-14.5 9.1'
    />
  </svg>
)
