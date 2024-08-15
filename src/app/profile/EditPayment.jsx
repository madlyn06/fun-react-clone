'use client'
import Button from '@/components/Button'
import InputNumber from '@/components/InputNumber'
import React, { useState } from 'react'

function EditPayment() {
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(2024)
  return (
    <div className='profile-right'>
      <div className='profile-top'>
        <div className='profile-top-title'>
          <svg xmlns='http://www.w3.org/2000/svg' width='6' height='42' viewBox='0 0 6 42' fill='none'>
            <path d='M3 3L3 39' stroke='#00A8F3' strokeWidth='5' strokeLinecap='round' />
          </svg>
          <h1>クレジット情報</h1>
        </div>
        <p>PAYMENT</p>
      </div>
      <div className=''>
        <form action='' className=''>
          <div className='form-control'>
            <label htmlFor=''>
              カード番号
              <span>※</span>
            </label>
            <input type='text' placeholder='カード番号を入力してください' />
          </div>
          <div className='form-control'>
            <label htmlFor=''>
              カード名義
              <span>※</span>
            </label>
            <input type='text' placeholder='カード名義を入力してください' />
            <p>カードに刻印されている表記の通りにご記載ください</p>
          </div>
          <div className='form-flex' style={{ marginTop: '30px' }}>
            <div className='form-control' style={{ marginTop: '0' }}>
              <label htmlFor=''>
                有効期限
                <span>※</span>
              </label>
            </div>
            <div className='form-flex' style={{ gap: '10px' }}>
              <InputNumber value={month} setValue={setMonth} min={1} max={12} />
              <InputNumber value={year} setValue={setYear} min={1900} max={2099} />
            </div>
          </div>
          <div className='form-control'>
            <label htmlFor=''>
              セキュリティ番号<span>※</span>
            </label>
            <input type='text' placeholder='セキュリティコードを入力してください' />
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

export default EditPayment
