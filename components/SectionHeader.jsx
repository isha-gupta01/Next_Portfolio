import React from 'react'

const SectionHeader = ({title,eyebrow,description,}) => {
  return (
    <div>
      <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{eyebrow}</p>
        </div>
        <h2 className=" text-3xl md:text-5xl font-sans text-center mt-6">{title}</h2>
        <p className="text-center max-w-md mx-auto lg:text-xl text-white/60 mt-4 md:text-lg">
        {description} </p>
    </div>
  )
}

export default SectionHeader
