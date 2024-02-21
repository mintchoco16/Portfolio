import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { TbArrowRightTail } from "react-icons/tb";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black
    to-gray-800'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl px-2 py- 3 font-bold text-white'>
                    <p>I'm a</p> 
                    <p>Developer ⌘ & </p> 
                    <p>Musician ♪ </p> 
                    
                </h2>
                <br></br>
                
                <br></br>

                <div>
                    <button className='group text-white text-2xl w-fit px-3 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>

                        <TbArrowRightTail size={25} className='ml-2' />

                        </span>
                        
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home