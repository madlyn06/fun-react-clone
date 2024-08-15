import Button from '@/components/Button'
import RefundPlan from '@/components/RefundPlan'
import React from 'react'

function TabThree() {
  return (
    <>
      <div className='refund_success'>
        <h1>応援ありがとうございます！</h1>
        <h2>お支払いが完了しました</h2>
        <h3>テキストが入ります</h3>
        <div style={{ width: '100%' }}>
          <div className='button-custom'>
            <button>
              <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15' fill='none'>
                <path
                  d='M9.375 11.25L5.625 7.5L9.375 3.75'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              TOPへ戻る
            </button>
          </div>
        </div>
      </div>
      <RefundPlan />
    </>
  )
}

export default TabThree
