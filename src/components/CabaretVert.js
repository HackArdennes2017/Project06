import React, { Component } from 'react'

import Layout from 'components/Layout'

const Icon = ({ icon }) =>
  <div
    style={{
      width: 200,
      height: 200,
      borderRadius: 200,
      backgroundColor: '#fbaf5d',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img
      src={`/assets/icon_${icon}.svg`}
      style={{ width: '60%', height: '60%' }}
    />
  </div>

class CabaretVert extends Component {
  render() {
    return (
      <Layout className="justify-between px2" title="Cabaret Vert">
        <div className="flex-auto justify-center items-center">
          <Icon icon="take" />
        </div>
        <div className="flex-auto justify-center items-center">
          <Icon icon="give" />
        </div>
      </Layout>
    )
  }
}

export default CabaretVert
