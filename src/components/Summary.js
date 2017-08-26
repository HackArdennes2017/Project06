import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import { Motion, spring, presets } from 'react-motion'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { fetchItems } from 'action/items'

import Layout from 'components/Layout'
import Button from 'components/Button'

@connect(
  (state, props) => {
    let item
    try {
      item = state.items.find(item => item._id === props.match.params.id)
    } catch (err) {} // eslint-disable-line
    return {
      item,
    }
  },
  { push, fetchItems },
)
class Summary extends Component {
  state = { inStock: false, isLoading: false }
  handleBack = async () => {
    this.setState({ isLoading: true })
    await this.props.fetchItems()
    this.props.push('/festivals')
  }
  render() {
    const { item } = this.props
    const { inStock, isLoading } = this.state

    if (!item) {
      return ''
    }
    const mode = item.inStock ? 'take' : 'give'
    return (
      <Motion
        style={{
          translate: spring(inStock ? -100 : 0, {
            ...presets.gentle,
            damping: 17,
          }),
        }}
      >
        {m =>
          <Layout
            title="Récap"
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
                  {mode === 'give' &&
                    <QRCode
                      value={`https://team06.hackardennes.com/api/receive-item?id=${item._id}`}
                    />}
                  {mode === 'take' &&
                    <QRCode
                      value={`https://team06.hackardennes.com/api/take-item?id=${item._id}`}
                    />}
                </div>
                {mode === 'give' &&
                  <p className="mt3" style={{ textAlign: 'center' }}>
                    Vous pouvez vous diriger vers le point de collecte Sardines
                    pour déposer votre matériel. Il se situe à la sortie du
                    camping, sur la droite.
                  </p>}
                {mode === 'take' &&
                  <p className="mt3" style={{ textAlign: 'center' }}>
                    Pour récupérer votre matériel, vous trouverez le dépôt de
                    stockage Sardines à l&apos;entrée du camping.
                  </p>}
                {mode === 'give' &&
                  <img
                    width="300"
                    height="auto"
                    alt="map"
                    className="PhotoChosen mt3"
                    src="/assets/map.jpg"
                  />}
                {mode === 'take' &&
                  <img
                    width="300"
                    height="auto"
                    alt="map"
                    className="PhotoChosen mt3"
                    src="/assets/map-huma.jpg"
                  />}
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
                {mode === 'give' &&
                  <img
                    className="PhotoChosen"
                    src="/assets/medal.svg"
                    style={{ width: 150, borderRadius: '50%' }}
                  />}
                {mode === 'take' &&
                  <i
                    className="material-icons mb2"
                    style={{ fontSize: 140, color: '#8bc34a' }}
                  >
                    check_circle
                  </i>}
                {mode === 'give' &&
                  <div className="mt2 mb4" style={{ textAlign: 'center' }}>
                    <p className="mb1">
                      Merci pour votre <strong>engagement</strong> !<br />
                      Vous êtes désormais un campeur social et solidaire.
                    </p>
                    <p className="mb1" style={{ fontSize: 15, opacity: 0.7 }}>
                      Votre don sera réutilisé ou recyclé économisant ainsi{' '}
                      <strong style={{ color: '#8bc34a' }}>
                        2 kg de déchets.
                      </strong>
                    </p>
                    <p className="m0" style={{ fontSize: 15, opacity: 0.7 }}>
                      Vous venez ainsi de gagner{' '}
                      <strong style={{ color: '#fbaf5d' }}>
                        4 sardines
                      </strong>{' '}
                      pour votre prochain festival.
                    </p>
                  </div>}
                {mode === 'take' &&
                  <p className="mt2 mb4" style={{ textAlign: 'center' }}>
                    Matériel récupéré ! Profitez bien de votre festival !
                  </p>}
                <Button
                  isLoading={isLoading}
                  onClick={this.handleBack}
                  style={{ alignSelf: 'stretch' }}
                >
                  {"Revenir à l'accueil"}
                </Button>
              </div>
            </div>
          </Layout>}
      </Motion>
    )
  }
}

export default Summary
