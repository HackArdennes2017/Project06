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
  {
    name: 'Festival Les Inrocks',
    start: moment('2017-11-23'),
    end: moment('2017-11-26'),
    picture:
      'http://special.lesinrocks.com/festival2014/accreditations/img/logo-attente.png',
  },
]

@connect(null, { push })
class Festivals extends Component {
  state = { search: '' }

  render() {
    const { search } = this.state

    return (
      <Layout title="Liste des festivals" animateNavBar animateContent>
        <div
          className="p1 flex-row items-center border-bottom"
          style={{ backgroundColor: '#efeff4' }}
        >
          <input
            type="text"
            placeholder="Rechercher..."
            style={{ color: '#65214b', backgroundColor: '#efeff4' }}
            className="flex-auto border-none p1 rounded"
            onChange={event => this.setState({ search: event.target.value })}
          />
          <i className="material-icons">search</i>
        </div>
        {festivals
          .filter(festival => festival.name.match(new RegExp(search, 'i')))
          .map(festival =>
            <div
              className="item"
              key={festival.name}
              onClick={() => this.props.push('/home')}
            >
              <div className="flex-row">
                <div
                  className="mr2 picture"
                  style={{
                    backgroundImage: `url(${festival.picture})`,
                  }}
                />
                <div className="justify-center">
                  <div>
                    {festival.name}
                  </div>
                  <div style={{ fontSize: 12, opacity: 0.5 }}>
                    {festival.start.format('L')} au {festival.end.format('L')}
                  </div>
                </div>
              </div>
              <i className="material-icons">keyboard_arrow_right</i>
            </div>,
          )}
      </Layout>
    )
  }
}

export default Festivals
