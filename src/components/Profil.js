import React, { Component } from 'react'

import Layout from 'components/Layout'

class Profil extends Component {
  render() {
    return (
      <Layout title="Mon Profil" backRoute="/festivals">
        <div className="flex-auto items-center">
          <div className="flex-row m2" style={{ width: "100%", justifyContent: "space-around" }}>
            <div>
              2 Badges
            </div>
            <div>
              $6 Sardines
            </div>
          </div>
          <div className="p1 flex-row items-center item" style={{ backgroundColor: 'white', width: '100%' }}>
            <i className="material-icons">account_circle</i>
            <input
              type="text"
              value="Hugo"
              style={{ color: '#333', backgroundColor: 'white' }}
              className="ml1 flex-auto border-none p1 rounded"
            />
          </div>
          <div className="p1 flex-row items-center item" style={{ backgroundColor: 'white', width: '100%' }}>
            <i className="material-icons">phone</i>
            <input
              type="text"
              value="06 77 98 50 12"
              style={{ color: '#333', backgroundColor: 'white' }}
              className="ml1 flex-auto border-none p1 rounded"
            />
          </div>
          <div className="m2"  style={{ textAlign: 'center' }}>
            Mes objets en ligne
          </div>
        </div>
      </Layout>
    )
  }
}

export default Profil
