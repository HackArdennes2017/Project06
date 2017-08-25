import React, { Component } from 'react'
import cx from 'classnames'

import 'styles/ItemChooser.scss'

const typeChoices = [
  { value: 'tent', icon: require('assets/icons/tent'), label: 'Tente' },
  {
    value: 'sleeping-bag',
    icon: require('assets/icons/sleeping-bag'),
    label: 'Duvet',
  },
  {
    value: 'mattress',
    icon: require('assets/icons/mattress'),
    label: 'Matelas',
  },
  { value: 'chair', icon: require('assets/icons/chair'), label: 'Chaise' },
]

const qualityChoices = [
  {
    value: 'recycle',
    icon: require('assets/icons/recycle'),
    label: 'A recycler',
  },
  { value: 'bad', icon: require('assets/icons/sadface'), label: 'Déterioré' },
  { value: 'used', icon: require('assets/icons/used'), label: 'Moyen' },
  { value: 'good', icon: require('assets/icons/check'), label: 'Neuf' },
]

class ItemChooser extends Component {
  handleSetType = type => {
    this.props.onChange({
      ...this.props.item,
      type,
    })
  }

  handleSetQuality = quality => {
    this.props.onChange({
      ...this.props.item,
      quality,
    })
  }

  render() {
    const { item } = this.props
    return (
      <div className="ItemChooser">
        <div className="ItemChooserSection">
          <div className="ItemChooserSection--title">
            {'Catégorie'}
          </div>
          <div
            className="flex-row flex-wrap justify-center"
            style={{ margin: -15 }}
          >
            {typeChoices.map(choice =>
              <Choice
                key={choice.value}
                isActive={item.type === choice.value}
                onClick={() => this.handleSetType(choice.value)}
                label={choice.label}
                icon={choice.icon}
              />,
            )}
          </div>
        </div>
        <div className="ItemChooserSection">
          <div className="ItemChooserSection--title">
            {'Etat'}
          </div>
          <div
            className="flex-row flex-wrap justify-center"
            style={{ margin: -15 }}
          >
            {qualityChoices.map(choice =>
              <Choice
                key={choice.value}
                isActive={item.quality === choice.value}
                onClick={() => this.handleSetQuality(choice.value)}
                label={choice.label}
                icon={choice.icon}
              />,
            )}
          </div>
        </div>
      </div>
    )
  }
}

function Choice(props) {
  const { icon, label, isActive } = props
  return (
    <div
      className={cx('ItemChooserChoice items-center justify-center', {
        isActive,
      })}
    >
      <div className="imgContainer items-center">
        {React.createElement(icon)}
      </div>
      <div className="ItemChooserChoice--title">
        {label}
      </div>
    </div>
  )
}

export default ItemChooser
