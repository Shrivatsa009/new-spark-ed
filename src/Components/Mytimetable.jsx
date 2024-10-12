import React from 'react'
import '../styles/mytimetable.css'
import CommonHeading from './CommonHeading'
import right_arr from '../images/right_arr.svg'
// import Calendar from 'react-calendar'
import { Link } from 'react-router-dom'

export default function Mytimetable() {
    
  return (
    <div className='myTimeTbleWrappr'>
        <CommonHeading ContentHeader="My Time Table" />
        <div className="timeTblContPar">
            <Link to="/mytimetable/myCalendar" className="dvCalendar">
                <span className="commonFntSz dateTxt">9th Mar 2024</span>
                <img src={right_arr} alt="right icon" />
            </Link>
            <div className="timeTblPar">
                <div className="periodPar">
                    <div className="frstPrd">
                        <span className="commonFntSz">1st period</span>
                        <span className="commonFntSz periodTiming">8:00 - 8:45</span>
                    </div>
                    <div className="frstPrd frstStdNameSec">
                        <span className="commonFntSz periodSubj">7th std, A sec</span>
                        <span className="commonFntSz periodSubj">Mathematics</span>
                    </div>
                </div>
                <div className="periodPar">
                    <div className="frstPrd">
                        <span className="commonFntSz">2nd period</span>
                        <span className="commonFntSz periodTiming">8:45 - 9:30</span>
                    </div>
                    <div className="frstPrd frstStdNameSec">
                        <span className="commonFntSz periodSubj">4th std, C sec</span>
                        <span className="commonFntSz periodSubj">English</span>
                    </div>
                </div>
                <div className="periodPar">
                    <div className="frstPrd">
                        <span className="commonFntSz">3rd period</span>
                        <span className="commonFntSz periodTiming">9:30 - 10:15</span>
                    </div>
                    <div className="frstPrd frstStdNameSec">
                        <span className="commonFntSz periodSubj">No Class</span>
                    </div>
                </div>
                <div className="frstPrd breaksAlignmnt">
                    <span className="commonFntSz">Short Break</span>
                    <span className="commonFntSz periodTiming">10:15 - 10:30</span>
                </div>
                <div className="periodPar">
                    <div className="frstPrd">
                        <span className="commonFntSz">4th period</span>
                        <span className="commonFntSz periodTiming">10:30 - 11:15</span>
                    </div>
                    <div className="frstPrd frstStdNameSec">
                        <span className="commonFntSz periodSubj">6th std, A sec</span>
                        <span className="commonFntSz periodSubj">Mathematics</span>
                    </div>
                </div>
                <div className="periodPar">
                    <div className="frstPrd">
                        <span className="commonFntSz">5th period</span>
                        <span className="commonFntSz periodTiming">11:15 - 12:00</span>
                    </div>
                    <div className="frstPrd frstStdNameSec">
                        <span className="commonFntSz periodSubj">No Clas</span>
                    </div>
                </div>
                <div className="frstPrd breaksAlignmnt">
                    <span className="commonFntSz">Lunch Break</span>
                    <span className="commonFntSz periodTiming">12:00 - 12:45</span>
                </div>
                <div className="periodPar">
                    <div className="frstPrd">
                        <span className="commonFntSz">6th period</span>
                        <span className="commonFntSz periodTiming">12:45 - 1:30</span>
                    </div>
                    <div className="frstPrd frstStdNameSec">
                        <span className="commonFntSz periodSubj">6th std, B sec</span>
                        <span className="commonFntSz periodSubj">Mathematics</span>
                    </div>
                </div>
                <div className="periodPar">
                    <div className="frstPrd">
                        <span className="commonFntSz">7th period</span>
                        <span className="commonFntSz periodTiming">1:30 - 2:15</span>
                    </div>
                    <div className="frstPrd frstStdNameSec">
                        <span className="commonFntSz periodSubj">5th std, A sec</span>
                        <span className="commonFntSz periodSubj">English</span>
                    </div>
                </div>
                <div className="periodPar">
                    <div className="frstPrd">
                        <span className="commonFntSz">8th period</span>
                        <span className="commonFntSz periodTiming">2:15 - 3:00</span>
                    </div>
                    <div className="frstPrd frstStdNameSec">
                        <span className="commonFntSz periodSubj">No Class</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
