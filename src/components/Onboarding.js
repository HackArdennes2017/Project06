import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Carousel from 're-carousel/dist/carousel'
import Dot from 'components/Dot'
import Button from 'components/Button'

@connect(null, { push })
class Onboarding extends Component {
  state = { isLoading: false }

  handleContinue = () => {
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.props.push('/festivals')
    }, 800)
  }

  render() {
    const { isLoading } = this.state

    return (
      <Carousel style={{ flex: 1 }} widgets={[Dot]}>
        <div
          className="flex-auto items-center justify-center px4 center relative"
          style={{ backgroundColor: 'white' }}
        >
          <img src="/assets/onboarding/logo.png" style={{ width: 200 }} />
          <div className="mb2 mt3" style={{ fontSize: 20, fontWeight: 'bold' }}>
            C&apos;est quoi ?
          </div>
          <div style={{ fontSize: 14, opacity: 0.7 }}>
            Avec les Sardines fini le gaspillage du matériel de camping à chaque
            festival, offrez une nouvelle vie à vos objets en les partageant
            avec d&apos;autres&nbsp;!
          </div>
        </div>
        <div
          className="flex-auto items-center justify-center px4 center"
          style={{ backgroundColor: 'white' }}
        >
          <img src="/assets/onboarding/give.png" style={{ width: 200 }} />
          <div className="mb2 mt3" style={{ fontSize: 20, fontWeight: 'bold' }}>
            Je donne
          </div>
          <div style={{ fontSize: 14, opacity: 0.7 }}>
            Pour donner c&apos;est simple, choisis ton festival, prends une
            photo de ton matériel, ajoute quelques infos et il sera prêt à être
            déposé au point de collecte&nbsp;!
          </div>
        </div>
        <div
          className="flex-auto items-center justify-center px4 center"
          style={{ backgroundColor: 'white' }}
        >
          <img src="/assets/onboarding/take.png" style={{ width: 200 }} />
          <div className="mb2 mt3" style={{ fontSize: 20, fontWeight: 'bold' }}>
            Je récupère
          </div>
          <div style={{ fontSize: 14, opacity: 0.7 }} className="mb3">
            Tu as besoin de matériel de camping pour un festival&nbsp;? Choisis
            ce dont tu as besoin dans la liste proposée par
            l&apos;application&nbsp;!
          </div>
          <Button
            isLoading={isLoading}
            onClick={this.handleContinue}
            style={{ alignSelf: 'stretch' }}
          >
            Continuer !
          </Button>
        </div>
      </Carousel>
    )
  }
}

export default Onboarding
