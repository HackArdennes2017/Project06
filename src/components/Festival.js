import React from 'react'
import { Motion, spring } from 'react-motion'

export default ({ festival, loadingFestival, onClick }) => {
  const isLoading = loadingFestival && loadingFestival === festival
  return (
    <div
      className="item"
      style={{
        opacity: loadingFestival && loadingFestival !== festival ? 0.5 : 1,
        overflow: 'hidden',
      }}
      onClick={loadingFestival ? undefined : () => onClick(festival)}
    >
      <div className="flex-row">
        <div
          className="mr2 picture"
          style={{
            backgroundImage: `url(/assets/festivals/${festival.picture})`,
          }}
        />
        <div className="justify-center">
          <div>
            {festival.name}
          </div>
          <div style={{ fontSize: 12, opacity: 0.5 }}>
            {festival.start.format('L')} au {festival.end.format('L')}
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
            alt="spinner"
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
