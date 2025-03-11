import React from 'react'
import grainImage from "@/assets/images/grain.jpg"
const Card = ({ className, children ,style }) => {
    return (

        <div className=
            {` bg-gray-800 rounded-3xl relative  overflow-hidden z-0 after:z-10  after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20    ${className}`} style={{...style}}>
            <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`,
            }}></div>
            {children}
        </div>
    )
}

export default Card


