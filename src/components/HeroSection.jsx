import React from 'react';
import analytics from '../assets/analytics.png';


const  HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-2 lg:mt-7">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide mt-14 font-semibold">
            AI-Based Customer Feedback<br />
            <span className='bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text'>
                {" "}
                and Sentiment Analysis
            </span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl font'>
            Automatically collect, analyze, and interpret customer feedback from multiple sources.<br />
            Gain a deeper understanding of your customers' needs and preferences, to provide actionable <br/>
            insights and improve your product or service.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-purple-500 to-pink-800 py-3 px-4 rounded-md text-white'>
                Start for Free
            </a>
            <a href="#" className='py-3 px-4 mx-5 rounded-md border'>
                Schedule a Demo
            </a>
        </div>

        <div className="flex mt-10 mb-20 justify-center ">
            <img src={analytics} alt="Analytics" className='rounded-lg shadow-md shadow-purple-500' />
        </div>
    </div>
  )
}

export default  HeroSection;