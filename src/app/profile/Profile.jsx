import Button from '@/components/Button'
import React from 'react'

function Profile() {
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
          <h1>プロフィール</h1>
        </div>
        <p>PROFILE</p>
      </div>
      <p className="profile-notice">プロフィールの編集が完了しました</p>
      <div className="profile-content-main">
        <div className="profile-content">
          <p className="">
            ユーザー名
            <span>※</span>
          </p>
          <p className="">USER NAME</p>
        </div>
        <div className="profile-content">
          <p className="">性別</p>
          <p className="">性別が入ります</p>
        </div>
        <div className="profile-content">
          <p className="">
            生年月日
            <span>※</span>
          </p>
          <p className="">2000.00.00</p>
        </div>
        <div className="profile-content">
          <p className="">プロフィール</p>
          <p className="">プロフィールが入ります</p>
        </div>
        <div className="profile-content">
          <p className="">Webサイト</p>
          <p className="">Webサイトが入ります</p>
        </div>
        <Button
          title="プロフィールを編集する"
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

export default Profile
