import React from 'react'
import '../styles/studentMyProf.css'
import myProfPic from '../images/my_prof.svg'
import CommonHeading from './CommonHeading'

export default function StudentMyProfile() {
  return (
    <div className='stdntMyProfWrrpr'>
        <CommonHeading ContentHeader="My Profile" />
        <div className="stuMyProfContntPar">
            <div className="edtProfPar edtStuMyProfPar">
                <div className="teacherProf myProfPic stuMyProfPic">
                    <img src={myProfPic} alt="Profile" />
                </div>
                <div className="stuDtlsContnt">
                    <p className="commonFntSz edtProfPicTxt">Edit profile picture</p>
                    <p className="commonFntSz edtProfPicTxt studClsNameTxt">7th Std, A sec</p>
                </div>
            </div>
            <div className="myProfDtlsMnWrpr stuMyProfDtlsMnWrppr">
                <div className="myProfDtlsPar">
                    <div className="myProfEchDtl">
                        <p className="studProfWdthAdjst commonFntSz">Class teacher</p>
                        <p className="studProfWdthAdjst commonFntSz myProfDtlTchrNme">Teacher’s name</p>
                    </div>
                    <div className="myProfEchDtl">
                        <p className="studProfWdthAdjst commonFntSz">Parent/Guardian name</p>
                        <p className="studProfWdthAdjst commonFntSz">Parent/Guardian name</p>
                    </div>
                    <div className="myProfEchDtl">
                        <p className="studProfWdthAdjst commonFntSz">Contact info</p>
                        <p className="studProfWdthAdjst commonFntSz">91+ 9000000000</p>
                    </div>
                    <div className="myProfEchDtl">
                        <p className="studProfWdthAdjst commonFntSz">Student’s performace</p>
                        <p className="studProfWdthAdjst commonFntSz">Recent grade achieved</p>
                    </div>
                    <div className="myProfEchDtl">
                        <p className="studProfWdthAdjst commonFntSz">Address</p>
                        <p className="studProfWdthAdjst commonFntSz">Locality and area name</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
