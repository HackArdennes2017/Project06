import React, { Component } from 'react'

import Layout from 'components/Layout'
import Button from 'components/Button'

class CabaretVert extends Component {
  render() {
    return (
      <Layout className="justify-between" title="Cabaret Vert">
        <Button>Je donne</Button>
        <Button>Je récupère</Button>
      </Layout>
    )
  }
}

export default CabaretVert
