import React, { Component } from 'react'

import Layout from 'components/Layout'

class ComingSoon extends Component {
  render() {
    return (
      <Layout className="items-center justify-center">
        <i className="material-icons" style={{ fontSize: 120 }}>
          access_time
        </i>
        <div
          style={{
            fontSize: 30,
            marginTop: 30,
          }}
        >
          {'Coming... soon?'}
        </div>
      </Layout>
    )
  }
}

export default ComingSoon
