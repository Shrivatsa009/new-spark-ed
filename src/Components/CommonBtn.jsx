import React from 'react'
import '../styles/commonBtn.css'

export default function CommonBtn(props) {
  return (
    <div className='commonBtnPar'>
        <button className="commonDrkBtn">{props.title}</button>
    </div>
  )
}
