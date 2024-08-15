import React from 'react'
import ProgessBar from './ProgessBar'

function ItemProject() {
  return (
    <div className='home_suggest-item'>
      <div className='home_viewed-item-img'>
        <img src='/images/viewed-project-4.png' alt='' />
      </div>
      <div className='home_viewed-item-info'>
        <div className='home_viewed-item-title'>タイトルが入りますタイトルが入りますタイトルが入ります</div>
        <div className='home_viewed-item-price'>¥6,000,000</div>
        <div className='percent-wrapper'>
          <ProgessBar width='88%' height='6px' />
          <p className='home_viewed-item-percent'>88%</p>
        </div>
        <div className='social-media'>
          <div className='social-media-item'>
            <img src='/images/tym.png' alt='' />
            <p>34</p>
          </div>
          <div className='social-media-item'>
            <img src='/images/user.png' alt='' />
            <p>12人</p>
          </div>
          <div className='social-media-item'>
            <img src='/images/clock.png' alt='' />
            <p>69日</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemProject
