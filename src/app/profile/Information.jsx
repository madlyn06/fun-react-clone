import Button from '@/components/Button'
import React from 'react'

function Information() {
  return (
    <div className="profile-right">
      <div className="profile-top">
        <div className="profile-top-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="42"
            viewBox="0 0 6 42"
            fill="none"
          >
            <path
              d="M3 3L3 39"
              stroke="#00A8F3"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
          <h1>お届け先情報</h1>
        </div>
        <p>INFORMATION</p>
      </div>
      <p className="profile-notice">お届け先情報の編集が完了しました</p>
      <div className="profile-content-main">
        <div className="profile-content">
          <p className="">
            氏名
            <span>※</span>
          </p>
          <p className="">氏名が入ります</p>
        </div>
        <div className="profile-content">
          <p className="">
            氏名（カナ）<span>※</span>
          </p>
          <p className="">郵便番号が入ります</p>
        </div>
        <div className="profile-content">
          <p className="">
            都道府県
            <span>※</span>
          </p>
          <p className="">都道府県が入ります</p>
        </div>
        <div className="profile-content">
          <p className="">
            住所<span>※</span>
          </p>
          <p className="">住所が入ります</p>
        </div>
        <div className="profile-content">
          <p className="">
            電話番号<span>※</span>
          </p>
          <p className="">電話番号が入ります</p>
        </div>
        <Button
          title="お届け先情報を編集する"
          classnameButton={{
            marginTop: '50px',
            padding: '10px',
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '1.6px',
          }}
        />
      </div>
    </div>
  )
}

export default Information
