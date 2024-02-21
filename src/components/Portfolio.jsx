import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline px-2 border-b-4 border-gray-500 '>
                        Portfolio
                    </p>
                </div>

                <p className='mt-10 text-2xl px-2 py-4 max-w-fit'>
                    Check out my work here! </p>

                <div>
                  <img src="" alt="" />
                  <div>
                    <button>

                    </button>
                    <button>
                      
                    </button>
                  </div>
                </div>
                    
        </div>
    </div>
  )
}

export default Portfolio;