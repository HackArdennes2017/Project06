import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import cx from 'classnames'

import Layout from 'components/Layout'
import Button from 'components/Button'
import ItemChooser from 'components/ItemChooser'

import { createItem } from 'action/items'

import 'styles/give.scss'

@connect(null, { createItem, push })
class Give extends Component {
  state = {
    isLoading: false,
    isDecoding: false,
    base64: null,
    item: {
      type: 'tent',
      quality: 'used',
      picture: null,
    },
  }

  handleChangeItem = item => this.setState({ item })

  handleChangeFile = e => {
    const reader = new FileReader()
    const picture = e.target.files[0]
    if (!picture) {
      return
    }

    this.setState({
      isDecoding: true,
      item: {
        ...this.state.item,
        picture,
      },
    })

    reader.onload = res => {
      const base64 = res.target.result
      this.setState({
        isDecoding: false,
        base64,
      })
    }

    reader.readAsDataURL(picture)
  }

  handleSubmit = async () => {
    this.setState({ isLoading: true })
    await this.props.createItem(this.state.item, {
      onSuccess: item => {
        setTimeout(() => {
          window.item = item
          this.props.push({ pathname: '/summary' })
        }, 1000)
      },
    })
  }

  render() {
    const { item, isLoading, isDecoding, base64 } = this.state
    return (
      <Layout title="Je donne" backRoute="/cabaret-vert">
        <div className="items-center justify-center" style={{ height: 200 }}>
          {isDecoding
            ? <img
                src="/assets/spinner-black.svg"
                height="60px"
                style={{ opacity: 0.3 }}
              />
            : base64
              ? <img
                  src={base64}
                  style={{ maxHeight: 160 }}
                  className="PhotoChosen"
                />
              : <label
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
                </label>}
        </div>
        <ItemChooser
          item={item}
          onChange={isLoading ? undefined : this.handleChangeItem}
        />
        <div className="p3">
          <Button
            isLoading={isLoading}
            disabled={!base64}
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
