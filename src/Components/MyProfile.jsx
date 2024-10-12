import React from 'react'
import '../styles/myProfile.css'
import CommonHeading from './CommonHeading'
import myProfPic from '../images/my_prof.svg'
import rhtArwWht from '../images/rht_arr_wht.svg'

export default function MyProfile() {
  return (
    <div className='myProdfWrrpr'>
        <CommonHeading ContentHeader="My Profile" />
        <div className="myProfContnt">
            <div className="edtProfPar">
                <div className="teacherProf myProfPic">
                    <img src={myProfPic} alt="Profile" />
                </div>
                <p className="commonFntSz tchrNameWthHlo">Edit profile picture</p>
            </div>
            <div className="myProfDtlsMnWrpr">
                <div className="myProfDtlsPar">
                    <div className="myProfEchDtl">
                        <p className="wdthMntn commonFntSz">Name</p>
                        <p className="wdthMntn commonFntSz myProfDtlTchrNme">Teacher’s name</p>
                        <div className="wdthMntn myProfDtlArrDv">
                            <img src={rhtArwWht} alt="Arrow" />
                        </div>
                    </div>
                    <div className="myProfEchDtl">
                        <p className="wdthMntn commonFntSz">Email</p>
                        <p className="wdthMntn commonFntSz">Emailid@Sparked.com</p>
                        <div className="wdthMntn myProfDtlArrDv">
                            <img src={rhtArwWht} alt="Arrow" />
                        </div>
                    </div>
                    <div className="myProfEchDtl">
                        <p className="wdthMntn commonFntSz">Bio</p>
                        <p className="wdthMntn commonFntSz">Class teacher of 7th A</p>
                        <div className="wdthMntn myProfDtlArrDv">
                            <img src={rhtArwWht} alt="Arrow" />
                        </div>
                    </div>
                    <div className="myProfEchDtl">
                        <p className="wdthMntn commonFntSz">Subjects</p>
                        <p className="wdthMntn commonFntSz">Maths, English</p>
                        <div className="wdthMntn myProfDtlArrDv">
                            <img src={rhtArwWht} alt="Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
