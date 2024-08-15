import React, { useState } from 'react'
import styles from '@/components/header/header.module.css'
import ArrowDown from '../svg/ArrowDown'
import ArrowTop from '../svg/ArrowTop'

function DropDown({
  key,
  value,
  setValue,
  options = [],
  defaultValue,
  dropdownStyleWrapper,
  dropdownStyle,
  color,
}) {
  const [isOpen, setIsOpen] = useState(false)
  function handleClick(option) {
    setValue(option)
    setIsOpen(false)
  }
  return (
    <div id={key}>
      <div className={styles.dropdown} style={dropdownStyleWrapper}>
        <div
          className={styles.dropdown_item}
          style={dropdownStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{value || defaultValue}</span>
          {isOpen ? (
            <ArrowTop color={color} strokeWidth={3} />
          ) : (
            <ArrowDown color={color} strokeWidth={3} />
          )}
        </div>
        {isOpen && (
          <div
            className={`${styles.dropdown_content} animation ${isOpen ? 'visible' : 'hidden '}`}
          >
            {options.map((option) => (
              <p key={option} onClick={() => handleClick(option)}>
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DropDown
