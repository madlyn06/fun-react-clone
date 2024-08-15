'use client'
import React, { useState } from 'react'
import ArrowRight from '@/components/svg/ArrowRight'
import Button from '@/components/Button'
import Profile from './Profile'
import EditProfile from './EditProfile'
import Information from './Information'
import EditInformation from './EditInformation'
import Payment from './Payment'
import EditPayment from './EditPayment'
import Project from './Project'
import Favorite from './Favorite'
const MyPageView = {
  profile: <Profile />,
  information: <Information />,
  payment: <Payment />,
  project: <Project />,
  favorite: <Favorite />,
}
function ProfilePage() {
  const [tab, setTab] = useState('profile')
  return (
    <div className="profile">
      <div className="home_content-one">
        <div className="home_content-title">マイページ</div>
        <div className="home_content-item" onClick={() => setTab('profile')}>
          <p>プロフィール</p>
          <ArrowRight />
        </div>

        <div
          className="home_content-item"
          onClick={() => setTab('information')}
        >
          <p>お届け先情報</p>
          <ArrowRight />
        </div>
        <div className="home_content-item" onClick={() => setTab('payment')}>
          <p>クレジット情報</p>
          <ArrowRight />
        </div>
        <div className="home_content-item" onClick={() => setTab('project')}>
          <p>支援した プロジェクト</p>
          <ArrowRight />
        </div>
        <div className="home_content-item" onClick={() => setTab('favorite')}>
          <p>お気に入りした プロジェクト</p>
          <ArrowRight />
        </div>
      </div>
      {MyPageView[tab]}
    </div>
  )
}

export default ProfilePage
