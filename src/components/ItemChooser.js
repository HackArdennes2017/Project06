import React, { Component } from 'react'
import cx from 'classnames'

import { typeMapping, qualityMapping } from 'helpers/types'

import 'styles/ItemChooser.scss'

class ItemChooser extends Component {
  static defaultProps = {
    onChange: () => {}, // eslint-disable-line
  }

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
            style={{
              width: '100%',
              paddingRight: 10,
              paddingBottom: 0,
              overflowX: 'auto',
            }}
          >
            <div className="flex-row py2" style={{ marginRight: 10 }}>
              {typeMapping.map(choice =>
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
        </div>
        <div className="ItemChooserSection">
          <div className="ItemChooserSection--title">
            {'Etat'}
          </div>
          <div
            style={{
              width: '100%',
              paddingRight: 10,
              paddingBottom: 0,
              overflowX: 'auto',
            }}
          >
            <div className="flex-row py2">
              {qualityMapping.map(choice =>
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
      </div>
    )
  }
}

function Choice(props) {
  const { onClick, icon, label, isActive } = props
  return (
    <div className="ItemChooserChoice--container">
      <div
        onClick={onClick}
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
    </div>
  )
}

export default ItemChooser
