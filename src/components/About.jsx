import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline px-2 border-b-4 border-gray-500 '>
                    About
                </p>
            </div>

            <p className='mt-10 text-2xl px-2 py-4 max-w-fit'>
                <p>> I have 3 years of experience working with Python and have been an avid problem-solver all my life! </p>
                <br />
                <p>> I also enjoy visual, performing, & applied arts.</p> 
                <br />
                <p>> Presently, I am working on building a Preference-Based Music-Recommendation Web Application / Platform while polishing my skills in C/C++, DSA, Algorithms, Linux, React, Tailwind, VSCode, Python, and Azure. </p>
                <br />
                <p>> I also recently finished planning and organizing a completely student-led Conference as part of the Combining Two Cultures Team at the University of Waterloo. </p>
                </p>
            <br />
        </div>

    </div>
  )
}

export default About