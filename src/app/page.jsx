import Image from 'next/image'
import ArrowRight from '@/components/svg/ArrowRight'
import HomeBanner from '@/components/HomeBanner'
import ViewedProject from '@/components/ViewedProject/ViewedProject'
import ProgessBar from '@/components/ProgessBar'
import ProjectItem from '@/components/ProjectItem/ProjectItem'
import ItemProject from '@/components/ItemProject'
export default function Home() {
  return (
    <div className="home">
      <HomeBanner>
        <div className="home_banner-paginate">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </HomeBanner>
      <div className="home_content">
        <div className="home_content-bar">
          <div className="home_content-left">
            <p className="home_content-date">2024.12.28</p>
            <div className="home_content-btn">お知らせ</div>
            <div className="home_content-title">
              夏限定の招待キャンペーンを始ました！
            </div>
          </div>
          <div className="home_content-right">一覧をみる</div>
        </div>
        <div className="home_sale-images">
          <div className="home_sale-image">
            <img src="/images/home_sale.png" alt="" />
          </div>
          <div className="home_sale-image">
            <img src="/images/home_sale.png" alt="" />
          </div>
          <div className="home_sale-image">
            <img src="/images/home_sale.png" alt="" />
          </div>
        </div>
        <div className="home_content-wrapper">
          <div className="home_content-sidebar">
            <div className="home_content-one">
              <div className="home_content-title">カテゴリ</div>
              <div className="home_content-item">
                <p>#ビジネス・企業</p>
                <ArrowRight />
              </div>

              <div className="home_content-item">
                <p>#ファッション</p>
                <ArrowRight />
              </div>
              <div className="home_content-item">
                <p>#スポーツ</p>
                <ArrowRight />
              </div>
              <div className="home_content-item">
                <p>#音楽</p>
                <ArrowRight />
              </div>
              <div className="home_content-item">
                <p>#アニメ・漫画</p>
                <ArrowRight />
              </div>
              <div className="home_content-item">
                <p>#美容</p>
                <ArrowRight />
              </div>
              <div className="home_content-item">
                <p>#農業</p>
                <ArrowRight />
              </div>
              <div className="home_content-item">
                <p>#映像・映画制作</p>
                <ArrowRight />
              </div>
              <div className="home_content-item">
                <p>#ビジネス・企業</p>
                <ArrowRight />
              </div>
            </div>
            <div className="home_content-two">
              <div className="home_content-title">カテゴリ</div>
              <div className="home_content-item">
                <p className="home_content-title-item">北海道・東北</p>
                <p className="home_content-desc">
                  北海道 | 青森 | 岩手 | 宮城 秋田 | 山形 | 福島
                </p>
              </div>
              <div className="home_content-item">
                <p className="home_content-title-item">関東</p>
                <p className="home_content-desc">
                  茨城 | 栃木 | 群馬 | 埼玉 千葉 | 東京 | 神奈川
                </p>
              </div>
              <div className="home_content-item">
                <p className="home_content-title-item">中部</p>
                <p className="home_content-desc">
                  新潟 | 富山 | 石川 | 福井 山梨 | 長野 | 岐阜 | 静岡 愛知 |
                  三重
                </p>
              </div>
              <div className="home_content-item">
                <p className="home_content-title-item">近畿</p>
                <p className="home_content-desc">
                  滋賀 | 京都 | 大阪 | 兵庫 奈良 | 和歌山
                </p>
              </div>
              <div className="home_content-item">
                <p className="home_content-title-item">中国</p>
                <p className="home_content-desc">
                  鳥取 | 島根 | 岡山 | 広島 山口
                </p>
              </div>
              <div className="home_content-item">
                <p className="home_content-title-item">四国</p>
                <p className="home_content-desc">徳島 | 香川 | 愛媛 | 高知</p>
              </div>
              <div className="home_content-item">
                <p className="home_content-title-item">九州・沖縄</p>
                <p className="home_content-desc">
                  福岡 | 佐賀 | 長崎 | 熊本 大分 | 宮崎 | 鹿児島 |沖縄
                </p>
              </div>
            </div>
            <div className="home_content-three">
              <div>
                <img src="/images/image-sidebar-1.png" alt="" />
              </div>
              <div>
                <img src="/images/image-sidebar-2.png" alt="" />
              </div>
              <div>
                <img src="/images/image-sidebar-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="home_content-main">
            <ViewedProject />
            <div className="home_preview-main">
              <p className="home_preview-title">
                もっと気軽に！あなたのアイデアをみんなで実現しよう！
              </p>
            </div>
            <div className="home_suggest-main">
              <div className="home_viewed-top">
                <p className="home_viewed-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="42"
                    viewBox="0 0 6 42"
                    fill="none"
                  >
                    <path
                      d="M3 3L3 39"
                      stroke="#00A8F3"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                  あなたにおすすめ
                </p>
                <div className="home_viewed-button">
                  <button>もっとみる</button>
                </div>
              </div>
              <div className="home_suggest-lists">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <ProjectItem key={index} />
                  ))}
              </div>
            </div>
            <div className="home_suggest-main">
              <div className="home_viewed-top">
                <p className="home_viewed-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="42"
                    viewBox="0 0 6 42"
                    fill="none"
                  >
                    <path
                      d="M3 3L3 39"
                      stroke="#00A8F3"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                  まもなく終了
                </p>
                <div className="home_viewed-button">
                  <button>もっとみる</button>
                </div>
              </div>
              <div className="home_suggest-lists">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <ItemProject key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_footer">
        <div className="home_footer-box">
          <h1>
            FunFanFundは手数料が<p>業界最安</p>！
          </h1>
          <h1>いますぐクラウドファンリングを始めよう！</h1>
          <div className="expense">
            <div className="expense-item">
              <h4>初期費用</h4>
              <p>利用手数料など</p>
              <div className="expense-price">
                <h1>0</h1>
                <span>円</span>
              </div>
            </div>
            <div className="expense-item">
              <h4>初期費用</h4>
              <p>利用手数料など</p>
              <div className="expense-price">
                <h1>0</h1>
                <span>円</span>
              </div>
            </div>
          </div>
          <div className="home_footer-button">
            <button>
              <p className="home_footer-button-title">
                あなたのアイデアを世界へ
              </p>
              <p className="home_footer-button-text">プロジェクトを掲載する</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
