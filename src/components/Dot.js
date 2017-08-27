import React from 'react'

function Dot(props) {
  return (
    <span
      style={{
        display: 'inline-block',
        height: '8px',
        width: '8px',
        borderRadius: '4px',
        backgroundColor: '#65214b',
        margin: '7px 5px',
        opacity: props.selected ? '1' : '0.3',
        transitionDuration: '300ms',
      }}
    />
  )
}

export default function IndicatorDots(props) {
  const wrapperStyle = {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
    bottom: '15px',
    flexDirection: 'row',
    justifyContent: 'center',
  }

  return (
    <div style={wrapperStyle}>
      {Array.apply(null, Array(props.total)).map((x, i) => {
        return <Dot key={i} selected={props.index === i} />
      })}
    </div>
  )
}
