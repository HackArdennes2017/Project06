import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import moment from 'moment'
import groupBy from 'lodash.groupby'
import Fuse from 'fuse.js'

import { fetchItems } from 'action/items'

import Layout from 'components/Layout'
import Festival from 'components/Festival'
import {
  getFestivalWhenColor,
  getFestivalWhenIcon,
  getFestivalWhenLabel,
} from 'helpers/types'

const festivals = [
  {
    name: 'La Cabaret Vert',
    start: moment('2017-08-24'),
    end: moment('2017-08-27'),
    url: '/cabaret-vert',
    picture: 'cabaret-vert.jpg',
    when: 'current',
  },
  {
    name: "Fête de l'Humanité",
    start: moment('2017-09-15'),
    end: moment('2017-09-17'),
    url: '/coming-soon',
    picture: 'huma.jpg',
    when: 'coming',
  },
  {
    name: 'La Fiesta des Suds',
    start: moment('2017-10-18'),
    end: moment('2017-10-21'),
    url: '/coming-soon',
    picture: 'fiesta.jpg',
    when: 'coming',
  },
  {
    name: 'Festival Les Inrocks',
    start: moment('2017-11-23'),
    end: moment('2017-11-26'),
    url: '/coming-soon',
    picture: 'inrocks.jpg',
    when: 'coming',
  },
]

const fuse = new Fuse(festivals, { keys: ['name'] })

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

@connect(null, { push, fetchItems })
class Festivals extends Component {
  state = { search: '', loadingFestival: null }

  handleClickFestival = async festival => {
    this.setState({ loadingFestival: festival })
    await this.props.fetchItems()
    setTimeout(() => this.props.push(festival.url), 500)
  }

  render() {
    const { search, loadingFestival } = this.state
    const searchFestivals = search ? fuse.search(search) : festivals
    const groupedFest = groupBy(searchFestivals, 'when')

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
        <div>
          {Object.keys(groupedFest).map(when =>
            <div key={when}>
              <Label
                color={getFestivalWhenColor(when)}
                icon={getFestivalWhenIcon(when)}
              >
                {getFestivalWhenLabel(when)}
              </Label>
              <div>
                {groupedFest[when].map(festival =>
                  <Festival
                    key={festival.name}
                    festival={festival}
                    loadingFestival={loadingFestival}
                    onClick={this.handleClickFestival}
                  />,
                )}
              </div>
            </div>,
          )}
        </div>
      </Layout>
    )
  }
}

export default Festivals
