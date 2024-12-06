import React from 'react'
import './Home.css'
import Navbar from './../../components/Navbar/Navbar'
import hero_banner from './../../assets/hero_banner.jpg'
import hero_title from './../../assets/hero_title.png'
import play_icon from './../../assets/play_icon.png'
import info_icon from './../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero relative ">
        <img src={hero_banner} alt=""  className='banner-img'/>
        <div className="hero-caption max-[800px]:pl-[4%] absolute w-[100%] pl-[6%] bottom-0">
          <img src={hero_title} alt=""  className='caption-img max-[500px]:hidden max-[800px]:mb-[10px] max-[800px]:w-[40%] w-[90%] max-w-[420px] mb-[30px]'/>
          <p className='max-[800px]:text-[12px]  max-[800px]:mb-[10px] max-w-[700px] text-[17px] mb-[20px]'>Discovering his ties to a secret ancient order , a young
            man living in modern Istanbul embarks on a quest to save 
            city from an immortal enemy
          </p>
          <div className="hero-btns flex gap-[10px] mb-[50px] max-[1024px]:mb-[30px]">
            <button className='btn max-[500px]:py-[15px] max-[500px]:px-[10px] max-[500px]:gap-[5px] max-[500px]:text-[10px] inline-flex items-center py-[8px] px-[20px] gap-[10px] text-[15px] font-[600] text-black bg-white cursor-pointer hover:bg-[#ffffffbf]'><img src={play_icon} alt="" className='w-[25px] max-[800px]:w-[20px] max-[500px]:w-[15px]'/>Play</button>
            <button className='btn dark-btn inline-flex items-center py-[8px] px-[20px] gap-[10px] text-[15px] font-[600] text-black bg-white cursor-pointer color-[#fff] bg-[#6d6d6eb3] hover:bg-[#6d6d6e66]'><img src={info_icon} alt="" className='w-[25px] max-[800px]:w-[20px]max-[500px]:w-[15px]'/>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards max-[800px]:pl-[4%]">
        <TitleCards title={"Blockbuster Movie"} category={"top_rated"}/>
        <TitleCards title={"only on Netflix"} category={"popular"}/>
        <TitleCards title={"Uocoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
