'use client'
import DropDown from '@/components/Dropdown'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
function FormRegister() {
  const router = useRouter()
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/login')
  }
  return (
    <div className="register_form__wrapper">
      <h1>新規会員登録</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">メールアドレス※</label>
          <input type="text" placeholder="メールアドレスを入力してください" />
        </div>
        <div className="form-group">
          <label htmlFor="">パスワード※</label>
          <input type="text" placeholder="パスワードを入力してください" />
        </div>
        <div className="form-group">
          <label htmlFor="">ユーザー名※</label>
          <input type="text" placeholder="ユーザー名を入力してください" />
        </div>
        <div className="form-group">
          <label htmlFor="">生年月日※</label>
          <input type="text" placeholder="2024/00/00" />
        </div>
        <div
          className="form-group"
          style={{
            position: 'relative',
          }}
        >
          <label htmlFor="">性別</label>
          {/* <input type="text" placeholder="性別を入力してください" /> */}
          <div className="drop-down-input">
            <DropDown
              value={value}
              setValue={setValue}
              color={'#00A8F3'}
              dropdownStyleWrapper={{
                width: '100%',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                marginTop: '10px',
              }}
              dropdownStyle={{
                padding: '15px 10px',
                borderRadius: '10px',
                outline: 'none',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: 'normal',
                letterSpacing: '1.6px',
                color: 'rgba(0, 0, 0, 0.5)',
              }}
              options={['女性', '男性', '選択しない']}
              defaultValue="性別を入力してください"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">電話番号※</label>
          <input type="text" placeholder="電話番号を入力してください" />
        </div>
        <div className="form-group">
          <label htmlFor="">紹介コード</label>
          <input type="text" placeholder="紹介コードを入力してください" />
        </div>
        <div>
          <p className="register_desc">
            パートナー（業務提携）特別会員コードをお持ちの方は入力してください
          </p>
        </div>
        <div className="register_button__wrapper">
          <button>
            認証メールを送信
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M6.125 11.25L9.875 7.5L6.125 3.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormRegister
