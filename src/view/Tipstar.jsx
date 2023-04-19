import React from 'react'
import '../css/tipstar.css'

function Tipstar(){

    function backToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <>
        <div className="tipstar">
            <div className="tipstar-top">
                <h3>TIPSTAR</h3>    
            </div>
            <div className="tipstar-main"></div>
            <div className="tipstar-small">
                <div className="dmeo"></div>
                <div className="dmeo"></div>
                <div className="dmeo"></div>
                <div className="dmeo"></div>
            </div>
        </div>
        <div className="backToTop">
            <button onClick={backToTop}>🔺<br/>TOP</button>
        </div>
        <div className="request">
            <p>お気づきの点がございましたら、お聞かせください</p>
            <button>ご意見・ご要望</button>
        </div>
        <div className="netkeirin">
            <p>netkeirin</p>
        </div>
        </>
    )
}

export default Tipstar;