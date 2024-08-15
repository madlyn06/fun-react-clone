export default function NotFound() {
  return (
    <div className='not-found'>
      <h2>404</h2>
      <p>
        お探しのページは見つかりません。 <br />
        リンクを再度ご確認ください。
      </p>
      <div style={{ width: '100%' }}>
        <div className='button-custom'>
          <button
            style={{
              width: '280px',
              padding: '10px',
              marginTop: '50px'
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15' fill='none'>
              <path
                d='M9.375 11.25L5.625 7.5L9.375 3.75'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            TOPへ戻る
          </button>
        </div>
      </div>
    </div>
  )
}
