import React from 'react'

import { getTypeLabel } from 'helpers/types'

export default ({ item, loadingItem, onClick }) =>
  <div
    className="item"
    style={{ opacity: loadingItem && item !== loadingItem ? 0.5 : 1 }}
    onClick={loadingItem ? undefined : () => onClick(item)}
  >
    <div className="flex-row">
      <div
        className="mr2 picture"
        style={{ backgroundImage: `url(/assets/uploads/${item.pictureSmall})` }}
      />
      <div className="justify-center">
        <div>
          {getTypeLabel(item.type)}
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
