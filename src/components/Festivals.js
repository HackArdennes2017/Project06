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
  {
    name: "Fête de l'Humanité",
    start: moment('2017-09-15'),
    end: moment('2017-09-17'),
    picture:
      'https://pbs.twimg.com/profile_images/862325842222993408/2icD15Gb.jpg',
  },
  {
    name: 'La Fiesta des Suds',
    start: moment('2017-10-18'),
    end: moment('2017-10-21'),
    picture:
      'https://statics-infoconcert.digitick.com/media/pub/details/details/fiestadessuds2017_120x150.jpg',
  },
]

@connect(null, { push })
class Festivals extends Component {
  render() {
    return (
      <Layout title="Liste des festivals">
        {festivals.map(festival =>
          <div className="item" key={festival.name}>
            <div
              className="mr2"
              style={{
                width: 50,
                height: 50,
                flexShrink: 0,
                backgroundSize: 'cover',
                backgroundImage: `url(${festival.picture})`,
              }}
            />
            <div className="justify-center">
              <div>
                {festival.name}
              </div>
              <div
                onClick={() => this.props.push('/home')}
                className="mt1"
                style={{ fontSize: 12, opacity: 0.5 }}
              >
                {festival.start.format('L')} au {festival.end.format('L')}
              </div>
            </div>
          </div>,
        )}
      </Layout>
    )
  }
}

export default Festivals
