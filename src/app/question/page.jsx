import React from 'react'

function QuestionItem() {
  return (
    <div className='question-item'>
      <div className='question-item-left'>
        <h1 className='question-item-date'>プロジェクト実施時に追加費用はかかりますか？</h1>
        <p className='question-item-title'>
          プロジェクトの公開は無料で行うことができます。プロジェクトで集まった金額から手数料が差し引かれる形になります。
        </p>
      </div>
      <div className='question-button-right'>
        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50' fill='none'>
          <circle cx='25' cy='25' r='25' fill='#FF64AA' />
          <path d='M21 18L29 24.48L21 32.4' stroke='white' />
        </svg>
      </div>
    </div>
  )
}

function Question() {
  return (
    <div className='question'>
      <h1>よくあるご質問</h1>
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
      <QuestionItem />
    </div>
  )
}

export default Question
