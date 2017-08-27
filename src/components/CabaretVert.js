import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

import { fetchItems } from 'action/items'

import Layout from 'components/Layout'
import Button from 'components/Button'
import Item from 'components/Item'
import TagChooser from 'components/TagChooser'

import { tagsTypes } from 'helpers/types'

@connect(
  ({ items }) => ({
    items,
  }),
  { push, fetchItems },
)
class CabaretVert extends Component {
  state = {
    loadingItem: null,
  }
  handleNavigateTo = item => {
    this.setState({ loadingItem: item })
    setTimeout(() => {
      this.props.push(`/cabaret-vert/take/${item._id}`)
    }, 400)
  }
  render() {
    const { items } = this.props
    const { loadingItem } = this.state

    const availableItems = items.filter(
      item => item.inStock && !item.booked && !item.deleted,
    )

    return (
      <Layout title="Cabaret Vert" backRoute="/festivals">
        <div className="px3 pt3">
          <div className="mb1 center">J&apos;aimerai donner du matériel</div>
          <Button
            onClick={() => this.props.push('/cabaret-vert/give')}
            style={{ backgroundColor: '#fc7772' }}
          >
            Je donne !
          </Button>
          <div className="flex-row items-center my2">
            <div
              className="flex-auto ml3"
              style={{ height: 1, backgroundColor: '#ccc' }}
            />
            <div className="mx2" style={{ color: '#ccc' }}>
              ou
            </div>
            <div
              className="flex-auto mr3"
              style={{ height: 1, backgroundColor: '#ccc' }}
            />
          </div>
        </div>
        <div className="mb1 center">J&apos;ai besoin de matériel</div>

        <TagChooser tags={tagsTypes} />

        <div>
          {availableItems.map((item, index) =>
            <Item
              key={index}
              loadingItem={loadingItem}
              item={item}
              onClick={() => this.handleNavigateTo(item)}
            />,
          )}
        </div>
      </Layout>
    )
  }
}

export default CabaretVert
