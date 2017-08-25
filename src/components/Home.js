import React, { Component } from 'react'
import Layout from 'components/Layout'
import Button from 'components/Button'

class Home extends Component {
  render() {
    return (
      <Layout className="justify-between">
        <Button>Je donne</Button>
        <Button>Je récupère</Button>
      </Layout>
    )
  }
}

export default Home
