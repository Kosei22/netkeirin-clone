import React from 'react'
import '../css/feature.css'
import featureImg from '../images/featureImg.jpeg'

function Feature(){
    return(
        <>
            <div className="feature">
                <div className="feature-top">
                    <h3>グレードレース特集</h3>
                    <button>グレードレース日程</button> 
                </div>
                <div className="feature-heading">
                    <div className="feature-img">
                        <img src={featureImg} alt="" width="95%" height="140px"/>
                    </div>
                    <div className="feature-text">
                        <div className="feature-text-top">
                            <button>1R 発売中</button>
                        </div>
                        <div className="feature-text-bottom">
                            <p className="feature-location">
                                高知 初日
                            </p>
                            <h3>よさこい賞争覇戦</h3>
                            <p className="feature-date">
                                2023年4月6日(木)~2023年4月9日(日)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="feature-schedule">
                    <div className="feature-race">
                        <p className="feature-location">
                            小田原
                        </p>
                        <h3>北条早雲杯争奪戦</h3>
                        <p className="feature-date">
                            2023年4月13日(木)~2023年4月16日(日)
                        </p>   
                    </div>
                    <div className="feature-race">
                        <p className="feature-location">
                            武雄
                        </p>
                        <h3>大楠賞争奪戦</h3>
                        <p className="feature-date">
                            2023年4月22日(土)~2023年4月25日(火)
                        </p>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature;