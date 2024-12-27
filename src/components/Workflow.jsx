import React from 'react'
import {CheckCircle2} from "lucide-react";
import dataa from "../assets/dataa.png";
import { checklistItems } from '../constants';

function Workflow() {
  return (
    <div className='mt-10'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl tracking-wide text-center mb-8'>Accelerate Your <span className='bg-gradient-to-r from-purple-500 to-pink-800 text-transparent bg-clip-text'>Analytics <br /> Workflow</span></h2>
      <p className='text-lg text-center text-neutral-500 mb-9'>We specialize in implementing AI solutions for efficient data processing and analysis.</p>
        <div className='flex flex-wrap justify-center'>
            <div className="p-2 w-full lg:w-1/2 mt-20">
                <img src={dataa} alt="Analytics" />
            </div>
            <div className='pt-12 w-full lg:w-1/2'>
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12">
                        <div className='text-purple-400 mx-6  h-10 w-5 p-2 justify-center items-center rounded-full'>
                            <CheckCircle2 size={20} />
                        </div>
                        <div>
                            <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                            <p className='text-md text-neutral-500'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow;
