import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from 'components/Layout'
import Item from 'components/Item'

@connect(({ items }) => ({ item: items[items.length - 1] }))
class Profile extends Component {
  render() {
    const { item } = this.props
    return (
      <Layout title="Mon Profil" backRoute="/festivals">
        <div
          className="flex-row px2 py3"
          style={{ justifyContent: 'space-around' }}
        >
          <div className="center">
            <img
              src="/assets/medal.svg"
              alt="badge"
              className="mb2"
              style={{ height: 90 }}
            />
            <div>
              <strong>1</strong> Badge
            </div>
          </div>
          <div className="center">
            <img
              src="/assets/coins.svg"
              alt="coins"
              className="mb2"
              style={{ height: 90 }}
            />
            <div>
              <strong>$4</strong> Sardines
            </div>
          </div>
        </div>
        <div className="mb2">
          <div
            className="p1 flex-row items-center item"
            style={{ backgroundColor: 'white', width: '100%' }}
          >
            <i className="material-icons">account_circle</i>
            <input
              type="text"
              defaultValue="Hugo"
              style={{ color: '#333', backgroundColor: 'white' }}
              className="ml1 flex-auto border-none p1 rounded"
            />
          </div>
          <div
            className="p1 flex-row items-center item"
            style={{ backgroundColor: 'white', width: '100%' }}
          >
            <i className="material-icons">phone</i>
            <input
              type="text"
              defaultValue="06 77 98 50 12"
              style={{ color: '#333', backgroundColor: 'white' }}
              className="ml1 flex-auto border-none p1 rounded"
            />
          </div>
        </div>
        {item &&
          <div>
            <div>Mes objets en ligne</div>
            <div>
              <Item item={item} />
            </div>
          </div>}
      </Layout>
    )
  }
}

export default Profile
