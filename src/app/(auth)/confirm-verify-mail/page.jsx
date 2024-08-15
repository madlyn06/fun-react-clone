import React from 'react'
function index() {
  return (
    <div className='verify-email'>
      <div className='verify-email__title'>
        <h1>〜〜〜〜〜宛に</h1>
        <h1>認証メールをお送りしました</h1>
      </div>
      <p className='verify-email__description'>メールに記載されたURLをクリックし、会員登録を完了させてください。</p>
      <div className='verify-email__box'>
        <h1>メールが届かない場合</h1>
        <p>
          ・@ドメインからのメールアドレスが受信拒否設定に含まれていないか、メールが迷惑フォルダに振り分けされていないかをご確認ください。
        </p>
        <p>・登録するメールアドレスを間違えた場合は、正しいメールアドレスでこちらからもう一度会員登録してください。</p>
      </div>
    </div>
  )
}

export default index
