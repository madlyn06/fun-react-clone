import React, { useEffect, useState } from 'react'
import ItemProject from '../ItemProject'
function InputNumber({ value, onChange }) {
  useEffect(() => {
    if (value <= 0) {
      onChange(1)
    }
  }, [value, onChange])
  const handleDecrement = () => {
    if (onChange) {
      if (value <= 0) return
      onChange(value - 1)
    }
  }

  const handleIncrement = () => {
    if (onChange) {
      onChange(value + 1)
    }
  }

  return (
    <div className="refund-plane-input">
      <span className="no-select" onClick={handleDecrement}>
        −
      </span>
      <p>{value <= 0 ? 1 : value}</p>
      <span className="no-select" onClick={handleIncrement}>
        +
      </span>
    </div>
  )
}
function RefundPlan() {
  const [value, setValue] = useState(0)
  return (
    <div className="refund_content">
      <h1 className="refund_content-title">プランの確認</h1>
      <div className="refund_content-wrapper">
        <div className="refund_content-plane">
          <div className="refund-plane-select">このリターンを選択中 ✔️</div>
          <h1>プランのタイトル</h1>
          <div className="refund-plane-top">
            <div className="refund-plane-nummber">
              <p>数量</p>
              <InputNumber
                value={value}
                onChange={(value) => setValue(value)}
              />
            </div>
            <div className="refund-plane-price">
              <p>お支払い金額</p>
              <h2>¥5,000</h2>
            </div>
          </div>
          <div className="refund-plane-description">
            <div className="refund-plane-user">
              <img src="/images/user-plane.png" alt="" />
              <p>支援者：0人</p>
            </div>
            <div className="refund-plane-user">
              <img src="/images/oto-plane.png" alt="" />
              <p>お届け予定：2024年12月</p>
            </div>
          </div>
          <div className="refund-plane-preview">
            <div className="refund-plane-preview-img">
              <img src="/images/image-plane-preview.png" alt="" />
            </div>
            <p>
              リターン詳細が入ります。リターン詳細が入ります。リターン詳細が入ります。リターン詳細が入ります。
              <br />
              リターン詳細が入ります。リターン詳細が入ります。リターン詳細が入ります。
            </p>
          </div>
        </div>
        <div className="refund_content-choosed">
          <h1>▷選択中のプロジェクト</h1>
          <div className="refund_content-box">
            <ItemProject />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RefundPlan
