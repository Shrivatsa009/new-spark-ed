import React from 'react'
import { useState } from "react";
import '../styles/community.css'
import CommonHeading from './CommonHeading'
import plusIcon from '../images/plus.svg'
import moreOptns from '../images/more.svg'
import postPic from '../images/post.png'

export default function Community() {

    const [likes, setLikes] = useState(0); // Initial likes
    const [liked, setLiked] = useState(false); // To track if it's liked

    const handleLike = () => { 
        if (liked) {
        setLikes(likes - 1); // Unlike

        } else { setLikes(likes + 1); // Like

        } setLiked(!liked); // Toggle liked state
    };

  return (
    <div className='communityMnWrrpr'>
        <CommonHeading ContentHeader="Community" />
        <div className="comntyContntPar">
            <div className="cmntyAddCmntPar">
                <div className="adCmntInpPar">
                    <input type="text" placeholder='Type your post here' />
                </div>
                <div className="addCmntPic">
                    <img src={plusIcon} alt="Plus Icon" />
                </div>
            </div>
            <div className="contyRltdPostsPar">
                <div className="cmntyEchPst">
                    <div className="addCmntPic cmntyProf"></div>
                    <div className="cmntyDtlsPar">
                        <div className="cmtyProfhdr">
                            <div className="cmntyPrfNmeNOptns">
                                <p className='commonFntSz cmntyPrfName'>National Pubilc School</p>
                                <p className='cmntyPstsTmg'>3 min ago</p>
                            </div>
                            <img src={moreOptns} alt="More Options Pic" />
                        </div>
                        <div className="cmntyPstCntnt">
                            <div className="cmntyPstsPic">
                                <img src={postPic} alt="Post Pic" />
                            </div>
                            <p className="commonFntSz pstDicrptn">Post description</p>
                            <p className='lkesHrt'>
                                <span className="heart" onClick={handleLike} style={{ fill: liked ? "red" : "#fff" }} > 
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.3667 3.84166C16.941 3.41583 16.4357 3.07803 15.8795 2.84757C15.3232 2.6171 14.7271 2.49847 14.125 2.49847C13.5229 2.49847 12.9268 2.6171 12.3705 2.84757C11.8143 3.07803 11.309 3.41583 10.8833 3.84166L10 4.725L9.11666 3.84166C8.25692 2.98192 7.09086 2.49892 5.875 2.49892C4.65914 2.49892 3.49307 2.98192 2.63333 3.84166C1.77359 4.70141 1.29059 5.86747 1.29059 7.08333C1.29059 8.29919 1.77359 9.46525 2.63333 10.325L3.51666 11.2083L10 17.6917L16.4833 11.2083L17.3667 10.325C17.7925 9.89937 18.1303 9.39401 18.3608 8.83779C18.5912 8.28158 18.7099 7.6854 18.7099 7.08333C18.7099 6.48126 18.5912 5.88508 18.3608 5.32887C18.1303 4.77265 17.7925 4.26729 17.3667 3.84166Z" stroke="#2C2760" />
                                    </svg>
                                </span>
                                <span className="like-count">{likes} likes</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cmntyEchPst">
                    <div className="addCmntPic cmntyProf"></div>
                    <div className="cmntyDtlsPar">
                        <div className="cmtyProfhdr">
                            <div className="cmntyPrfNmeNOptns">
                                <p className='commonFntSz cmntyPrfName'>Class VII </p>
                                <p className='cmntyPstsTmg'>2 hrs ago</p>
                            </div>
                            <img src={moreOptns} alt="More Options Pic" />
                        </div>
                        <div className="cmntyPstCntnt">
                            <p className="commonFntSz pstDicrptn">Class monthly test will be held on 24th March. Timetable will be posted soon.</p>
                            <p className='lkesHrt'>
                                <span className="heart" onClick={handleLike} style={{ fill: liked ? "red" : "#fff" }} > 
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.3667 3.84166C16.941 3.41583 16.4357 3.07803 15.8795 2.84757C15.3232 2.6171 14.7271 2.49847 14.125 2.49847C13.5229 2.49847 12.9268 2.6171 12.3705 2.84757C11.8143 3.07803 11.309 3.41583 10.8833 3.84166L10 4.725L9.11666 3.84166C8.25692 2.98192 7.09086 2.49892 5.875 2.49892C4.65914 2.49892 3.49307 2.98192 2.63333 3.84166C1.77359 4.70141 1.29059 5.86747 1.29059 7.08333C1.29059 8.29919 1.77359 9.46525 2.63333 10.325L3.51666 11.2083L10 17.6917L16.4833 11.2083L17.3667 10.325C17.7925 9.89937 18.1303 9.39401 18.3608 8.83779C18.5912 8.28158 18.7099 7.6854 18.7099 7.08333C18.7099 6.48126 18.5912 5.88508 18.3608 5.32887C18.1303 4.77265 17.7925 4.26729 17.3667 3.84166Z" stroke="#2C2760" />
                                    </svg>
                                </span>
                                <span className="like-count">{likes} likes</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
