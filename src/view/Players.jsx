import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import '../css/players.css'
import playerImg from '../images/playerImg.webp'
import PlayerCard from './PlayerCard'

function Players(){
    return(
        <>
            <div className="players">
                <div className="players-top">
                    <h3>ピックアップ選手</h3>
                </div>
                <AliceCarousel autoPlay autoPlayInterval="5000" infinite>
                    <PlayerCard img={playerImg} win="4連勝中" name="山口多聞" info="埼玉 21歳 121期 A2" location="奈良" fi="FII" r="11R" start="発走 12:20" end="締切 12:15"/>
                    <PlayerCard img={playerImg} win="4連勝中" name="山本修平" info="東京 27歳 115期 A1" location="奈良" fi="FII" r="12R" start="発走 12:50" end="締切 12:45"/>
                    <PlayerCard img={playerImg} win="3連勝中" name="山原さくら" info="高知 30歳 104期 A2" location="福井" fi="FI" r="10R" start="発走 15:14" end="締切 15:09"/>
                    <PlayerCard img={playerImg} win="5連勝中" name="稲垣裕之" info="京都 45歳 86期 S1" location="福井" fi="FII" r="12R" start="発走 16:30" end="締切 16:25"/>
                    <PlayerCard img={playerImg} win="3連勝中" name="和田健太郎" info="千葉 41歳 87期 S1" location="福井" fi="FII" r="12R" start="発走 16:30" end="締切 16:25"/>
                    <PlayerCard img={playerImg} win="4連勝中" name="細田愛未" info="埼玉 27歳 108期 L1" location="小倉" fi="FII" r="8R" start="発走 23:10" end="締切 23:05"/>
                </AliceCarousel>
            </div>
        </>
    )
}

export default Players;