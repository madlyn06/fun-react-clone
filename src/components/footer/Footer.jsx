import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_image}>
            <Image
              src="/images/footer_image.png"
              width={660}
              height={250}
              alt=""
            />
          </div>
          <div className={styles.footer_box}>
            <div className={styles.footer_top}>
              <div className={styles.footer_top_logo}>
                <Image
                  src="/images/fanfunfund_logo.png"
                  width={316}
                  height={55}
                  alt=""
                />
              </div>
              <div className={styles.footer_top_link}>
                <div className={styles.footer_top_link_left}>
                  <h4>TOP</h4>
                  <Link href="/">新規登録</Link>
                  <Link href="/">マイページ</Link>
                  <Link href="/">アイディアマッチング</Link>
                  <Link href="/">プロジェクト一覧</Link>
                </div>
                <div className={styles.footer_top_link_right}>
                  <Link href="/">お知らせ</Link>
                  <Link href="/">よくある質問</Link>
                  <Link href="/">お問い合せ</Link>
                  <Link href="/">ログイン</Link>
                </div>
              </div>
            </div>
            <div className={styles.footer_bottom}>
              <div className={styles.footer_bottom_copyright}>
                <p>Copyright 2011 FanFunFund , Inc. All rights reserved.</p>
              </div>
              <div className={styles.footer_bottom_link}>
                <Link href="/">
                  利用規約／プライバシーポリシー／特定商取引／運営会社
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
