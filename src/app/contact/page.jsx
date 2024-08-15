'use client'
import React, { useState } from 'react'
import AdvertisementForm from './AdvertisementForm'
import OtherForm from './OtherForm'
import ProjectForm from './ProjectForm'
function Contact() {
  const [tab, setTab] = useState('1')
  return (
    <div className='contact'>
      <h1>CONTACT</h1>
      <h3>クラウドファンディングに関するご相談</h3>
      <p>
        はじめたい方・はじめたいけれど不安な方。
        <br />
        ささいなことでもお気軽にご相談ください。
      </p>
      <div className='contact-tab'>
        <div className={`tab ${tab === '1' ? 'active' : ''}`} onClick={() => setTab('1')}>
          プロジェクト作成について
        </div>
        <div className={`tab ${tab === '2' ? 'active' : ''}`} onClick={() => setTab('2')}>
          広告掲載について
        </div>
        <div className={`tab ${tab === '3' ? 'active' : ''}`} onClick={() => setTab('3')}>
          その他のご相談
        </div>
      </div>
      {/* Form */}
      {tab === '1' && <ProjectForm />}
      {tab === '2' && <AdvertisementForm />}
      {tab === '3' && <OtherForm />}
    </div>
  )
}

export default Contact
