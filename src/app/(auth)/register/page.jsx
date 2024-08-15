'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ChevronSVG from '@/components/svg/ChevronSVG'
function Register() {
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/confirm-verify-mail')
  }
  return (
    <>
      <div className='container register'>
        <h1 className='register_title'>新規会員登録</h1>
        <p className='register_description'>
          FanFunFundで使用するアカウントを新規登録します。 メールアドレス入力後、送信ボタンを押してください
        </p>
        <form action='' onSubmit={handleSubmit}>
          <div className='register_input__wrapper'>
            <div className='register_input'>
              <label htmlFor=''>メールアドレス</label>
              <input type='text' placeholder='メールアドレス' />
            </div>
          </div>
          <div className='register_button__wrapper'>
            <button>
              認証メールを送信
              <ChevronSVG />
            </button>
          </div>
        </form>
        <Link href='/login' draggable='false' className='login_text__register'>
          ログインはこちら
        </Link>
      </div>
    </>
  )
}

export default Register
