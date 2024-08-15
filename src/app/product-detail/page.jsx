'use client'
import HomeBanner from '@/components/HomeBanner'
import React, { useState } from 'react'
import InstagramSvg from '@/components/svg/InstagramSvg'
import TwitterSvg from '@/components/svg/TwitterSvg'
import ViewedProject from '@/components/ViewedProject/ViewedProject'
import ProjectDetail from './ProjectDetail'
import OurActivity from './OurActivity'
import Button from '@/components/Button'
import MessageSupport from './MessageSupport'
function ProductDetail() {
  const [tab, setTab] = useState('1')
  return (
    <div className="product-detail">
      <HomeBanner>
        <div className="social-media">
          <div className="social-media-item">
            <img src="/images/tym.png" alt="" />
            <p>34</p>
          </div>
          <div className="social-media-item">
            <img src="/images/user.png" alt="" />
            <p>12人</p>
          </div>
          <div className="social-media-item">
            <img src="/images/clock.png" alt="" />
            <p>69日</p>
          </div>
        </div>
      </HomeBanner>

      <div className="product-detail-box">
        <div className="product-introduce">
          <div className="product-introduce-top">
            <div className="product-avatar">
              <img src="/images/avarta.png" alt="" />
            </div>
            <div className="product-info">
              <p className="product-info-name">株式会社〜〜 苗字名前</p>
              <p className="product-info-url">https://~~~~~~~~~~~~~~~~~~</p>
              <div className="product-social-media">
                <TwitterSvg />
                <InstagramSvg />
              </div>
            </div>
          </div>
          <div className="product-introduce-bottom">
            <p>
              簡易的なプロフィールが入ります。簡易的なプロフィールが入ります。簡易的なプロフィールが入ります。簡易的なプロフィールが入ります。簡易的なプロフィールが入ります。
              <br />
              <br />
              プロジェクトのサマリーが入ります。プロジェクトのサマリーが入ります。プロジェクトのサマリーが入ります。プロジェクトのサマリーが入ります。プロジェクトのサマリーが入ります。プロジェクトのサマリーが入ります。
            </p>
          </div>
        </div>
        <div className="product-project-detail">
          <div className="product-project-one">
            <div className="product-project-tab">
              <div
                className={`tab-one ${tab === '1' ? 'active' : ''}`}
                onClick={() => setTab('1')}
              >
                プロジェクト詳細
              </div>
              <div
                className={`tab-two ${tab === '2' ? 'active' : ''}`}
                onClick={() => setTab('2')}
              >
                私たちの活動
              </div>
              <div
                className={`tab-three ${tab === '3' ? 'active' : ''}`}
                onClick={() => setTab('3')}
              >
                応援メッセージ
              </div>
            </div>
            <div className="product-project-box">
              {tab === '1' && <ProjectDetail />}
              {tab === '2' && <OurActivity />}
              {tab === '3' && <MessageSupport />}
            </div>
          </div>
          <div className="product-project-two">
            <h3>リターンを選ぶ</h3>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="product-project-box">
                  <div className="product-project-img">
                    <img src="/images/sidebar-detail.png" alt="" />
                  </div>
                  <div className="product-project-price-support">
                    <p>支援額</p>
                    <p>¥5,000</p>
                  </div>
                  <div className="product-project-list">
                    <p>◾︎プロジェクト進行の結果のご報告。</p>
                    <p>◾︎お礼のメールを送らせていただきます。</p>
                  </div>
                  <div className="product-social-media">
                    <div className="social-media-item">
                      <img src="/images/user.png" alt="" />
                      <p>12人</p>
                    </div>
                  </div>
                  <Button />
                </div>
              ))}
          </div>
        </div>
        <div style={{ marginTop: '112px' }}>
          <ViewedProject />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ProductDetail
