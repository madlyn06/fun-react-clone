import React from 'react'
import ProgessBar from '../ProgessBar'
function ViewedProject() {
  return (
    <div className='home_viewed-project'>
      <div className='home_viewed-top'>
        <p className='home_viewed-title'>
          <svg xmlns='http://www.w3.org/2000/svg' width='6' height='42' viewBox='0 0 6 42' fill='none'>
            <path d='M3 3L3 39' stroke='#00A8F3' strokeWidth='5' strokeLinecap='round' />
          </svg>
          閲覧したプロジェクト
        </p>
        <div className='home_viewed-button'>
          <button>もっとみる</button>
        </div>
      </div>
      <div className='home_viewed-lists'>
        <div className='home_viewed-item'>
          <div className='home_viewed-item-img'>
            <img src='/images/viewed-project-1.png' alt='' />
          </div>
          <div className='home_viewed-item-info'>
            <ProgessBar width='88%' height='6px' />
            <p className='home_viewed-item-percent'>88%</p>
          </div>
        </div>
        <div className='home_viewed-item'>
          <div className='home_viewed-item-img'>
            <img src='/images/viewed-project-2.png' alt='' />
          </div>
          <div className='home_viewed-item-info'>
            <ProgessBar width='88%' height='6px' />
            <p className='home_viewed-item-percent'>88%</p>
          </div>
        </div>
        <div className='home_viewed-item'>
          <div className='home_viewed-item-img'>
            <img src='/images/viewed-project-3.png' alt='' />
          </div>
          <div className='home_viewed-item-info'>
            <ProgessBar width='88%' height='6px' />
            <p className='home_viewed-item-percent'>88%</p>
          </div>
        </div>
        <div className='home_viewed-item'>
          <div className='home_viewed-item-img'>
            <img src='/images/viewed-project-4.png' alt='' />
          </div>
          <div className='home_viewed-item-info'>
            <ProgessBar width='88%' height='6px' />
            <p className='home_viewed-item-percent'>88%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewedProject
