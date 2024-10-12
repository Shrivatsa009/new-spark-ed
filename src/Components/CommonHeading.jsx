import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/commonheading.css'
import leftArr from '../images/right_arr.svg'
import { Link } from 'react-router-dom'

export default function CommonHeading(props) {
  const navigate = useNavigate();
    const BackClick = () => {
        navigate(-1)
    };
  return (
    <div className='eachPageHdng'>
      <div className="commnHdngHdrPar">
        <img className='backBtnPic' src={leftArr} alt="Arrow" onClick={BackClick} />
        <p className="eachPgeContntHdr">{props.ContentHeader}</p>
        </div>
        <Link to="/home" className="commonFntSz commnHmeBtn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48px" height="48px">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M12 3l10 9h-4v9h-12v-9h-4l10-9zm-1 10v5h-3v-5h3zm5 0v5h-3v-5h3zm-4-4l-6 5.5v1h12v-1l-6-5.5z"/>
          </svg>
        </Link>
    </div>
  )
}
