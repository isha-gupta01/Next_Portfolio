import Link from 'next/link'
import React from 'react'
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
const ContactSection = () => {
  return (
    <div className='py-16 pt-12 lg:py-24 lg:pt-20 z-20' id='contact'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative md:text-left overflow-hidden z-40'>
          <div className='absolute inset-0 opacity-5 -z-10' style={{backgroundImage:`url(${grainImage.src})`}}></div>
          <div className='flex flex-col md:flex-row gap-8 
          md:gap-16 items-center'>
            <div >
          <h2 className='font-sans font-medium
          text-2xl md:text-3xl'>Let's create something amazing together</h2>
          <p className='text-sm mt-2 font-bold md:text-base'>
            Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.
          </p>
          </div>
          <div>
          <Link href="/contact" className='text-white bg-gray-900 cursor-pointer inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900'>
            <span className='font-semibold '>Contact Me</span>
            <ArrowUpRightIcon  className="size-4"/>
          </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
