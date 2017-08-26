import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import { Motion, spring, presets } from 'react-motion'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { fetchItems } from 'action/items'

import Layout from 'components/Layout'
import Button from 'components/Button'

@connect(null, { push, fetchItems })
class Summary extends Component {
  state = { inStock: false, isLoading: false }
  handleBack = async () => {
    this.setState({ isLoading: true })
    await this.props.fetchItems()
    this.props.push('/cabaret-vert')
  }
  render() {
    const { inStock, isLoading } = this.state
    return (
      <Motion
        style={{ translate: spring(inStock ? -100 : 0, { ...presets.gentle }) }}
      >
        {m =>
          <Layout
            title="Enregistré"
            withoutBack
            onClick={() => this.setState({ inStock: true })}
            style={{ overflowX: 'hidden' }}
          >
            <div
              className="flex-auto relative justify-center items-center"
              style={{
                transform: `translate3d(${m.translate}%, 0, 0)`,
              }}
            >
              <div
                className="px3 items-center justify-center"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: 0,
                }}
              >
                <div style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0 4px 12px 2px' }}>
                  <QRCode
                    value={`https://team06.hackardennes.com/api/receive-item?id=${typeof window !==
                      'undefined' &&
                      window.item &&
                      window.item._id}`}
                  />
                </div>
                <p className="mt3" style={{ textAlign: 'center' }}>
                  Vous pouvez vous diriger vers le point de collecte Sardines
                  pour déposer votre matériel. Il se situe à la sortie du
                  camping, sur la droite.
                </p>
              </div>
              <div
                className="px3 justify-center items-center"
                style={{
                  position: 'absolute',
                  left: '100%',
                  width: '100%',
                  bottom: 0,
                  top: 0,
                }}
              >
                <i
                  className="material-icons mb2"
                  style={{ fontSize: 140, color: '#8bc34a' }}
                >
                  check_circle
                </i>
                <p className="mt2 mb4" style={{ textAlign: 'center' }}>
                  Merci pour votre en engagement vous venez de gagner 4 crédits,
                  bravo !
                </p>
                <Button
                  isLoading={isLoading}
                  onClick={this.handleBack}
                  style={{ alignSelf: 'stretch' }}
                >
                  Revenir au Cabaret Vert
                </Button>
              </div>
            </div>
          </Layout>}
      </Motion>
    )
  }
}

export default Summary
