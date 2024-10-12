import React from 'react'
import CommonHeading from './CommonHeading'
import '../styles/studentList.css'
import SearchBar from './SearchBar'
import studentListProf from '../images/stu_list_prof.svg'
import { Link } from 'react-router-dom';

export default function StudentList() {
  return (
    <div className='studentListWrppr'>
        <CommonHeading ContentHeader='4th std, C sec' />
        <div className="stuListWthSrcPar">
            <SearchBar />
            <div className="stdListTbleWrpr">
                <div className="tbleMainWrppr">    
                    <div className="tblHdng">
                        <p>Sl.No</p>
                        <p>Name</p>
                        <p>View profile</p>
                    </div>
                    <div className="tblBdyContntPar stdListBdyPar">
                        <div className="tblHdng tblpara">
                            <p>01</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>02</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>03</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>04</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>05</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>06</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>07</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>08</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>09</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>10</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>11</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>12</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>13</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                        <div className="tblHdng tblpara">
                            <p>14</p>
                            <p>Name</p>
                            <p>
                                <Link to="/studentprofile/studentlist/studentmyprofile">
                                    <img src={studentListProf} alt="profile" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
