import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCoins, faBullseye, faNewspaper, faStar, faHeart, faBicycle, faPeopleGroup, faCircleInfo, faCircleQuestion, faEnvelope, faGear, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import '../css/menu.css'

function Menu(){
    return(
        <>
            <div className="menu">
                <div className="menu-body">
                    <div className="menu-top">
                        <h3>
                            <FontAwesomeIcon icon={faArrowRightToBracket} size="xl"/>
                            <span>ログイン</span>
                        </h3>
                    </div>
                    <div className="menu-middle">
                        <input type="text" placeholder="キーワードで検索"/>
                        <p>TIPマネーチャージ(入金)</p>
                        <div className="menu-middle-flex">
                            <button>My収支</button>
                            <button>精算・残高確認</button>
                        </div>
                        <button>キャンペーン達成状況</button>
                    </div>
                    <div className="menu-main">
                        <div className="menu-main-top">
                            <p>
                                <FontAwesomeIcon icon={faHome} className="menu-icon"/>
                                <span>トップ</span>
                            </p>
                        </div>
                        <div className="menu-main-body">
                            <p>
                                <FontAwesomeIcon icon={faCoins}/>
                                <span>結果・払戻</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCoins}/>
                                <span>レース</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faBullseye}/>
                                <span>予想</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faNewspaper}/>
                                <span>ニュース＆コラム</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faStar}/>
                                <span>ミッドナイト</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faHeart}/>
                                <span>ガールズ</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faBicycle}/>
                                <span>PIST6</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faBicycle}/>
                                <span>データベース</span> 
                             </p>
                            <p>
                                <FontAwesomeIcon icon={faBicycle}/>
                                <span>お気に入り</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPeopleGroup}/>
                                <span>競馬広場</span> 
                            </p>
                        </div>
                        <div className="menu-main-bottom">
                            <p>
                                <FontAwesomeIcon icon={faCircleInfo}/>
                                <span>お知らせ</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faCircleQuestion}/>
                                <span>よくある質問</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <span>ご意見ご要望</span> 
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faGear}/>
                                <span>アカウント・設定</span> 
                            </p>
                        </div>
                    </div>
                    <div className="menu-bottom">
                        <p>
                            <FontAwesomeIcon icon={faBicycle} color="#e03d3d"/> 
                            net<span>keirin</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;