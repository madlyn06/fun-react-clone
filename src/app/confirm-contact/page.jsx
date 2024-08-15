'use client'
import Button from '@/components/Button'
import Link from 'next/link'
import React, { useState } from 'react'
function ConfirmRequest({ handleConfirm }) {
  return (
    <>
      <h3>クラウドファンディングに関するご相談</h3>
      <p>
        はじめたい方・はじめたいけれど不安な方。
        <br />
        ささいなことでもお気軽にご相談ください。
      </p>
      <div className="confirm-contact-box">
        <div className="confirm-contact-line">
          <h1>お名前</h1>
          <p>名前が入ります。</p>
        </div>
        <div className="confirm-contact-line">
          <h1>メールアドレス</h1>
          <p>メールアドレスが入ります。</p>
        </div>
        <div className="confirm-contact-line">
          <h1>お問い合わせ件名</h1>
          <p>お問い合わせ件名が入ります。</p>
        </div>
        <div className="confirm-contact-line">
          <h1>お問い合わせ内容</h1>
          <p>
            お問い合わせ内容が入ります。お問い合わせ内容が入ります。お問い合わせ内容が入ります。お問い合わせ内容が入ります。お問い合わせ内容が入ります。お問い合わせ内容が入ります。お問い合わせ内容が入ります。
          </p>
        </div>
        <div className="confirm-contact-line">
          <h1>対象プロジェクトのURL</h1>
          <p>対象プロジェクトのURLが入ります。</p>
        </div>
        <Button
          onClick={handleConfirm}
          classnameButton={{
            marginTop: '50px',
            width: '280px',
            padding: '10px',
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '1.6px',
          }}
        />
      </div>
    </>
  )
}

function CompleteRequest() {
  return (
    <>
      <h3
        style={{
          marginTop: '30px',
        }}
      >
        お問い合わせが完了致しました。
      </h3>
      <div className="request-box">
        <p>
          この度はお問い合わせいただきまして誠にありがとうございます
          <br />
          ご入力頂いたメールアドレス宛へ、ご確認メールをお送りしておりますのでご確認ください。
          <br />{' '}
          内容を確認次第、担当者より折返しご連絡させていただきます。今しばらくお待ちくださいませ。
        </p>
      </div>
      <p className="request-text">
        ※ご送信後、ご確認メールが届かない場合は、フォームご入力のメールアドレスの誤り、もしくはシステム等の不具合が考えられます。その際にはお手数ですがもう一度ご送信下さいますか、お電話にてお問い合わせくださいますようお願い申し上げます。
        また、まれに迷惑メールフォルダへ入っている場合がございますので、合わせてご確認ください。
      </p>
    </>
  )
}
function ConfirmContact() {
  const [complete, setComplete] = useState(false)
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>CONTACT</h1>
        <Link className="link" href="terms-of-service">
          利用規約
        </Link>
      </div>
      {complete ? (
        <CompleteRequest />
      ) : (
        <ConfirmRequest handleConfirm={setComplete} />
      )}
    </div>
  )
}

export default ConfirmContact
