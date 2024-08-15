import Button from '@/components/Button'
import React from 'react'

function AdvertisementForm() {
  return (
    <div>
      <form className='contact-form'>
        <div className='form-control'>
          <label htmlFor=''>
            会社名 <span>※</span>
          </label>
          <input type='text' placeholder='氏名をご入力ください' />
        </div>
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
          <label htmlFor=''>広告予算（月単位）</label>
          <input type='text' placeholder='金額をご入力ください' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>ご出稿の希望期間</label>
          <input type='text' placeholder='期間を選択してください' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>
            プロジェクトのカテゴリー
            <span>※</span>
          </label>
          <input type='text' placeholder='カテゴリーを選択してください' />
        </div>
        <div className='form-control'>
          <label htmlFor=''>
            お問い合わせ内容<span>※</span>
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
          classnameButton={{
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
            padding: '10px 0'
          }}
        />
      </form>
    </div>
  )
}

export default AdvertisementForm
