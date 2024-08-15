import React from 'react'
function Circle({ title, number, text }) {
  return (
    <div className='circle'>
      <p className='circle_title'>{title}</p>
      <div className='circle_box'>
        <p className='circle_number'>{number}</p>
        <p className='circle_text'>{text}</p>
      </div>
    </div>
  )
}

export default Circle
