import React from 'react'
function ConfirmForgotPassword() {
  return (
    <div className='confirm-forgot-password d-none'>
      <div className='confirm-forgot-password__title'>
        <h1>〜〜〜〜〜宛に</h1>
        <h1>認証メールをお送りしました</h1>
      </div>
      <p className='confirm-forgot-password__description'>
        メールに記載されたURLをクリックし、パスワードの再設定を完了させてください。
      </p>
      <div className='confirm-forgot-password__box'>
        <h1>メールが届かない場合</h1>
        <p>
          ・@ドメインからのメールアドレスが受信拒否設定に含まれていないか、メールが迷惑フォルダに振り分けされていないかをご確認ください。
        </p>
        <p>・登録するメールアドレスを間違えた場合は、正しいメールアドレスでこちらからもう一度会員登録してください。</p>
      </div>
    </div>
  )
}

export default ConfirmForgotPassword
