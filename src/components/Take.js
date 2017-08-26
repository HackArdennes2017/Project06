import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import {
  getTypeLabel,
  getTypeIcon,
  getQualityIcon,
  getQualityLabel,
} from 'helpers/types'

import Layout from 'components/Layout'
import Button from 'components/Button'
import { Choice } from 'components/ItemChooser'

@connect(
  (state, ownProps) => ({
    item: state.items.find(item => ownProps.match.params.id === item._id),
  }),
  { push },
)
class Take extends Component {
  state = { isLoading: false }

  handleSubmit = () => {
    this.setState({ isLoading: true })
    setTimeout(
      () =>
        this.props.push({
          pathname: '/summary',
          state: { item: this.props.item, mode: 'take' },
        }),
      1000,
    )
  }

  render() {
    const { isLoading } = this.state
    const { item } = this.props

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
