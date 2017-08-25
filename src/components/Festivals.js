import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import moment from 'moment'

import Layout from 'components/Layout'

const festivals = [
  {
    name: 'La Cabaret Vert',
    start: moment('2017-08-24'),
    end: moment('2017-08-27'),
    picture:
      'http://www.sensationrock.net/wp-content/uploads/2017/02/cabaret-vert.jpg',
  },
]

@connect(null, { push })
class Festivals extends Component {
  render() {
    return (
      <Layout title="Liste des festivals">
        {festivals.map(festival =>
          <div className="flex-row" key={festival.name}>
            <div>
              <img src={festival.picture} style={{ width: 50, height: 50 }} />
            </div>
            <div>
              <div>
                {festival.name}
              </div>
              <div onClick={() => this.props.push('/home')}>
                Du {festival.start.format('LL')} au {festival.end.format('LL')}
              </div>
            </div>
          </div>,
        )}
      </Layout>
    )
  }
}

export default Festivals
