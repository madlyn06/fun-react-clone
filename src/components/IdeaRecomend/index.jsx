'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
function IdeaRecomentItem() {
  return (
    <Link href="/idea-detail">
      <Image
        src="/images/idea-matching-bulletin-board/image-idea-01.png"
        width={245}
        height={140}
        alt=""
      />
      <h4>マッチングアプリを作りたい！</h4>
    </Link>
  )
}
function IdeaRecomend({ setModal }) {
  return (
    <div className="idea__matching-recommend">
      <div onClick={() => setModal(true)}>
        <button className="idea__matching-recommend-button">
          アイデアを投稿する
        </button>
      </div>
      <h3>おすすめ投稿</h3>
      <div className="idea__matching-recommend-post">
        <IdeaRecomentItem />
        <IdeaRecomentItem />
        <IdeaRecomentItem />
        <IdeaRecomentItem />
      </div>
    </div>
  )
}

export default IdeaRecomend
