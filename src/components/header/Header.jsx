'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'
import MaginifyingGlass from '../svg/MaginifyingGlass'
import RoundMenu from '../svg/RoundMenu'
import ArrowDown from '../svg/ArrowDown'
import Button from '../Button'
import DropDown from '../Dropdown'

const options = [
  'アート・写真',
  '映像・映画',
  'ビジネス・企業',
  'まちづくり・地域活性化',
  'アート・写真',
  '映像・映画',
]

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false)
  const [value, setValue] = useState('アート・写真')

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <div className={styles.header_left}>
            <Link href="/" alt="logo">
              <Image
                src="/images/fanfunfund_logo.png"
                width={144}
                height={25}
                alt=""
              />
            </Link>
          </div>
          <div className={styles.header_right}>
            <div className={styles.header_search}>
              <input type="text" />
              <div onClick={() => setOpenSearch(!openSearch)}>
                <MaginifyingGlass />
              </div>
            </div>
            <Button
              title="プロジェクトを掲載する"
              classnameButton={{
                marginTop: '0',
                marginLeft: '26px',
                marginRight: '4px',
              }}
              showSvg={false}
            />
            <div className={styles.header_login}>
              <Link href="/login">ログイン</Link>
            </div>
            <div className={styles.header_menu}>
              <RoundMenu />
            </div>
          </div>
        </div>
        <div className={styles.header_hamburger}>
          <div className={styles.header_hamburger_top}>
            <div className={styles.header_hamburger_item}>
              <div className={styles.header_hamburger_link}>
                <Link href="/">新規登録／ログイン</Link>
              </div>
              <div className={styles.header_hamburger_link_project}>
                <Link href="/">プロジェクト一覧</Link>
                <h4>　-特集</h4>
                <h4>　-閲覧したプロジェクト</h4>
                <h4>　-あなたにおすすめのプロジェクト</h4>
                <h4>　-まもなく終了のプロジェクト</h4>
              </div>
              <div className={styles.header_hamburger_link}>
                <Link href="/">アイディアマッチング掲示板</Link>
              </div>
            </div>
            <div className={styles.header_hamburger_item}>
              <div className={styles.header_hamburger_link_page}>
                <Link href="/">プロジェクト一覧</Link>
                <h4>　-プロフィール</h4>
                <h4>　-お届け先情報</h4>
                <h4>　-口座情報</h4>
                <h4>　-支援したプロジェクト</h4>
                <h4>　-投稿したプロジェクト</h4>
                <h4>　-お気に入りしたプロジェクト</h4>
              </div>
            </div>
            <div className={styles.header_hamburger_item}>
              <div className={styles.header_hamburger_link}>
                <Link href="/">お知らせ</Link>
                <Link href="/">よくある質問</Link>
                <Link href="/">お問い合せ</Link>
                <Link href="/">ログアウト</Link>
              </div>
            </div>
          </div>
          <div className={styles.header_hamburger_bottom}>
            <div className={styles.header_hamburger_bottom_logo}>
              <Image
                src="/images/fanfunfund_logo.png"
                width={316}
                height={55}
                alt=""
              />
              <h5>利用規約／プライバシーポリシー／特定商取引／運営会社</h5>
            </div>
            <div className={styles.header_hamburger_bottom_top}>
              <h2>TOP</h2>
            </div>
          </div>
        </div>
      </div>
      {/* màn sau khi  */}
      {openSearch && (
        <div
          className={`${styles.header_search__box} animation ${openSearch ? 'visible' : 'hidden'}`}
        >
          <div className={styles.header_search__content}>
            <div className={styles.header_search__dropdown}>
              <p className={styles.header_search__dropdown_title}>カテゴリー</p>
              <DropDown
                key={'1'}
                value={value}
                setValue={setValue}
                options={options}
              />
            </div>
            <div className={styles.header_search__dropdown}>
              <p className={styles.header_search__dropdown_title}>カテゴリー</p>
              <DropDown
                key={'2'}
                value={value}
                setValue={setValue}
                options={options}
              />
            </div>
          </div>

          <div className={styles.button_wrapper}>
            <button className={styles.button}>検索する</button>
          </div>
        </div>
      )}
    </header>
  )
}
