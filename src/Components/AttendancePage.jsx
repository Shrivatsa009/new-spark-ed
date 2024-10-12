import React from 'react'
import { useState } from 'react';
import CommonHeading from './CommonHeading'
import '../styles/attendancePg.css'
import CommonBtn from './CommonBtn'
import right_arrWht from '../images/rht_arr_wht.svg'
import { Link } from 'react-router-dom'

export default function AttendancePage() {
    const [checkboxes, setCheckboxes] = useState(Array(14).fill(true));
    const handleToggle = (index) => {
        const updatedCheckboxes = [...checkboxes];
        updatedCheckboxes[index] = !updatedCheckboxes[index]; // Toggle the specific checkbox
        setCheckboxes(updatedCheckboxes); // Update the state
      };

  return (
    <div className='attendancePgWrrpr'>
        <div className="attndcPgContPar">
            <CommonHeading ContentHeader="4th std, C sec" />
            <div className="attPgMainContainer">
                <div className="attndcPgContntPar">
                    <Link to="myCalendar" className="dvCalendar mrkAttndceClndr">
                        <span className="commonFntSz">9th Mar 2024</span>
                        <img src={right_arrWht} alt="right icon" />
                    </Link>
                    {/* <CalendarDv /> */}
                    <div className="tbleMainWrppr">
                        <div className="tblHdng">
                            <p>Sl.No</p>
                            <p>Name</p>
                            <p>Mark Attendance</p>
                        </div>
                        <div className="tblBdyContntPar">
                            {Array.from({ length: 14 }, (_, i) => (
                                <div className="tblHdng tblpara" key={i}>
                                <p>{String(i + 1).padStart(2, '0')}</p>
                                <p>Name</p>
                                <div className='chckmarksFrAttndce'>
                                    <div className='attChkBxPar'
                                    onClick={() => handleToggle(i)}
                                    >
                                    {checkboxes[i] ? '✅' : '❌'}
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="attPgFtrBtnPar">
                    <CommonBtn title="Save Attendance" />
                </div>
            </div>
        </div>
    </div>
  )
}
