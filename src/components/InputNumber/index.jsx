'use client'
import React from 'react'
const customValue = (value) => {
  if (value < 10) {
    return `0${value}`
  }
  return value
}
function InputNumber({ value, setValue, min, max }) {
  function handleValue(status) {
    if (status === 'plus') {
      if (max) {
        if (value >= max) return
      }
      setValue(value + 1)
    }
    if (status === 'minus') {
      if (value < min || 1) return
      setValue(value - 1)
    }
  }
  return (
    <div className='input-number'>
      <span>{customValue(value)}</span>
      <div className='input-number-box'>
        <svg
          onClick={() => handleValue('plus')}
          xmlns='http://www.w3.org/2000/svg'
          width='10'
          height='5'
          viewBox='0 0 10 5'
          fill='none'
        >
          <path d='M3.46143 0L5.62649 3.75H1.29636L3.46143 0Z' fill='#808080' />
          {/* <path d='M3.46143 5L5.62649 6.25H1.29636L3.46143 5Z' fill='#808080' /> */}
        </svg>
        <svg
          onClick={() => handleValue('minus')}
          className='svg-triangle'
          xmlns='http://www.w3.org/2000/svg'
          width='7'
          height='5'
          viewBox='0 0 7 5'
          fill='none'
        >
          <path d='M3.46143 0L5.62649 3.75H1.29636L3.46143 0Z' fill='#808080' />
          {/* <path d='M3.46143 10L5.62649 6.25H1.29636L3.46143 10Z' fill='#808080' /> */}
        </svg>
      </div>
    </div>
  )
}

export default InputNumber
