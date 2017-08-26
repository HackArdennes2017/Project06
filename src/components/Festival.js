import React from 'react'
import { Motion, spring } from 'react-motion'

export default ({ festival, loadingFestival, onClick }) =>
  <div
    className="item"
    style={{
      opacity: loadingFestival && festival !== loadingFestival ? 0.5 : 1,
    }}
    onClick={loadingFestival ? undefined : () => onClick(festival)}
  >
    <div className="flex-row">
      <div
        className="mr2 picture"
        style={{ backgroundImage: `url(${festival.picture})` }}
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
        offset: spring(loadingFestival === festival ? 0 : 20),
        opacity: spring(loadingFestival === festival ? 0.5 : 0),
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

    <i className="material-icons">keyboard_arrow_right</i>
  </div>
