import React from "react";
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';

import '../App.scss';

function PrivacyPolicy() {
    return (
        <>
          <MainHeader />
          <div className="all-main">
            <div className="privacy-main">
              <h1 className="privacy-title">Privacy Policy</h1>
              <div>
                本サイトでは，アクセスデータの分析と解析のためにGoogle Analyticsを使用しています．<br/>
                その際に，Googleがお使いのブラウザ上にCookieを設定したり既存のCookieの読み取りを行う場合があります．<br />
                また，本サイトをご利用中のブラウザは，Googleに特定の非個人情報を自動的に送信します．
                当サイトはそれらの情報を，サイトの質の向上のために利用する可能性があります．
                本サイトのユーザは本サイトを利用することにより，上記方法および目的においてGoogleとサイト管理者が行うこのようなデータ処理に対して，
                許可を与えたものとみなします．<br />
                Google社によるアクセス情報の収集方法および利用方法については，
                <a href="https://www.google.com/analytics/terms/jp.html" target="_brank">Google Analyticsサービス利用規約</a>
                および<a href="https://policies.google.com/privacy?hl=en&gl=en" target="_brank">Google社プライバシーポリシー</a>
                によって定められています．<br/>
                なお,ユーザはブラウザの設定によりCookieの受け取りを拒否することができます.
              </div>
            </div>
          </div>
          <MainFooter />
        </>
    );
}

export default PrivacyPolicy;