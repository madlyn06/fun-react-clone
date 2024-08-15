import React from 'react'
import Button from '@/components/Button'
import Paginate from '@/components/Paginate'

function OurActivity() {
  return (
    <>
      <div className="our-activity">
        <div className="activity-top">
          <h3 className="activity-title">タイトルが入ります</h3>
          <p className="activity-date">2024/00/00 00:00</p>
        </div>
        <div className="activity-bottom">
          <div className="activity-img">
            <img src="/images/out-activity.png" alt="" />
          </div>
          <div className="activity-content">
            <p className="activity-content-title">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります…
            </p>
            <Button
              classnameButtonWrapper={{
                display: 'flex',
                justifyContent: 'end',
              }}
              classnameButton={{
                padding: '7px 23px',
              }}
            />
          </div>
        </div>
      </div>
      <div className="our-activity">
        <div className="activity-top">
          <h3 className="activity-title">タイトルが入ります</h3>
          <p className="activity-date">2024/00/00 00:00</p>
        </div>
        <div className="activity-bottom">
          <div className="activity-content">
            <p className="activity-content-title">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります…
            </p>
            <Button
              classnameButtonWrapper={{
                display: 'flex',
                justifyContent: 'end',
              }}
              classnameButton={{
                padding: '7px 23px',
              }}
            />
          </div>
        </div>
      </div>
      <div className="our-activity">
        <div className="activity-top">
          <h3 className="activity-title">タイトルが入ります</h3>
          <p className="activity-date">2024/00/00 00:00</p>
        </div>
        <div className="activity-bottom">
          <div className="activity-content">
            <p className="activity-content-title">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります…
            </p>
            <Button
              classnameButtonWrapper={{
                display: 'flex',
                justifyContent: 'end',
              }}
              classnameButton={{
                padding: '7px 23px',
              }}
            />
          </div>
        </div>
      </div>
      <div className="our-activity">
        <div className="activity-top">
          <h3 className="activity-title">タイトルが入ります</h3>
          <p className="activity-date">2024/00/00 00:00</p>
        </div>
        <div className="activity-bottom">
          <div className="activity-img">
            <img src="/images/out-activity.png" alt="" />
          </div>
          <div className="activity-content">
            <p className="activity-content-title">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります…
            </p>
            <Button
              classnameButtonWrapper={{
                display: 'flex',
                justifyContent: 'end',
              }}
              classnameButton={{
                padding: '7px 23px',
              }}
            />
          </div>
        </div>
      </div>
      <div className="our-activity">
        <div className="activity-top">
          <h3 className="activity-title">タイトルが入ります</h3>
          <p className="activity-date">2024/00/00 00:00</p>
        </div>
        <div className="activity-bottom">
          <div className="activity-img">
            <img src="/images/out-activity.png" alt="" />
          </div>
          <div className="activity-content">
            <p className="activity-content-title">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります…
            </p>
            <Button
              classnameButtonWrapper={{
                display: 'flex',
                justifyContent: 'end',
              }}
              classnameButton={{
                padding: '7px 23px',
              }}
            />
          </div>
        </div>
      </div>
      <div className="our-activity">
        <div className="activity-top">
          <h3 className="activity-title">タイトルが入ります</h3>
          <p className="activity-date">2024/00/00 00:00</p>
        </div>
        <div className="activity-bottom">
          <div className="activity-content">
            <p className="activity-content-title">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります…
            </p>
            <Button
              classnameButtonWrapper={{
                display: 'flex',
                justifyContent: 'end',
              }}
              classnameButton={{
                padding: '7px 23px',
              }}
            />
          </div>
        </div>
      </div>
      <Paginate />
      <div className="no-item d-none">
        <p>
          現在まだ活動報告はありません。
          <br />
          プロジェクトを支援して、
          <br />
          応援お願いします。
        </p>
      </div>
    </>
  )
}

export default OurActivity
