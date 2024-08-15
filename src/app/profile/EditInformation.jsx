import Button from '@/components/Button'
import React from 'react'

function EditInformation() {
  return (
    <div className='profile-right'>
      <div className='profile-top'>
        <div className='profile-top-title'>
          <svg xmlns='http://www.w3.org/2000/svg' width='6' height='42' viewBox='0 0 6 42' fill='none'>
            <path d='M3 3L3 39' stroke='#00A8F3' strokeWidth='5' strokeLinecap='round' />
          </svg>
          <h1>お届け先情報</h1>
        </div>
        <p>INFORMATION</p>
      </div>
      <div className=''>
        <form action='' className=''>
          <div className='form-control'>
            <label htmlFor=''>
              氏名
              <span>※</span>
            </label>
            <input type='text' placeholder='氏名を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>
              氏名（カナ）<span>※</span>
            </label>
            <input type='text' placeholder='氏名（カナ）を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>
              郵便番号
              <span>※</span>
            </label>
            <input type='text' placeholder='郵便番号を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>
              都道府県
              <span>※</span>
            </label>
            <input type='text' placeholder='都道府県を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>
              住所<span>※</span>
            </label>
            <input type='text' placeholder='住所を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>
              電話番号<span>※</span>
            </label>
            <input type='text' placeholder='電話番号を入力してください' />
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
          />
        </form>
      </div>
    </div>
  )
}

export default EditInformation
