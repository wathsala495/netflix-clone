import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'



const Footer = () => {
  return (
    <div className='footer  py-[30px] px-[4%] max-w-[1000px] m-auto'  >
       <div className="footer-icons flex gap-[20px] my-[40px]">
          <img src={facebook_icon} alt=""  className='w-[30px] cursor-pointer max-[800px]:w-[25px]'/>
          <img src={instagram_icon} alt="" className='w-[30px] cursor-pointer max-[800px]:w-[25px]'/>
          <img src={twitter_icon} alt="" className='w-[30px] cursor-pointer max-[800px]:w-[25px]'/>
          <img src={youtube_icon} alt="" className='w-[30px] cursor-pointer max-[800px]:w-[25px]'/>    
       </div>
       <ul className='grid grid-cols-4 gap-[15px] mb-[30px] max-[800px]:grid-cols-2 max-[800px]:gap:[8px] max-[800px]:text-[14px]'>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Tzerms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact</li>
       </ul>
       <p className='copyright-text text-[gray] text-[14px]'>	&copy; 1997-2023 Netflix,Inc</p>
    </div>
  )
}

export default Footer
