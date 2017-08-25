import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import moment from 'moment'

import Layout from 'components/Layout'
import ListItem from 'components/ListItem'

const passedFestivals = [
  {
    name: 'La Fête de la Mirabelle',
    start: moment('2017-08-18'),
    end: moment('2017-08-20'),
    url: '/coming-soon',
    picture:
      'http://tout-metz.com/wp-content/uploads/2015/08/fetes-mirabelle-metz-2015.jpg',
  },
]
const currentFestivals = [
  {
    name: 'La Cabaret Vert',
    start: moment('2017-08-24'),
    end: moment('2017-08-27'),
    url: '/cabaret-vert',
    picture:
      'http://www.sensationrock.net/wp-content/uploads/2017/02/cabaret-vert.jpg',
  },
]
const comingFestivals = [
  {
    name: "Fête de l'Humanité",
    start: moment('2017-09-15'),
    end: moment('2017-09-17'),
    url: '/coming-soon',
    picture:
      'https://pbs.twimg.com/profile_images/862325842222993408/2icD15Gb.jpg',
  },
  {
    name: 'La Fiesta des Suds',
    start: moment('2017-10-18'),
    end: moment('2017-10-21'),
    url: '/coming-soon',
    picture:
      'https://statics-infoconcert.digitick.com/media/pub/details/details/fiestadessuds2017_120x150.jpg',
  },
  {
    name: 'Festival Les Inrocks',
    start: moment('2017-11-23'),
    end: moment('2017-11-26'),
    url: '/coming-soon',
    picture:
      'http://special.lesinrocks.com/festival2014/accreditations/img/logo-attente.png',
  },
]

const Label = ({ icon, color, children }) =>
  <div
    className="mt2 p1 flex-row items-center"
    style={{
      fontSize: 10,
      color: '#999',
      textTransform: 'uppercase',
      lineHeight: 1,
      position: 'relative',
      fontWeight: 'bold',
    }}
  >
    <i className="material-icons mr1" style={{ fontSize: 15, color }}>
      {icon}
    </i>
    <div>
      {children}
    </div>
  </div>

@connect(null, { push })
class Festivals extends Component {
  state = { search: '', loadingFestival: null }

  handleClickFestival = festival => {
    this.setState({ loadingFestival: festival })
    setTimeout(() => this.props.push(festival.url), 500)
  }

  render() {
    const { search, loadingFestival } = this.state

    return (
      <Layout title="Liste des festivals" withoutBack>
        <div
          className="p1 flex-row items-center border-bottom"
          style={{ backgroundColor: 'white' }}
        >
          <input
            type="text"
            placeholder="Rechercher..."
            style={{ color: '#65214b', backgroundColor: 'white' }}
            className="flex-auto border-none p1 rounded"
            onChange={event => this.setState({ search: event.target.value })}
          />
          <i className="material-icons">search</i>
        </div>
        <Label color="#65214b" icon="hourglass_full">
          Passé
        </Label>
        <div>
          {passedFestivals
            .filter(festival => festival.name.match(new RegExp(search, 'i')))
            .map(festival =>
              <ListItem
                key={festival.name}
                item={festival}
                loadingItem={loadingFestival}
                onClick={this.handleClickFestival}
              />,
            )}
        </div>
        <Label color="#8bc34a" icon="play_circle_filled">
          En cours
        </Label>
        <div>
          {currentFestivals
            .filter(festival => festival.name.match(new RegExp(search, 'i')))
            .map(festival =>
              <ListItem
                key={festival.name}
                item={festival}
                loadingItem={loadingFestival}
                onClick={this.handleClickFestival}
              />,
            )}
        </div>
        <Label color="#fbaf5d" icon="event">
          À venir
        </Label>
        <div>
          {comingFestivals
            .filter(festival => festival.name.match(new RegExp(search, 'i')))
            .map(festival =>
              <ListItem
                key={festival.name}
                item={festival}
                loadingItem={loadingFestival}
                onClick={this.handleClickFestival}
              />,
            )}
        </div>
      </Layout>
    )
  }
}

export default Festivals
