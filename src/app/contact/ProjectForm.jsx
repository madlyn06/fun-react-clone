import Button from '@/components/Button'
import RadioInput from '@/components/RadioInput'
import React from 'react'

function ProjectForm() {
  return (
    <div>
      <form className="contact-form">
        <div className="form-control">
          <label htmlFor="">区分</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioInput name="contact" id="contact-1" width="16px" />
            <span
              style={{
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '1.6px',
              }}
            >
              個人
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioInput name="contact" id="contact-2" width="16px" />
            <span
              style={{
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '1.6px',
              }}
            >
              個人
            </span>
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="">
            会社名 <span>※</span>
          </label>
          <input type="text" placeholder="会社名をご入力ください" />
        </div>
        <div className="form-control">
          <label htmlFor="">
            氏名 <span>※</span>
          </label>
          <input type="text" placeholder="氏名をご入力ください" />
        </div>
        <div className="form-control">
          <label htmlFor="">
            電話番号 <span>※</span>
          </label>
          <input type="text" placeholder="電話番号をご入力ください" />
        </div>
        <div className="form-control">
          <label htmlFor="">
            メールアドレス <span>※</span>
          </label>
          <input type="text" placeholder="メールアドレスをご入力ください" />
        </div>
        <div className="form-control">
          <label htmlFor="">プロジェクト開始予定日</label>
          <input type="text" placeholder="日付をを選択してください" />
        </div>
        <div className="form-control">
          <label htmlFor="">プロジェクトのカテゴリー</label>
          <input
            type="text"
            placeholder="プロジェクトのカテゴリーを選択してください"
          />
        </div>
        <div className="form-control">
          <label htmlFor="">お問い合わせ内容</label>
          <textarea placeholder="お問い合せ内容をご入力ください" />
        </div>
        <Button
          text="確認画面へ"
          classnameButtonWrapper={{
            marginTop: '50px',
          }}
        />
      </form>
    </div>
  )
}

export default ProjectForm
