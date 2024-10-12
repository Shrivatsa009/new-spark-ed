import React from 'react'
import CommonHeading from './CommonHeading'
import '../styles/markAttendce.css'
import { Link } from 'react-router-dom'
import myProfile from '../images/my_prof.svg'
import editIcon from '../images/edit.svg'

export default function MarkAttendance() {


    const markAttendance = [
        {
            stdNameAndSec : "4th std, C sec",
            atdnceListRoute : "/markattendance/attendance",
            edtIconPic : editIcon
        },
        {
            stdNameAndSec : "7th std, A sec",
            atdnceListRoute : "/markattendance/attendance",
            edtIconPic : editIcon
        },
        {
            stdNameAndSec : "3th std, B sec",
            atdnceListRoute : "/markattendance/attendance",
            edtIconPic : editIcon
        },
        {
            stdNameAndSec : "5th std, A sec",
            atdnceListRoute : "/markattendance/attendance",
            edtIconPic : editIcon
        },
        {
            stdNameAndSec : "4th std, A sec",
            atdnceListRoute : "/markattendance/attendance",
            edtIconPic : editIcon
        },
        {
            stdNameAndSec : "5th std, C sec",
            atdnceListRoute : "/markattendance/attendance",
            edtIconPic : editIcon
        }
    ]



  return (
    <div className='mrkAttdnceWrppr'>
        <CommonHeading ContentHeader="Mark Attendance" />
        <div className="mrkAtdnceContnt">
            <div className="teacherDtls">
                <div className="teacherProf">
                    <img src={myProfile} alt="profile Pic" />
                </div>
                <div className="teacherName">
                    <span className="tchrNameTxt">Teacher's name</span>
                    <span className="tchrNameTxt tchrNameTxtSub">Maths, English</span>
                </div>
            </div>
            <ul className="stdNameAttendcePar">
                {markAttendance.map((clsNameSec, index)=>{
                    return (
                        <li key={index} className="stdNameAttdnce">
                            <div className="frstPrd stdAttdnceMxWdth">
                                <span className="commonFntSz">{clsNameSec.stdNameAndSec}</span>
                            </div>
                            <Link to={clsNameSec.atdnceListRoute} className="markAttendPic">
                                <img src={clsNameSec.edtIconPic} alt="Attendance" />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    </div>
  )
}
