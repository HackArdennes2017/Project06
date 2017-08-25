import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

import { fetchItems } from 'action/items'

import Layout from 'components/Layout'
import Button from 'components/Button'
import Item from 'components/Item'

@connect(
  ({ items }) => ({
    items,
  }),
  { push, fetchItems },
)
class CabaretVert extends Component {
  render() {
    const { items } = this.props

    return (
      <Layout title="Cabaret Vert" backRoute="/festivals">
        <div className="px3 pt3">
          <Button
            onClick={() => this.props.push('/cabaret-vert/give')}
            style={{ backgroundColor: '#fc7772' }}
          >
            Je donne
          </Button>
          <div className="flex-row items-center my2">
            <div
              className="flex-auto ml4"
              style={{ height: 1, backgroundColor: '#ddd' }}
            />
            <div className="mx2" style={{ color: '#ccc' }}>
              ou
            </div>
            <div
              className="flex-auto mr4"
              style={{ height: 1, backgroundColor: '#ddd' }}
            />
          </div>
        </div>
        <div>
          {items.map((item, index) => <Item key={index} item={item} />)}
        </div>
      </Layout>
    )
  }
}

export default CabaretVert
