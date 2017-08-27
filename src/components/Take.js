import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import {
  getTypeLabel,
  getTypeIcon,
  getQualityIcon,
  getQualityLabel,
} from 'helpers/types'

import { bookItem } from 'action/items'

import Layout from 'components/Layout'
import Button from 'components/Button'
import { Choice } from 'components/ItemChooser'

@connect(
  (state, ownProps) => ({
    item: state.items.find(item => ownProps.match.params.id === item._id),
  }),
  { push, bookItem },
)
class Take extends Component {
  state = { isLoading: false }

  handleSubmit = async () => {
    const { item } = this.props
    this.setState({ isLoading: true })
    await this.props.bookItem(item)
    setTimeout(() => {
      this.props.push({ pathname: `/summary/${item._id}` })
    }, 500)
  }

  render() {
    const { isLoading } = this.state
    const { item } = this.props
    if (!item) {
      return ''
    }

    return (
      <Layout title="Je récupère" backRoute="/cabaret-vert">
        <div className="">
          <div className="items-center justify-center" style={{ height: 300 }}>
            <img
              alt="photo"
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
          <div className="p3" style={{ marginBottom: 50 }}>
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
