import React from 'react';
import {testimonials} from '../constants';

const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-10 lg:pt-5'>What Our Clients <br/>{" "}
      <span className='bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text'>Say About Us</span></h2>
      <p className='text-lg text-center text-neutral-400 mb-12'>We value your feedback and are committed to providing exceptional service. </p>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                <div className='bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin'>
                    <p className=''>{testimonial.text}</p>
                    <div className='flex mt-8 items-start'>
                        <img className='w-12 h-12 mr-6 rounded-full border border-neutral-300' src={testimonial.image} alt={testimonial.user} />
                    </div>
                    <div>
                        <h6>{testimonial.user}</h6>
                        <span className='text-sm text-neutral-600 font-normal italic text-neutral-600'>{testimonial.company}</span>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
