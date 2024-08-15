import React from 'react'

function MessageItem({ classNameStyle }) {
  return (
    <div className='message-support' style={classNameStyle}>
      <div className='message-support-avatar'>
        <img src='/images/message-support-avatar.png' alt='' />
      </div>
      <div className='message-support-right'>
        <div className='message-support-top'>
          <h3 className='message-support-title'>user name</h3>
          <p className='message-support-date'>2024/00/00 00:00</p>
        </div>
        <p className='message-support-text'>微力ながらご支援させていただきました！応援してます！！</p>
      </div>
    </div>
  )
}

export default MessageItem
