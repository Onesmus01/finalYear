import React from 'react'
import './Hero.css'
import assets from '../assets/frontend_assets/assets'
import '../index.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



const Hero = () => {
    const navigate = useNavigate(); 
    const handleClick = ()=> {
        navigate('/collection')
    }

  return (
    <div className='hero '>
        <div className="hero-left justify-center">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="">
                <div className="hand-hand-icon flex items-center gap-[20px]">
                    <p>new</p>
                    <img className='w-[105px]' src={assets.hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn flex justify-center items-center gap-[15px] w-[310px] rounded-[75px]
            mt-[30px] opacity-[80%] bg-[#ff4141] color-white font-[22px] h-[70px]   
            ">
                <Link to='/collection'>Latest Collections</Link>
                <img onClick={handleClick} src={assets.arrow_icon} alt='' />
                      
            </div>
        </div>
        <div className="hero-right">
            <img  className='object-cover' src={assets.hero_image} alt="" />

        </div>
      
    </div>
  )
}

export default Hero
