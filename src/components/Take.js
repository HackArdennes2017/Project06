import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getTypeLabel,
  getTypeIcon,
  getQualityIcon,
  getQualityLabel,
} from 'helpers/types'

import Layout from 'components/Layout'
import Button from 'components/Button'
import { Choice } from 'components/ItemChooser'

@connect((state, ownProps) => ({
  item: state.items.find(item => ownProps.match.params.id === item._id),
}))
class Take extends Component {
  state = { isLoading: false }

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
    const { isLoading } = this.state
    const { item } = this.props

    return (
      <Layout title="Je récupère" backRoute="/cabaret-vert">
        <div className="">
          <div className="items-center justify-center" style={{ height: 300 }}>
            <img
              className="PhotoChosen"
              src={`/assets/uploads/${item.picture}`}
              style={{ maxHeight: 250 }}
            />
          </div>
          <div className="ItemChooser">
            <div className="ItemChooserSection flex-row py2 justify-center">
              <Choice
                icon={getTypeIcon(item.type)}
                label={getTypeLabel(item.type)}
                isDisplay
              />
              <Choice
                icon={getQualityIcon(item.quality)}
                label={getQualityLabel(item.quality)}
                isDisplay
              />
            </div>
          </div>
          <div className="p3">
            <Button isLoading={isLoading} onClick={this.handleSubmit}>
              {'Je le veux !'}
            </Button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Take
