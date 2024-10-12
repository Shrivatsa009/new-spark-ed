import React from 'react'
import { Link } from 'react-router-dom'
import CommonHeading from './CommonHeading'
import '../styles/studentProf.css'
import SearchBar from './SearchBar'
import rightArrWht from '../images/rht_arr_wht.svg'

export default function StudentProfile() {



    const studentProfStdName = [
        {
            stdProfStdList : "4th std, C sec",
            stdntProfRoute : "/studentprofile/studentlist",
            rhtArrIcon : rightArrWht
        },
        {
            stdProfStdList : "5th std, A sec",
            stdntProfRoute : "/studentprofile/studentlist",
            rhtArrIcon : rightArrWht
        },
        {
            stdProfStdList : "6th std, A sec",
            stdntProfRoute : "/studentprofile/studentlist",
            rhtArrIcon : rightArrWht
        },
        {
            stdProfStdList : "6th std, C sec",
            stdntProfRoute : "/studentprofile/studentlist",
            rhtArrIcon : rightArrWht
        },
        {
            stdProfStdList : "7th std, A sec",
            stdntProfRoute : "/studentprofile/studentlist",
            rhtArrIcon : rightArrWht
        }
    ]



  return (
    <div className='studentprofWrppr'>
        <CommonHeading ContentHeader="Student Profile" /> 
        <div className="stuProfContntWrpr">
            <SearchBar />
            <ul className="studprofStdNamePar">
                {studentProfStdName.map((stdrdName, index)=>{
                    return (
                        <li key={index}>
                            <Link to={stdrdName.stdntProfRoute} className="stdprofStdName">
                                <p className="stdNameTxt">{stdrdName.stdProfStdList}</p>
                                <img src={stdrdName.rhtArrIcon} alt="right icon" />
                            </Link>
                        </li>
                    )
                })}
                {/* <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">5th std, A sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link>
                <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">6th std, A sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link>
                <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">6th std, C sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link>
                <Link to="/studentprofile/studentlist" className="stdprofStdName">
                    <p className="stdNameTxt">7th std, A sec</p>
                    <img src={rightArrWht} alt="right icon" />
                </Link> */}
            </ul>
        </div>
    </div>
  )
}
