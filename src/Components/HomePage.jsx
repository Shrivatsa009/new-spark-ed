import React from 'react'
import timeTable from '../images/time_tbl.svg'
import markAttendance from '../images/mark.svg'
import studentProfile from '../images/stu_prof.svg'
import myprofile from '../images/my_prof.svg'
import community from '../images/community.svg'
import contactSup from '../images/support.svg'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'

export default function HomePage() {

    const homePage = [
        {
            listItem : "My Time Table",
            routeItem : "/mytimetable",
            itemImg : timeTable
        },
        {
            listItem : "Mark Attendance",
            routeItem : "/markattendance",
            itemImg : markAttendance
        },
        {
            listItem : "Student Profile",
            routeItem : "/studentprofile",
            itemImg : studentProfile
        },
        {
            listItem : "My Profile",
            routeItem : "/myprofile",
            itemImg : myprofile
        },
        {
            listItem : "Community",
            routeItem : "/community",
            itemImg : community
        },
        {
            listItem : "Contact Support",
            routeItem : "/contactsupport",
            itemImg : contactSup
        }
    ]


  return (
    <div className='homePgWrappr'>
        <h3 className="schoolName">National Public School</h3>
        <SearchBar />
        <p className="commonFntSz tchrNameWthHlo">Hello <span className="tchrNameParaTxt">Teacher's Name</span> </p>
        <ul className='dtlsInfrmtnCrdPar'>
            {homePage.map((item, index)=>{
                return (
                    <li key={index}>
                        <Link className='echDtlCrd' to={item.routeItem}>
                            <img src={item.itemImg} alt="Time Table" />
                            <p className="timeTblBtnTxt">{item.listItem}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>            
    </div>
  )
}
