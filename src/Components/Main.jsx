import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import '../styles/homePage.css';
import HomePage from "./HomePage";
import MarkAttendance from "./MarkAttendance";
import Mytimetable from "./Mytimetable";
import StudentProfile from "./StudentProfile";
import StudentList from './StudentList';
import AttendancePage from './AttendancePage';
import MyProfile from './MyProfile';
import ContactSupport from './ContactSupport';
import StudentMyProfile from './StudentMyProfile';
import MyCalendar from './MyCalendar';
import Community from './Community';

export default function MainPage() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mytimetable" element={<Mytimetable />} />
            <Route path="/markattendance" element={<MarkAttendance />} />
            <Route path="/markattendance/attendance" element={<AttendancePage/>} />
            <Route path="/studentprofile" element={<StudentProfile />} />
            <Route path="/studentprofile/studentlist" element={<StudentList />} />
            <Route path="/studentprofile/studentlist/studentmyprofile" element={<StudentMyProfile />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/mytimetable/myCalendar" element={<MyCalendar />} />
            <Route path="/markattendance/attendance/myCalendar" element={<MyCalendar />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contactsupport" element={<ContactSupport />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
  )
}
