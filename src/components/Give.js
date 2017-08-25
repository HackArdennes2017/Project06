import React, { Component } from 'react'

import Layout from 'components/Layout'
import Button from 'components/Button'
import ItemChooser from 'components/ItemChooser'

import 'styles/give.scss'

class Give extends Component {
  state = {
    items: [
      {
        type: 'tent',
        quality: 'used',
      },
    ],
  }
  handleChangeItem = (i, newItem) => {
    const newItems = [...this.state.items]
    newItems.splice(i, 1, newItem)
    this.setState({ items: newItems })
  }
  render() {
    const { items } = this.state
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
        {items.map((item, i) =>
          <ItemChooser
            key={i}
            item={item}
            onChange={newItem => this.handleChangeItem(i, newItem)}
          />,
        )}
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
