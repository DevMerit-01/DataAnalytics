import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { pricingOptions } from '../constants';


function Price() {
  return (
    <div className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'>Choose your right plan!</h2>
      <p className='text-lg text-center text-neutral-500 mb-9'>Select from best plans, ensuring a perfect match. Need more or less? <br/>
      Customize your subscription for a seamless fit.</p>
      <div className='flex flex-wrap'>
        {pricingOptions.map((option, index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                <div className='p-10 border border-neutral-700 rounded-xl'>
                    <p className='text-4xl font-bold mb-8 '>
                        {option.title}
                        {option.title === "Pro" && (
                            <span className='text-purple-500 text-transparent bg-clip-text text-xl mb-4 ml-2'>(Most Popular)</span>
                        )}
                    </p>
                    <p className='mb-8'>
                        <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                        <span className='text-neutral-400 tracking-tight'>/Month</span>
                    </p>
                    <hr className='border-t-1 border-gray-400 my-4 rounded-full'/>
                    <ul>
                        {option.features.map((feature, index) => (
                            <li key={index} className='mt-8 flex items-center'>
                                <CheckCircle2/>
                                <span className='ml-2'>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <a href="#" className='inline-flex justify-center items-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-800 text-base font-medium text-white hover:bg-orange-600 mt-8 w-full text-center h-12 p-5 mt-20 tracking-tight text-xl transition duration-200'>
                        Get Started
                    </a>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Price
