import React from 'react'
import Image from 'next/image'
import ProgessBar from '../ProgessBar'
import Circle from '../Circle'
function HomeBanner({ children }) {
  return (
    <div className='home_banner'>
      <div className='home_banner-left'>
        <Image src={'/images/banner_home.png'} alt='' width={962} height={574} />
      </div>
      <div className='home_banner-right'>
        <p className='home_banner-title'>プロジェクトの見出しが入ります！</p>
        <p>現在の支援総額</p>
        <h1>
          2,980,000<span>円</span>
        </h1>
        <ProgessBar />
        <p className='home_banner-price'>目標金額は3,000,000円</p>
        <div className='home_banner-circle'>
          <Circle title='支援者数' number='27' text='人' />
          <Circle title='残り日数' number='30' text='日' />
        </div>
        {children}
      </div>
    </div>
  )
}

export default HomeBanner
