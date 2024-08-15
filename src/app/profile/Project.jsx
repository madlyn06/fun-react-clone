import Button from '@/components/Button'
import ProjectItem from '@/components/ProjectItem/ProjectItem'
import React from 'react'
function ProjectContent({ donate = true }) {
  return (
    <div className='project-content'>
      <div className='project-content-left'>
        <ProjectItem />
      </div>
      <div className='project-content-main'>
        {!donate && <div className='attached-return'>リターン型</div>}
        {donate && <div className='attached-donate'>リターン型</div>}

        <div className='project-content-main-info'>
          <p>お支払い金額：5,000円</p>
          <p>支援した日付：2024年12月</p>
          <p>お届け予定日：2024年12月</p>
          <p>
            詳　　　　細：詳細のテキストが入ります。詳細のテキストが入ります
            　　　　　　　。詳細のテキストが入ります。詳細のテキストが入りま
            　　　　　　　す。詳細のテキストが入ります。詳細のテキストが入り
          </p>
        </div>
      </div>
    </div>
  )
}
function Project() {
  return (
    <div className='profile-right'>
      <div className='profile-top'>
        <div className='profile-top-title'>
          <svg xmlns='http://www.w3.org/2000/svg' width='6' height='42' viewBox='0 0 6 42' fill='none'>
            <path d='M3 3L3 39' stroke='#00A8F3' strokeWidth='5' strokeLinecap='round' />
          </svg>
          <h1>支援したプロジェクト</h1>
        </div>
        <p>PROJECT</p>
      </div>
      <div>
        <ProjectContent donate={false} />
        <ProjectContent donate={true} />
        <ProjectContent donate={false} />
      </div>
    </div>
  )
}

export default Project
