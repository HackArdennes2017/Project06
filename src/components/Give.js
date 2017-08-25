import React, { Component } from 'react'
import cx from 'classnames'

import Layout from 'components/Layout'
import Button from 'components/Button'
import ItemChooser from 'components/ItemChooser'

import 'styles/give.scss'

class Give extends Component {
  state = {
    isLoading: false,
    item: {
      image: null,
      type: 'tent',
      quality: 'used',
    },
  }

  handleChangeItem = item => this.setState({ item })

  handleChangeFile = e => {
    const reader = new FileReader()
    const file = e.target.files[0]
    if (!file) {
      return
    }

    reader.onload = res => {
      const base64 = res.target.result
      this.setState({ item: { ...this.state.item, image: base64 } })
    }

    reader.readAsDataURL(file)
  }

  handleSubmit = async () => {
    this.setState({ isLoading: true })
    console.log(`submitting`, this.state)
  }

  render() {
    const { item, isLoading } = this.state
    return (
      <Layout title="Je donne" backRoute="/cabaret-vert">
        <div className="items-center justify-center" style={{ height: 200 }}>
          <label
            className={cx(
              'PhotoButton flex flex-column items-center justify-center',
              {
                disabled: isLoading,
              },
            )}
            tabIndex={0}
          >
            <input
              disabled={isLoading}
              style={{ display: 'none' }}
              type="file"
              accept="image/*;capture=camera"
              onChange={this.handleChangeFile}
            />
            <img
              style={{ marginBottom: -10 }}
              height="80"
              src="/assets/icons/camera.svg"
            />
            {'Prendre une photo'}
          </label>
        </div>
        <ItemChooser
          item={item}
          onChange={isLoading ? undefined : this.handleChangeItem}
        />
        <div className="p3">
          <Button
            isLoading={isLoading}
            disabled={!item.image}
            onClick={this.handleSubmit}
          >
            {"C'est parti"}
          </Button>
        </div>
      </Layout>
    )
  }
}

export default Give
