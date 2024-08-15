import ProjectItem from '@/components/ProjectItem/ProjectItem'
import React from 'react'
function Favorite() {
  return (
    <div className='profile-right'>
      <div className='profile-top'>
        <div className='profile-top-title'>
          <svg xmlns='http://www.w3.org/2000/svg' width='6' height='42' viewBox='0 0 6 42' fill='none'>
            <path d='M3 3L3 39' stroke='#00A8F3' strokeWidth='5' strokeLinecap='round' />
          </svg>
          <h1>お気に入りしたプロジェクト</h1>
        </div>
        <p>FAVORITE</p>
      </div>
      <div className='favorite'>
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <div className='favorite-item' key={index}>
              <ProjectItem />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Favorite
