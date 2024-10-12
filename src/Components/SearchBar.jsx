import React from 'react'
import '../styles/searchBar.css'
import searchIcon from '../images/search.svg'

export default function SearchBar() {
  return (
    <div className="searchbox">
        <img src={searchIcon} alt="Search Icon" />
        <input className='searchInp' type="text" name="" id="" placeholder='Search' />
    </div>
  )
}
