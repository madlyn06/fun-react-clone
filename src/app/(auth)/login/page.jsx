import Link from 'next/link'
import React from 'react'
function Login() {
  return (
    <div className='container login'>
      <div>
        <h1 className='login_title'>ログイン</h1>
        <form action=''>
          <div className='login_input__wrapper'>
            <div className='login_input'>
              <label htmlFor=''>メールアドレス</label>
              <input type='text' placeholder='メールアドレス' />
            </div>
            <div className='login_input'>
              <div className='login_input__password'>
                <label htmlFor=''>パスワード</label>
                <Link href='/forgot-password' className='login_input__password-link'>
                  パスワードを忘れた方はコチラ
                </Link>
              </div>
              <input type='text' placeholder='パスワード' />
              <span className='login_input__warning'>
                パスワードは、半角英数字を組み合わせた8文字以上で入力してください。
              </span>
            </div>
          </div>
          <div className='login_button__wrapper'>
            <button>
              ログイン
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
        <Link href='/register' draggable={false} className='login_text__register'>
          新規登録はこちら
        </Link>
      </div>
    </div>
  )
}

export default Login
