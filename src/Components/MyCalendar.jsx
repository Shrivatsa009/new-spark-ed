import React from 'react'
import Calendar from 'react-calendar'
import CommonHeading from './CommonHeading'
import '../styles/myCalendar.css';
import { useLocation } from 'react-router-dom';
import CommonBtn from './CommonBtn';
import { Link } from 'react-router-dom';



export default function MyCalendar() {
    const currentLocation = useLocation();
    const showButtonsForPath = '/markattendance/attendance/myCalendar'; 
    const isSpecialPath = currentLocation.pathname === showButtonsForPath;

  return (
    <div className='myClaendarWrrpr'>
        <CommonHeading ContentHeader="Calender" />
        <Calendar />
        <div className="attDnceClendrBtnsPar" style={{ display: isSpecialPath ? 'flex' : 'none' }}>
            <Link to="/markattendance/attendance" className="clndrVwAttndceBtn">
                <CommonBtn title="View / Edit Attendance" />
            </Link>
            <Link to="/mytimetable" className="clndrMyTmTblBtn">
                <CommonBtn title="My Time Table" />
            </Link>
        </div>
    </div>
  )
}
