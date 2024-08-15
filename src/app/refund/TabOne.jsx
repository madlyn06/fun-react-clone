import Button from '@/components/Button'
import ItemProject from '@/components/ItemProject'
import RefundPlan from '@/components/RefundPlan'
import React from 'react'

function TabOne({ setTab }) {
  return (
    <div>
      <RefundPlan />
      <div className="refund-form">
        <h1>お支払い方法</h1>
        <form action="">
          <div className="form-control">
            <label htmlFor="">
              決済方法<span>※</span>
            </label>
            <div className="form-input-control">
              <div className="form-input">
                <input
                  type="radio"
                  id="male"
                  className="radio-input"
                  name="gender"
                />
                <label htmlFor="male" className="radio-label" />
                <span>クレジットカード</span>
              </div>
              <div className="form-input">
                <input
                  type="radio"
                  id="male1"
                  className="radio-input"
                  name="gender"
                />
                <label htmlFor="male1" className="radio-label" />
                <span>銀行振込</span>
              </div>
            </div>
          </div>
          <div className="form-flex">
            <div className="form-control">
              <label htmlFor="">
                カード番号<span>※</span>
              </label>
              <input
                type="input"
                name=""
                id=""
                placeholder="カード番号を入力してください"
              />
            </div>
            <div className="form-control">
              <label htmlFor="">
                有効期限<span>※</span>
              </label>
              <input
                type="input"
                name=""
                id=""
                placeholder="有効期限を入力してください"
              />
            </div>
          </div>
          <div className="form-flex">
            <div className="form-control">
              <label htmlFor="">
                カード名義<span>※</span>
              </label>
              <input
                type="input"
                name=""
                id=""
                placeholder="カード名義を入力してください"
              />
            </div>
            <div className="form-control">
              <label htmlFor="">
                セキュリティ番号<span>※</span>
              </label>
              <input
                type="input"
                name=""
                id=""
                placeholder="セキュリティ番号を入力してください"
              />
            </div>
          </div>
          <h1 className="form-title">支払者情報（住所等）</h1>
          <div className="form-control">
            <label htmlFor="">
              氏名<span>※</span>
            </label>
            <input
              type="input"
              name=""
              id=""
              placeholder="氏名を入力してください"
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              氏名（カナ）<span>※</span>
            </label>
            <input
              type="input"
              name=""
              id=""
              placeholder="氏名（カナ）を入力してください"
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              郵便番号<span>※</span>
            </label>
            <input
              type="input"
              name=""
              id=""
              placeholder="郵便番号（ハイフンあり）を入力してください"
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              都道府県<span>※</span>
            </label>
            <input
              type="input"
              name=""
              id=""
              placeholder="都道府県を入力してください"
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              市区町村以降<span>※</span>
            </label>
            <input
              type="input"
              name=""
              id=""
              placeholder="市区町村以降を入力してください"
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              電話番号<span>※</span>
            </label>
            <input
              type="input"
              name=""
              id=""
              placeholder="電話番号（ハイフンなし）を入力してください"
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              メールアドレス<span>※</span>
            </label>
            <input
              type="input"
              name=""
              id=""
              placeholder="メールアドレスを入力してください"
            />
          </div>
          <div className="form-checkbox">
            <input type="checkbox" />
            <p>このお届け先情報をユーザー設定に上書きする</p>
          </div>
          <div className="form-control">
            <label htmlFor="">備考</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="form-control">
            <label htmlFor="">応援コメント</label>
            <textarea name="" id=""></textarea>
          </div>
          <Button
            title="確認画面へ"
            handleClickButton={() => setTab('2')}
            classnameButtonWrapper={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '55px',
              marginTop: '50px',
            }}
            classnameButton={{
              padding: '10px',
              maxWidth: '280px',
              width: '100%',
              height: '100%',
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '1.6px',
              margin: '0',
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </form>
      </div>
    </div>
  )
}

export default TabOne
