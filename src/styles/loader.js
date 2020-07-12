import * as React from 'react'

export function Loader (props) {
  return (
    <svg
      style={{
        margin: 'auto',
        backgroundColor: '#fff',
        backgroundPosition: 'initial initial',
        backgroundRepeat: 'initial initial'
      }}
      width={75}
      height={75}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      display='block'
      {...props}
    >
      <circle
        cx={50}
        cy={50}
        fill='none'
        stroke='#e9e9e9'
        strokeWidth={10}
        r={35}
        strokeDasharray='164.93361431346415 56.97787143782138'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        />
      </circle>
    </svg>
  )
}
