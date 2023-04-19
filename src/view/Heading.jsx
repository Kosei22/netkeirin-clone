import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import "../css/heading.css"
import slideImg from '../images/heading.jpeg'
import campaignImg from '../images/campaign.jpeg'

function Heading(){
    return(
        <>
            <AliceCarousel autoPlay autoPlayInterval="5000" infinite>
                <div className="heading-slide1" className="sliderimg">
                    <img src={slideImg} width="100%" />
                    <div className="heading-desc">
                        <p>demo1</p>
                        <h3>Lorem ipsum dolor sit amet 
                            <br/>Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>
                <div className="heading-slide1" className="sliderimg">
                    <img src={slideImg} width="100%" />
                    <div className="heading-desc">
                        <p>demo2</p>
                        <h3>Lorem ipsum dolor sit amet 
                            <br/>Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>
                <div className="heading-slide1" className="sliderimg">
                    <img src={slideImg} width="100%" />
                    <div className="heading-desc">
                        <p>demo3</p>
                        <h3>Lorem ipsum dolor sit amet 
                            <br/>Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>
                <div className="heading-slide1" className="sliderimg">
                    <img src={slideImg} width="100%" />
                    <div className="heading-desc">
                        <p>demo4</p>
                        <h3>Lorem ipsum dolor sit amet 
                            <br/>Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>
                <div className="heading-slide1" className="sliderimg">
                    <img src={slideImg} width="100%" />
                    <div className="heading-desc">
                        <p>demo5</p>
                        <h3>Lorem ipsum dolor sit amet 
                            <br/>Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>
            </AliceCarousel> 
            <div className="heading-middle">
                <a href="">的中速報</a>
                <div className="animated">
                    <p>Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing elit. Corrupti, dolore!</p>
                </div>
                <p>▶︎</p>
            </div>
            <div className="heading-bottom">
                <p>icon</p>
                <div className="heading-bottom-inner">
                    <a>車券投票にはTIPSTARアカウントが必要です</a>
                    <p>無料で1,000円分投票できる！</p>
                </div>
                <p>▶︎</p>
            </div>
            <div className="heading-campaign">
                <div className="campaign">
                    <img src={campaignImg} alt="" width="55%" height="55px"/>
                </div>
                <div className="campaign">
                    <img src={campaignImg} alt="" width="55%" height="55px"/>
                </div>
                <div className="campaign">
                    <img src={campaignImg} alt="" width="55%" height="55px"/>
                </div>
                <div className="campaign">
                    <img src={campaignImg} alt="" width="55%" height="55px"/>
                </div>
                <div className="campaign">
                    <img src={campaignImg} alt="" width="55%" height="55px"/>
                </div>
                <div className="campaign">
                    <img src={campaignImg} alt="" width="55%" height="55px"/>
                </div>
            </div>
        </>
    )
 }

 export default Heading;