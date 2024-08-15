'use client'
import React, { useState } from 'react'
import TabOne from './TabOne'
import TabTwo from './TabTwo'
import TabThree from './TabThree'
function Refund() {
  const [tab, setTab] = useState('1')
  return (
    <div className="refund">
      <div className="refund_navigator">
        <div className="refund_navigator-one">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="379"
            height="72"
            viewBox="0 0 379 72"
            fill="none"
          >
            <path
              d="M340.946 0H0V70H340.946L378.943 36.3359L340.946 0Z"
              fill={`${tab === '1' ? '#00A8F3' : '#F6F8FA'}`}
              stroke="#979797"
            />
          </svg>
          <p>入力→</p>
        </div>
        <div className="refund_navigator-two">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="452"
            height="72"
            viewBox="0 0 452 72"
            fill="none"
          >
            <path
              d="M405.775 1H1.01562V71H405.775L450.884 37.3359L405.775 1Z"
              fill={`${tab === '2' ? '#00A8F3' : '#F6F8FA'}`}
              stroke="#979797"
            />
          </svg>
          <p>確認→</p>
        </div>
        <div className="refund_navigator-three">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="442"
            height="72"
            viewBox="0 0 442 72"
            fill="none"
          >
            <path
              d="M396.907 1H1.26367V71H396.907L441 37.3359L396.907 1Z"
              fill={`${tab === '3' ? '#00A8F3' : '#F6F8FA'}`}
              stroke="#626262"
            />
          </svg>
          <p>完了→</p>
        </div>
      </div>
      {tab === '1' && <TabOne setTab={setTab} />}
      {tab === '2' && <TabTwo setTab={setTab} />}
      {tab === '3' && <TabThree setTab={setTab} />}
    </div>
  )
}

export default Refund
