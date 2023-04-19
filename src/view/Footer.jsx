import React from 'react'
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-top">
                    <p>全国の競技場一覧</p>
                </div>
                <div className="footer-body">
                    <div className="footer-location">
                        <h5>北日本</h5>
                        <ul>
                            <li>函館競輪場</li>
                            <li>青森競輪場</li>
                            <li>いわき平競輪場</li>
                        </ul>
                    </div>
                    <div className="footer-location">
                        <h5>関東</h5>
                        <ul>
                            <li>弥彦競輪場</li>
                            <li>前橋競輪場</li>
                            <li>取手競輪場</li>
                            <li>宇都宮競輪場</li>
                            <li>大宮競輪場</li>
                            <li>西武園競輪場</li>
                            <li>京王閣競輪場</li>
                            <li>立川閣競輪場</li>
                        </ul>
                    </div>
                    <div className="footer-location">
                        <h5>南関東</h5>
                        <ul>
                            <li>松戸競輪場</li>
                            <li>千葉競輪場</li>
                            <li>川崎競輪場</li>
                            <li>平塚競輪場</li>
                            <li>小田原競輪場</li>
                            <li>伊東競輪場</li>
                            <li>静岡閣競輪場</li>
                        </ul>
                    </div>
                    <div className="footer-location">
                        <h5>中部</h5>
                        <ul>
                            <li>名古屋競輪場</li>
                            <li>岐阜競輪場</li>
                            <li>大垣競輪場</li>
                            <li>豊橋競輪場</li>
                            <li>富山競輪場</li>
                            <li>松坂競輪場</li>
                            <li>四日市競輪場</li>
                        </ul>
                    </div>
                    <div className="footer-location">
                        <h5>近畿</h5>
                        <ul>
                            <li>福井競輪場</li>
                            <li>奈良競輪場</li>
                            <li>日向町競輪場</li>
                            <li>和歌山競輪場</li>
                            <li>岸和田競輪場</li>
                        </ul>
                    </div>
                    <div className="footer-location">
                        <h5>中国</h5>
                        <ul>
                            <li>玉野競輪場</li>
                            <li>広島競輪場</li>
                            <li>防府競輪場</li>
                        </ul>
                    </div>
                    <div className="footer-location">
                        <h5>四国</h5>
                        <ul>
                            <li>高松競輪場</li>
                            <li>小松島競輪場</li>
                            <li>高知競輪場</li>
                            <li>松山競輪場</li>
                        </ul>
                    </div>
                    <div className="footer-location">
                        <h5>九州</h5>
                        <ul>
                            <li>小倉競輪場</li>
                            <li>久留米競輪場</li>
                            <li>武雄競輪場</li>
                            <li>佐世保競輪場</li>
                            <li>別府競輪場</li>
                            <li>熊本競輪場</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-icon">
                        <FontAwesomeIcon icon={faTwitter} className="twitter"/>
                        <FontAwesomeIcon icon={faYoutube} className="youtube"/>
                    </div>
                    <div className="footer-text">
                        <p>お知らせ</p>
                        <p>よくある質問</p>
                        <p>利用規約</p>
                        <p>採用情報</p>
                        <p className="privacy">プライバシーポリシー</p>
                        <p>運営会社</p>
                    </div>
                    <div className="footer-team">
                        <p className="border">競馬</p>
                        <p className="border">野球</p>
                        <p>SMART会員証</p>
                    </div>
                </div>
                <div className="footer-end">
                    <p className="pc">PC版</p>
                    <p className="company">©︎ NetDreamers</p>
                </div>
            </div>
            <div className="banner-bottom">
                <div className="vote">
                    <FontAwesomeIcon icon={faNewspaper} />
                    <p>投票</p>
                </div>
                <div className="ad"></div>
            </div>
        </>
    )
}

export default Footer;