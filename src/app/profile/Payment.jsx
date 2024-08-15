import Button from '@/components/Button'
import React from 'react'

function Payment() {
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
          <h1>クレジット情報</h1>
        </div>
        <p>PAYMENT</p>
      </div>
      <p className="profile-notice">お支払い情報の編集が完了しました</p>
      <div className="profile-content-main">
        <div className="profile-content">
          <p className="">
            カード番号
            <span>※</span>
          </p>
          <p className="">銀行が入ります</p>
        </div>
        <div className="profile-content">
          <p className="">
            カード名義<span>※</span>
          </p>
          <p className="">支店名が入ります</p>
        </div>
        <div className="profile-content">
          <p className="">
            有効期限
            <span>※</span>
          </p>
          <p className="">口座種別が入ります</p>
        </div>
        <div className="profile-content">
          <p className="">
            セキュリティ番号<span>※</span>
          </p>
          <p className="">口座番号が入ります</p>
        </div>
        <Button
          title="クレジット情報を編集する"
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

export default Payment
