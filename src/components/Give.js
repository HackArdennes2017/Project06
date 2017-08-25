import React, { Component } from 'react'

import Layout from 'components/Layout'
import Button from 'components/Button'

import 'styles/give.scss'

class Give extends Component {
  render() {
    return (
      <Layout title="Je donne">
        <div className="items-center justify-center" style={{ height: 200 }}>
          <div
            className="PhotoButton row items-center justify-center"
            tabIndex={0}
          >
            <img
              style={{ marginBottom: -10 }}
              height="80"
              src="/assets/icons/camera.svg"
            />
            {'Prendre une photo'}
          </div>
        </div>
        <div style={{ height: 200, background: 'white' }}>sdlfjk</div>
        <div className="px1 py3">
          <Button>
            {"C'est parti"}
          </Button>
        </div>
      </Layout>
    )
  }
}

export default Give
