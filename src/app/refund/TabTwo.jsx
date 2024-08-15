import Button from '@/components/Button'
import ItemProject from '@/components/ItemProject'
import RefundPlan from '@/components/RefundPlan'
import React from 'react'

function TabTwo({ setTab }) {
  return (
    <div>
      <RefundPlan />
      <div className="refund_content-item">
        <h1 className="refund_content-title">決済金額</h1>
        <div className="refund_content-bottom">
          <ul>
            <li>■支援金額: 5,000円</li>
            <li>■決済手数料(3%):150円</li>
          </ul>
          <h3>合計：5,150円</h3>
        </div>
      </div>
      <div className="refund_content-main">
        <div className="refund-content-heading">
          <h1>お支払い方法</h1>
          <h3>決済方法</h3>
          <h5>クレジットカード</h5>
        </div>
        <div className="refund-content-body">
          <h1>支払い者情報（カード）</h1>
          <h3>
            カード番号
            <br />
            有効期限
            <br />
            カード名義
            <br />
            セキュリティ番号
          </h3>
          <h5>
            テキスト
            <br />
            テキスト
            <br />
            テキスト
            <br />
            テキスト
          </h5>
        </div>
        <div className="refund-content-body">
          <h1>支払い者情報（住所等）</h1>
          <h3>
            氏名
            <br />
            郵便番号
            <br />
            都道府県
            <br />
            市町村以降
            <br />
            電話番号
            <br />
            メールアドレス
          </h3>
          <h5>
            テキスト
            <br />
            テキスト
            <br />
            テキスト
            <br />
            テキスト
            <br />
            テキスト
            <br />
            テキスト
          </h5>
        </div>
      </div>
      <form className="refund_content-form">
        <div className="form-control">
          <label htmlFor="">備考</label>
          <textarea name="" id=""></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="">応援コメント</label>
          <textarea name="" id=""></textarea>
        </div>
        <Button
          title="確定する"
          handleClickButton={() => setTab('3')}
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
        <p className="back-edit" onClick={() => setTab('1')}>
          ←戻って修正する
        </p>
        <p className="description">
          「確定する」ボタンを押すと、利用規約及び細則により支援契約が成立します。特にご注意頂きたい事項として必ず以下をご確認ください。{' '}
          <br />
          <br />
          ■リターンのお届時期と支援金の返金について
          <br />
          リターンを含む応援購入の場合
          <br />
          リターンのお届け予定時期を予めご確認ください。（支援から数ヶ月先に設定されているものもあります）支援金は、
          リターンの発送前発案者に届けられるため、リターンの遅延等があってもFanFunFundから返金することはできかねます。
          <br />
          <br />
          ■支援契約の当事者について
          <br />
          支援契約は、発案者と支援者との間で成立します。そのため、FanFunFund
          では発案者からのリターンの品質、内容及びその発送について責任を負いません。
          <br />
          <br />
          本プロジェクトはAll-in方式です。支援金が目標金額に届かない場合にも支援契約は成立するため、支援と同時に支援金は決済されます。
        </p>
      </form>
    </div>
  )
}

export default TabTwo
