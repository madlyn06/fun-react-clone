'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function index() {
  const route = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    route.push('/confirm-forgot-password')
  }
  return (
    <>
      <div className='container forgot-password'>
        <h1 className='forgot-password_title'>パスワードをお忘れの場合</h1>
        <div className='forgot-password_description'>
          <p>ご登録のメールアドレス宛に</p>
          <p>パスワード再設定メールをお送りします</p>
        </div>

        <form action='' onSubmit={handleSubmit}>
          <div className='forgot-password_input__wrapper'>
            <div className='forgot-password_input'>
              <label htmlFor=''>メールアドレス</label>
              <input type='text' placeholder='メールアドレス' />
            </div>
          </div>
          <div className='forgot-password_button__wrapper'>
            <button>
              認証メールを送信
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='15' viewBox='0 0 16 15' fill='none'>
                <path
                  d='M6.125 11.25L9.875 7.5L6.125 3.75'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default index
