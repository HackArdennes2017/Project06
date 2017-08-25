import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

import Layout from 'components/Layout'
import Button from 'components/Button'

@connect(null, { push })
class CabaretVert extends Component {
  render() {
    return (
      <Layout title="Cabaret Vert">
        <div className="px2 py3">
          <Button onClick={() => this.props.push('/cabaret-vert/give')}>
            Je donne
          </Button>
          <div className="flex-row items-center my2">
            <div
              className="flex-auto"
              style={{ height: 1, backgroundColor: '#ccc' }}
            />
            <div className="mx2">ou</div>
            <div
              className="flex-auto"
              style={{ height: 1, backgroundColor: '#ccc' }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default CabaretVert
