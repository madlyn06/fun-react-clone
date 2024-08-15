import React from 'react'
function ProgessBar({ width = '80%', height = '17px' }) {
  return (
    <div style={{ height: height }} className='progress-container'>
      <div className='my-progress' style={{ width: width }}></div>
    </div>
  )
}

export default ProgessBar
