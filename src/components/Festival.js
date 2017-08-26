import React from 'react'

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
    <img
      src="/assets/spinner-black.svg"
      height="30px"
      style={{
        opacity: loadingFestival === festival ? 0.5 : 0,
        transition: '150ms linear opacity',
        marginLeft: 'auto',
        marginRight: 10,
      }}
    />
    <i className="material-icons">keyboard_arrow_right</i>
  </div>
