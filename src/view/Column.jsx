import React from 'react'
import '../css/column.css'
import columnImg from '../images/heading.jpeg' 

function Column(){
    return(
        <>
            <div className="pickup-column">
                <div className="column-top">
                    <h3>ピックアップ競輪コラム</h3>
                    <button>もっと見る</button>
                </div>
                <div className="column-main">
                    <img src={columnImg} alt="" width="100%" height="170px"/>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit, ullam!</h4>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="columns">
                    <div className="column">
                        <img src={columnImg} alt="" width="30%"/>
                        <div className="column-title">
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                            <p>Lorem ipsum dolor.</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={columnImg} alt="" width="30%"/>
                        <div className="column-title">
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                            <p>Lorem ipsum dolor.</p>
                        </div>
                    </div>
                    <div className="column">
                        <img src={columnImg} alt="" width="30%"/>
                        <div className="column-title">
                            <h4>Lorem ipsum dolor sit amet consectetur.</h4>
                            <p>Lorem ipsum dolor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Column;