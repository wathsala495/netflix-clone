import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from './../../assets/caret_icon.svg'
import { logout } from '../../firabase'
const Navbar = () => {

  const navRef=useRef();
   
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  })

  return (
    <div className=' navbar w-[100%] py-[20px] px-[6%] flex justify-between fixed text-[14px] text-[#e5e5e5] z-10' ref={navRef}>
      <div className="navbar-left flex items-center gap-[50px]">
        <img src={logo} alt="" className='w-[90px]'/>
        <ul className='flex gap-[20px]'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>TV Shows</li>
            <li className='cursor-pointer'>Movies</li>
            <li className='cursor-pointer'>New & Popular</li>
            <li className='cursor-pointer'>My List</li>
            <li className='cursor-pointer'>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right flex gap-[20px] items-center">

        <img src={search_icon} alt="" className='icons w-[20px] cursor-pointer'/>
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons'/>
       <div className="navbar_profile relative flex items-center gap-[10px] cursor-pointer group">
       <img src={profile_img} alt="" className='profile rounded-[4px] w-[35px] '/>        
       <img src={caret_icon} alt="" />
       <div className="dropdown absolute top-[100%] right-0 bg-[#191919] w-max py-[18px] px-[22px] rounded-[2px] z-1 underline hidden  group-hover:block">
        <p className='text-[13px] cursor-pointer' onClick={()=>{logout()}}> Sign out of Netflix</p>
       </div>
       </div>        

      </div>
    </div>
  )
}

export default Navbar
