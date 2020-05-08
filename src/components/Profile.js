import React from 'react';
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';
import { Link } from 'react-router-dom';
import "../App.scss"

export default function Profile() {

    return (
    <>
      <MainHeader />
      <div className="all-main">
        <div className="profile-main">
          <div className="profile-top">
            <img alt="JinYagi" src="./static/materials/profile/yagi.jpeg" className="profile-pic"/>
            <h1 className="profile-name">
              やぎじん<br/>
              <span className="profile-subtitle">静岡出身のエンジニア</span>
            </h1>
          </div>

          <p>所属</p>
          <article>
            名城大学大学院修士課程
            2019/04 ~ 2021/03<br/>
            名城大学大学院理工学研究科情報工学専攻修士課程<br/>
            知的センサ情報処理研究室<br/>
          </article>

          <p>連絡先</p>
          <article>
            193426019[at]ccalumni.meijo-u.ac.jp<br />
            ※[at]を＠で置き換えてください<br/>
          </article>
          
          <p>スキル・言語</p>
          <article>
            趣味：JavaScript（React，Node）<br/>
            研究：Matlab <br/>
            授業：C++，Java，Python
          </article>

          <p>Job</p>
          <ul>
            <li>WEBエンジニアとして勤務希望．</li>
            <li>フロントエンドの経験は，主にReactを使用して個人開発でフロントエンドを担当していました．</li>
            <li>下の"作ったもの"から制作物の一覧が見れます．</li>
            <li>HTML，CSS，Javascriptの基礎的な知識があります．</li>
            <li>バックエンドはNodeで簡単なAPIサーバを作成したことがある程度です.</li>
          </ul>

          <div className="profile-buttons">
            <Link to="/products" style={{marginRight:"20px"}}>
              作ったもの
            </Link>
            <Link to="/research">
              研究
            </Link>
          </div>
        </div>
      </div>
      <MainFooter />
    </>
    );
}
