import Button from '@/components/Button'
import React from 'react'

function EditProfile() {
  return (
    <div className='profile-right'>
      <div className='profile-top'>
        <div className='profile-top-title'>
          <svg xmlns='http://www.w3.org/2000/svg' width='6' height='42' viewBox='0 0 6 42' fill='none'>
            <path d='M3 3L3 39' stroke='#00A8F3' strokeWidth='5' strokeLinecap='round' />
          </svg>
          <h1>プロフィール</h1>
        </div>
        <p>PROFILE</p>
      </div>
      <div className=''>
        <form action='' className=''>
          <div className='form-control'>
            <label htmlFor=''>
              ユーザー名
              <span>※</span>
            </label>
            <input type='text' placeholder='ユーザー名を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>性別</label>
            <input type='text' placeholder='性別を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>
              生年月日
              <span>※</span>
            </label>
            <input type='text' placeholder='生年月日を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>プロフィール</label>
            <input type='text' placeholder='プロフィールを入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>Webサイト</label>
            <input type='text' placeholder='Webサイトを入力してください' />
          </div>
          <Button
            title='保存'
            classnameButton={{
              marginTop: '50px',
              padding: '10px',
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '1.6px'
            }}
            showSvg={false}
          />
        </form>
      </div>
    </div>
  )
}

export default EditProfile
