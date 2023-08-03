import React from 'react'
import './Modal.css'

export default function Modal(props) {
  return (
    <div onClick={() => {props.close()}} className="modal_bg">
        <div className="modal_window">
            <img onClick={() => {props.close()}} className="modal_image" src={props.imageLink} alt="#" />
        </div>
         
    </div>
  )
}
