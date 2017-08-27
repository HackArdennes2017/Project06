import React, { Component } from 'react'
import QRCode from 'qrcode.react'
import { Motion, spring, presets } from 'react-motion'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { deleteItem, receiveItem } from 'action/items'

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
  { push, deleteItem, receiveItem },
)
class Summary extends Component {
  state = { isSwiped: false, isLoading: false, isConfirming: false }

  handleBack = () => {
    this.setState({ isLoading: true })
    setTimeout(() => this.props.push('/festivals'), 500)
  }

  handleScan = async () => {
    const { item, deleteItem, receiveItem } = this.props
    const mode = item.inStock ? 'take' : 'give'
    this.setState({ isConfirming: true })
    if (mode === 'take') {
      await deleteItem(item)
    } else if (mode === 'give') {
      await receiveItem(item)
    }
    setTimeout(
      () =>
        this.setState({
          isSwiped: true,
        }),
      700,
    )
  }

  render() {
    const { item } = this.props
    const { isSwiped, isLoading, isConfirming } = this.state

    if (!item) {
      return ''
    }
    const mode = item.booked ? 'take' : 'give'
    return (
      <Motion
        style={{
          translate: spring(isSwiped ? -100 : 0, {
            ...presets.gentle,
            damping: 17,
          }),
        }}
      >
        {m =>
          <Layout
            title="Récap"
            withoutBack
            style={{ overflowX: 'hidden', marginBottom: 60 }}
          >
            <div
              className="flex-auto relative items-center"
              style={{
                transform: `translate3d(${m.translate}%, 0, 0)`,
              }}
            >
              <div
                className="p3 items-center"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                }}
              >
                <div
                  style={{
                    boxShadow: 'rgba(0, 0, 0, 0.2) 0 4px 12px 2px',
                    position: 'relative',
                  }}
                  onClick={this.handleScan}
                >
                  {mode === 'give' &&
                    <QRCode
                      value={`https://team06.hackardennes.com/api/receive-item?id=${item._id}`}
                    />}
                  {mode === 'take' &&
                    <QRCode
                      value={`https://team06.hackardennes.com/api/take-item?id=${item._id}`}
                    />}
                  <Motion
                    style={{
                      opacity: spring(isConfirming ? 1 : 0),
                      offset: spring(isConfirming ? 0 : 20),
                    }}
                  >
                    {m =>
                      <div
                        className="items-center justify-center"
                        style={{
                          opacity: m.opacity,
                          background: 'rgba(255, 255, 255, 0.8)',
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0,
                        }}
                      >
                        <img
                          alt="spinner"
                          src="/assets/spinner-black.svg"
                          height="30px"
                          style={{
                            transform: `translate3d(0, ${m.offset}px, 0)`,
                          }}
                        />
                      </div>}
                  </Motion>
                </div>
                <div
                  style={{
                    opacity: 0.6,
                    fontSize: 13,
                  }}
                  className="center mt1"
                >
                  Clique sur le QRcode 😉
                </div>
                {mode === 'give' &&
                  <p
                    className="mt3"
                    style={{ textAlign: 'center', fontSize: 14 }}
                  >
                    Vous pouvez vous diriger vers le point de collecte Sardines
                    pour déposer votre matériel. Il se situe à la sortie du
                    camping, sur la droite.
                  </p>}
                {mode === 'take' &&
                  <p
                    className="mt3"
                    style={{ textAlign: 'center', fontSize: 14 }}
                  >
                    Pour récupérer votre matériel, vous trouverez le dépôt de
                    stockage Sardines à l&apos;entrée du camping.
                  </p>}
                <img
                  alt="map"
                  className="PhotoChosen mt2"
                  src="/assets/map.jpg"
                  style={{ width: '100%' }}
                />
              </div>
              <div
                className="p3 items-center"
                style={{
                  position: 'absolute',
                  left: '100%',
                  width: '100%',
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
                  <div className="mt2 mb3" style={{ textAlign: 'center' }}>
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
                  <p className="mt2 mb3" style={{ textAlign: 'center' }}>
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
