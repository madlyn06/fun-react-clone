import React from 'react'

function RadioInput({ name, id, width }) {
  return (
    <>
      <input type="radio" id={id} className="radio-input" name={name} />
      <label
        htmlFor={id}
        className="radio-label"
        style={{ width: width, height: width, borderRadius: width }}
      />
    </>
  )
}

export default RadioInput
