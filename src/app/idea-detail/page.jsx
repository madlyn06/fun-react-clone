'use client'
import IdeaRecomend from '@/components/IdeaRecomend'
import Image from 'next/image'
import React, { useState } from 'react'
import MessageItem from '@/components/MessageItem'
import Button from '@/components/Button'
import RadioInput from '@/components/RadioInput'
function Modal() {
  return (
    <div className="modal">
      <form action="">
        <div className="modal-content">
          <h1>プロジェクトの作成</h1>
          <div className="modal-edit-box">
            <div className="modal-add-image">
              <p>サムネイルを選択 ＋</p>
            </div>
            <div className="modal-box-right">
              <h1>希望スタイルを選択</h1>
              <div className="modal-box-radios">
                <div className="modal-box-radio">
                  <span>アイデアのみ</span>
                  <RadioInput width={'16px'} name="type-hope" id={'type-1'} />
                </div>
                <div className="modal-box-radio">
                  <span>アイデアのみ</span>
                  <RadioInput width={'16px'} name="type-hope" id={'type-2'} />
                </div>
                <div className="modal-box-radio">
                  <span>アイデアのみ</span>
                  <RadioInput width={'16px'} name="type-hope" id={'type-3'} />
                </div>
                <div className="modal-box-radio">
                  <span>アイデアのみ</span>
                  <RadioInput width={'16px'} name="type-hope" id={'type-4'} />
                </div>
              </div>
              <div className="form-control">
                <label
                  htmlFor=""
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: '1.6px',
                  }}
                >
                  タイトル
                </label>
                <input
                  style={{
                    color: '#A0A0A0',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '1.4px',
                  }}
                  type="text"
                  placeholder="プロジェクトのタイトルを入力してください"
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="">内容</label>
            <textarea
              name=""
              id=""
              placeholder="プロジェクトの内容を入力してください"
            ></textarea>
          </div>
          <Button
            title="投稿する"
            showSvg={false}
            classnameButton={{
              width: '245px',
              padding: '14px 0',
              marginTop: '30px',
            }}
          />
        </div>
      </form>
    </div>
  )
}
function IdeaDetail() {
  const [modal, setModal] = useState(false)
  return (
    <div className="idea_detail">
      <div className="idea_detail-main">
        <div>
          <Image
            alt=""
            src="/images/idea-matching-bulletin-board/image-idea-01.png"
            width={900}
            height={505}
          />
          <div className="idea_detail-top">
            <p>アイデアのみ</p>
          </div>
          <h1 className="idea_detail-title">
            プロジェクトのタイトルが入ります
          </h1>
          <p className="idea_detail-description">
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。
            説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。
          </p>
        </div>
        <div className="idea-message-box">
          <MessageItem
            classNameStyle={{
              boxShadow: 'none',
              borderBottom: '1px solid #eee',
              borderRadius: '0px',
            }}
          />
          <MessageItem
            classNameStyle={{
              boxShadow: 'none',
              borderBottom: '1px solid #eee',
              borderRadius: '0px',
            }}
          />
          <MessageItem
            classNameStyle={{
              boxShadow: 'none',
              borderBottom: '1px solid #eee',
              borderRadius: '0px',
            }}
          />
          <MessageItem
            classNameStyle={{
              boxShadow: 'none',
              borderBottom: '1px solid #eee',
              borderRadius: '0px',
            }}
          />
          <div className="idea-comment-box">
            <h1>コメント</h1>
            <textarea
              name=""
              id=""
              placeholder="プロジェクトに対する意見や質問を記載してください"
            ></textarea>
          </div>
          <Button
            title="送信"
            classnameButton={{
              marginTop: '20px',
            }}
            classnameButtonWrapper={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          />
        </div>
        <div className="idea-detail-wrapper">
          <div className="idea-detail-popup">
            <p>コメントを投稿しました。</p>
          </div>
        </div>
      </div>
      <IdeaRecomend setModal={setModal} />
      {modal && <Modal />}
    </div>
  )
}

export default IdeaDetail
