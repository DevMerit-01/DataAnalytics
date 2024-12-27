import React from 'react'
import { platformLinks,companyLinks,communityLinks, resourcesLinks } from '../constants'

function Footer() {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-800 '>
      <div className='grid grid-cols-3 lg:grid-cols-4  gap-4'>
        <div>
            <h3 className='text-md font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className='text-neutral-300'>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-md font-semibold mb-4'>Platform</h3>
            <ul className='space-y-2'>
                {platformLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className='text-neutral-300'>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-md font-semibold mb-4'>Community</h3>
            <ul className='space-y-2'>
                {communityLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className='text-neutral-300'>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-md font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
                {companyLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className='text-neutral-300'>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div> 
      </div>
      <hr className='mt-10 border-neutral-800'/>
      <p className='text-sm text-center text-neutral-500 mt-6'>Copyright ©2024 Merit. All rights reserved</p>
    </footer>
  )
}

export default Footer
