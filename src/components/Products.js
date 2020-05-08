import React from "react";
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faReact } from '@fortawesome/free-brands-svg-icons';

import '../App.scss';
import './Products.css';

function Products() {

    return (
        <>
            <MainHeader />
            <div className="all-main">
                <div className="products-main">
                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/github.png" alt="GitHub" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">GitHub</p>
                            <article className="card-description">GitHubアカウント．主にここに制作物をあげています．</article>
                            <a href="https://github.com/yagijin" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} style={{color:"#2B2B2B",marginRight:"5px"}}  size="lg"/>
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/blog-toppage.png" alt="blog" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">ブログ</p>
                            <article className="card-description">
                                自分の技術兼趣味ブログ．<br/>
                                Gatsuby.js+NetlifyCMSにて作成．
                            </article>
                            <a href="https://blog.yagijin.com" target="_blank" rel="noopener noreferrer">
                                ブログ
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/portfolio-ogp.png" alt="portfolio" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">ポートフォリオ</p>
                            <article className="card-description">
                                このポートフォリオサイト．<br/>
                                <FontAwesomeIcon icon={faReact}  size="md"/>Reactにて作成
                            </article>
                            <a href="https://github.com/yagijin/portfolio" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} style={{color:"#2B2B2B",marginRight:"5px"}}  size="lg"/>
                                GitHub
                            </a>
                            <a href="https://portfolio.yagijin.com/" target="_blank" rel="noopener noreferrer">
                                TopPage
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/geohack.png" alt="geohack" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">名古屋市到達難易度MAP</p>
                            <article className="card-description">
                                東海大会優勝<br/>
                                名古屋市内の到達難易度が一目でわかるマップ．<br/>
                                GeospatialHackersProgram2020にて作成．<br/>
                                フロントエンドを担当．
                            </article>
                            <a href="https://nagoya-geohack2020.yagijin.com" target="_blank" rel="noopener noreferrer">
                                作成したサイト
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/mousehat.png" alt="mousehat" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">MouseHat</p>
                            <article className="card-description">
                                様々な賞を受賞．<br/>
                                口癖を直すのを手伝ってくれるWebアプリ．<br/>
                                JPHacks2019にて作成．<br/>
                                内部の処理を担当．
                            </article>
                            <a href="https://github.com/jphacks/NG_1904" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} style={{color:"#2B2B2B",marginRight:"5px"}}  size="lg"/>
                                GitHub
                            </a>
                            <a href="https://mousehat.tokyo/" target="_blank" rel="noopener noreferrer">
                                Mousehat
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/chromeex-ruby.jpeg" alt="chromeex-ruby" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">Ruby用のChrome拡張</p>
                            <article className="card-description">
                                Rubyの公式ドキュメントをみやすくするChromeの拡張機能．
                            </article>
                            <a href="https://chrome.google.com/webstore/detail/rubydocument-template/bnhpmjnifppbemfkmfpgadhfaemgkoia" target="_blank" rel="noopener noreferrer">
                                拡張ストア
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/e-Bookmark.png" alt="ebookmark" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">eBookmark</p>
                            <article className="card-description">
                                審査員特別賞受賞．<br/>
                                OLEDとNFCで構成される次世代のしおり．<br/>
                                KMハッカソンにて作成．<br/>
                                主にデバイス側の処理を担当．
                            </article>
                            <a href="https://github.com/yagijin/ebookmark_device" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} style={{color:"#2B2B2B",marginRight:"5px"}}  size="lg"/>
                                GitHub
                            </a>
                            <a href="http://konicaminolta-hackathon.mystrikingly.com/" target="_blank" rel="noopener noreferrer">
                                konicaMinolta
                            </a>
                        </div>
                    </div>


                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/minimom.png" alt="minimom" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">MiniMom</p>
                            <article className="card-description">
                                Cookpad賞受賞<br/>
                                片付けを習慣づけるお手伝いをしてくれるIoT棚<br/>
                                OthloHack2019にて作成<br/>
                                サーバサイドを担当
                            </article>
                            <a href="https://github.com/yagijin/MiniMom" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} style={{color:"#2B2B2B",marginRight:"5px"}}  size="lg"/>
                                GitHub
                            </a>
                            <a href="https://hack.othlo.tech/2019/" target="_blank" rel="noopener noreferrer">
                                OthloHack
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/hacku.png" alt="hacku" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">お母さん検出装置</p>
                            <article className="card-description">
                                HappyHacking賞受賞.<br/>
                                任意の相手がWifiにつないだ時に検知して通知してくれるサービス．<br/>
                                HackU2019Nagoyaにて作成．<br/>
                                Androidアプリを担当．
                            </article>
                            <a href="https://github.com/yagijin/hack_u2019nagoya" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} style={{color:"#2B2B2B",marginRight:"5px"}}  size="lg"/>
                                GitHub
                            </a>
                            <a href="https://hacku.yahoo.co.jp/hacku2019nagoya/" target="_blank" rel="noopener noreferrer">
                                Yahoo!
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="products-pic-parent">
                            <img src="./static/materials/profile/stick.jpg" alt="hacku" className="products-pic"/>
                        </div>
                        <div className="card-content">
                            <p className="card-title">洗濯日和</p>
                            <article className="card-description">
                                IoT物干し竿．<br/>
                                太陽の方角を自動で向き，雨が降るとき自動で取り込むためはやく乾燥できる．<br/>
                                HackU2019Meijoにて作成．<br/>
                                サーバサイドを担当．
                            </article>
                        </div>
                    </div>

                </div>
            </div>
            <MainFooter />
        </>
    );
}

export default Products;