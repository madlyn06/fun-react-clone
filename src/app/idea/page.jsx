import React from 'react'
import IdeaRecomend from '@/components/IdeaRecomend'
import Paginate from '@/components/Paginate'
import Link from 'next/link'
import Image from 'next/image'
import SpeechBubble from '@/components/svg/SpeechBubble'
function IdeaMatchingItem() {
  return (
    <div className="idea__matching-content-item">
      <div className="idea__matching-content-left">
        <Image
          src="/images/idea-matching-bulletin-board/image-idea-01.png"
          width={245}
          height={140}
          alt=""
        />
        <h5>アイデアのみ</h5>
      </div>
      <div className="idea__matching-content-right">
        <div className="idea__matching-content-right-item">
          <div className="idea__matching-content-right-info">
            <Image
              src="/images/idea-matching-bulletin-board/image-idea-02.png"
              width={35}
              height={37.506}
              alt=""
            />
            <h5>@ユーザー</h5>
            <h4>2h</h4>
          </div>
          <div className="idea__matching-content-right-comment">
            <SpeechBubble />
            <h4>8</h4>
          </div>
        </div>
        <div className="idea__matching-content-right-item">
          <h3>マッチングアプリを作りたい！</h3>
          <h4>
            マッチングアプリを作りたいと思って投稿しました！コンセプトは〇〇で、こんなことをしたいと思っています。マッチングアプリを作りたいと思って投稿しました！...
          </h4>
        </div>
      </div>
    </div>
  )
}
const IdeaMatchingBulletinBoard = () => {
  return (
    <div className="idea__matching">
      <div className="idea__matching-box">
        <div className="idea__matching-content">
          <p>まだアイデアの投稿がありません。</p>
          <IdeaMatchingItem />
          <IdeaMatchingItem />
          <IdeaMatchingItem />
          <IdeaMatchingItem />
          <IdeaMatchingItem />
          <Paginate />
        </div>
        <IdeaRecomend />
      </div>
    </div>
  )
}

export default IdeaMatchingBulletinBoard
