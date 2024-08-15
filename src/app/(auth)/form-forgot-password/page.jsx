import React from 'react'

function FormForgotPassword() {
  return (
    <div className='forgot-password_form__wrapper'>
      <h1>パスワード再設定</h1>
      <form action=''>
        <div className='form-group'>
          <label htmlFor=''>認証コード※</label>
          <input type='text' placeholder='認証コードを入力してください' />
        </div>
        <div className='form-group'>
          <label htmlFor=''>新しいパスワード※</label>
          <input type='text' placeholder='新しいパスワードを入力してください' />
        </div>
        <div className='form-group'>
          <label htmlFor=''>新しいパスワード（確認用）※</label>
          <input type='text' placeholder='新しいパスワードを再入力してください' />
        </div>
      </form>
      <div className='forgot-password_button__wrapper'>
        <button>
          再設定する
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
    </div>
  )
}

export default FormForgotPassword
