import React from 'react'

function NotificationItem() {
  return (
    <div className='notification-item'>
      <div className='notification-item-left'>
        <p className='notification-item-date'>2024.00.00</p>
        <div className='notification-item-category'>カテゴリ</div>
        <p className='notification-item-title'>タイトルが入ります。</p>
      </div>
      <div className='notification-button-right'>
        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50' fill='none'>
          <circle cx='25' cy='25' r='25' fill='#FF64AA' />
          <path d='M21 18L29 24.48L21 32.4' stroke='white' />
        </svg>
      </div>
    </div>
  )
}

function Notification() {
  return (
    <div className='notification'>
      <h1>NEWS</h1>
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
      <NotificationItem />
    </div>
  )
}

export default Notification
