import React, { useState } from 'react'
import '../css/modal.css'
import modalImg from '../images/modal.jpeg'

function Modal(){

    const [modal, setModal] = useState("modal")

    return(
        <>
            <div className={modal}>
                <img src={modalImg} alt="" width="70%"/>
                <button onClick={()=>{
                    setModal("close")
                }}>X</button>
            </div>
        </>
    )
}

export default Modal;