import React from 'react'

function ArrowDown({ width, color = 'currentColor', strokeWidth = 1.5 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
      className="size-6"
      style={{
        width,
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

export default ArrowDown
