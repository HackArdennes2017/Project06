import React from 'react'
import { Motion, spring } from 'react-motion'

import { getTypeLabel, getQualityLabel } from 'helpers/types'

export default ({ item, loadingItem, onClick }) => {
  const isLoading = loadingItem && item === loadingItem
  return (
    <div
      className="item"
      style={{ opacity: loadingItem && item !== loadingItem ? 0.5 : 1 }}
      onClick={loadingItem ? undefined : () => onClick(item)}
    >
      <div className="flex-row">
        <div
          className="mr2 picture"
          style={{
            backgroundImage: `url(/assets/uploads/${item.pictureSmall})`,
          }}
        />
        <div className="justify-center">
          <div>
            {getTypeLabel(item.type)}
          </div>
          <div style={{ fontSize: 12, opacity: 0.5 }}>
            {getQualityLabel(item.quality)}
          </div>
        </div>
      </div>
      <Motion
        style={{
          offset: spring(isLoading ? 30 : -10),
          opacity: spring(isLoading ? 0.5 : 0),
        }}
      >
        {m =>
          <img
            src="/assets/spinner-black.svg"
            height="30px"
            style={{
              opacity: m.opacity,
              transform: `translate3d(${m.offset}px, 0, 0)`,
              marginLeft: 'auto',
              marginRight: 10,
            }}
          />}
      </Motion>
      <Motion
        style={{
          offset: spring(isLoading ? 40 : 0),
          opacity: spring(isLoading ? 0 : 1),
        }}
      >
        {m =>
          <i
            style={{
              opacity: m.opacity,
              transform: `translate3d(${m.offset}px, 0, 0)`,
            }}
            className="material-icons"
          >
            keyboard_arrow_right
          </i>}
      </Motion>
    </div>
  )
}
