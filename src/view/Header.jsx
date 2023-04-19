import React, { useState } from 'react'
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

function Header(){

    const [menu, setMenu] = useState("close");

    return(
        <> 
            <div className={menu}>
                <Menu />
                <div className="menu-close" onClick={()=>{
                    setMenu("close")
                }}>
                    <h2>X</h2>
                </div>
            </div>
            <div className="header-top">
                <p>icon</p>
                <p>予想につながる<br/>データ解析をアプリで</p>
                <a>無料ダウンロード</a>
            </div>
            <div className="header-middle">
                <p onClick={()=>{
                    setMenu("nav")
                }}>=</p>
                <h3>netkeirin</h3>
                <FontAwesomeIcon icon={faBell} />
                <a>競馬</a>
            </div>
            <div className="header-bottom">
                <ul>
                    <li className="top">トップ</li>
                    <li>レース</li>
                    <li>予想</li>
                    <li>ニュース＆コラム</li>
                    <li>ミッドナイト</li>
                    <li>ガールズ</li>
                    <li>PIST6</li>
                    <li>データベース</li>
                    <li>競輪広場</li>
                    <li>お気に入り</li>
                    <li>まとめ</li>
                    <li>マイページ</li>
                    <li>アカウント</li>
                    <li>キャンペーン</li>
                </ul>
            </div>  
    </>)
    }

export default Header;
