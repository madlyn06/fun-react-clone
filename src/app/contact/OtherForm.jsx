import Button from '@/components/Button'
import React from 'react'

function OtherForm() {
  return (
    <div>
      <form className='contact-form'>
        <div className='form-control'>
          <label htmlFor=''>
            氏名 <span>※</span>
          </label>
          <input type='text' placeholder='氏名をご入力ください' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>
            メールアドレス <span>※</span>
          </label>
          <input type='text' placeholder='メールアドレスをご入力ください' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>
            お問い合わせ件名 <span>※</span>
          </label>
          <input type='text' placeholder='お問い合せ件名をご入力ください' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>
            お問い合わせ内容 <span>※</span>
          </label>
          <textarea placeholder='お問い合せ内容をご入力ください' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>対象プロジェクトのURL</label>
          <input type='text' placeholder='URLをご記載ください' />
        </div>
        <Button
          text='確認画面へ'
          classnameButtonWrapper={{
            marginTop: '50px'
          }}
        />
      </form>
    </div>
  )
}

export default OtherForm
