import React from 'react'
import CommonHeading from './CommonHeading'
import '../styles/contactSupport.css'
import rhtArwWht from '../images/rht_arr_wht.svg'

export default function ContactSupport() {
  return (
    <div className='contctSprtWrrpr'>
      <CommonHeading ContentHeader="Contact Support Page" />
      <div className="myProfContnt">
        <div className="edtProfPar">
          <p className="commonFntSz tchrNameWthHlo contctSprtPara">What can I help you with?</p>
        </div>
        <div className="myProfDtlsMnWrpr contctSuprtDtlWrrpr">
            <div className="myProfDtlsPar">
                <div className="myProfEchDtl">
                    <p className="commonFntSz">Mark attendance</p>
                    <img src={rhtArwWht} alt="Arrow" />
                </div>
                <div className="myProfEchDtl">
                    <p className="commonFntSz">Student profile</p>
                    <img src={rhtArwWht} alt="Arrow" />
                </div>
                <div className="myProfEchDtl">
                    <p className="commonFntSz">Community</p>
                    <img src={rhtArwWht} alt="Arrow" />
                </div>
                <div className="myProfEchDtl">
                    <p className="commonFntSz">My profile</p>
                    <img src={rhtArwWht} alt="Arrow" />
                </div>
                <div className="myProfEchDtl">
                    <p className="commonFntSz">My time table</p>
                    <img src={rhtArwWht} alt="Arrow" />
                </div>
            </div>
            <div className="contctSuprtTrngCntctUs">
              <button className="traingVdsBtn">Watch training videos</button>
              <button className="traingVdsBtn">Contact us</button>
            </div>
        </div>
      </div>
    </div>
  )
}
