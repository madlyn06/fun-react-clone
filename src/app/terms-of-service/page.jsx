'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
function TermServices() {
  const router = useRouter()
  return (
    <div className="term-services">
      <h1>利用規約</h1>
      <div className="term-services-box">
        <p>
          株式会社ファンファンファンドは、Fan Fun
          Fundが提供するクラウドファンディングサービス（以下「本サービス」といいます。）についての利用規約をここに定めます。
          <br />
          本サービスの利用希望者は、本利用規約の全てに同意いただき、当社が定める方法により会員登録をする必要があります。また、本サービスの利用により、会員は、本利用規約及び会員が利用するサービスごとに定められたガイドラインや注意事項に同意したものとみなされます。
        </p>
        <p>
          第1条（定義）
          <br />
        </p>
      </div>
      <div style={{ width: '100%' }}>
        <div className="button-custom" onClick={() => router.push('/')}>
          <button
            style={{
              width: '280px',
              padding: '10px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M9.375 11.25L5.625 7.5L9.375 3.75"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            TOPへ戻る
          </button>
        </div>
      </div>
    </div>
  )
}

export default TermServices
