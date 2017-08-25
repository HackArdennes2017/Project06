import React from 'react'

export default ({ item, loadingItem, onClick }) =>
  <div
    className="item"
    key={item.name}
    style={{
      opacity: loadingItem && item !== loadingItem ? 0.8 : 1,
    }}
    onClick={loadingItem ? undefined : () => onClick(item)}
  >
    <div className="flex-row">
      <div
        className="mr2 picture"
        style={{
          backgroundImage: `url(${item.picture})`,
        }}
      />
      <div className="justify-center">
        <div>
          {item.name}
        </div>
        <div style={{ fontSize: 12, opacity: 0.5 }}>
          {item.start.format('L')} au {item.end.format('L')}
        </div>
      </div>
    </div>
    <img
      src="/assets/spinner-black.svg"
      height="30px"
      style={{
        opacity: loadingItem === item ? 0.5 : 0,
        transition: '150ms linear opacity',
        marginLeft: 'auto',
        marginRight: 10,
      }}
    />
    <i className="material-icons">keyboard_arrow_right</i>
  </div>
