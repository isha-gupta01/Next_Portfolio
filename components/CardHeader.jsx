import React from 'react'
import StarIcon from "@/assets/icons/star.svg"

const CardHeader = ({title, description,className}) => {
    return (
        <div>
            <div className={`flex flex-col ${className} px-2 lg:p-6`}>
                <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-9 text-emerald-300" />
                    <h3 className="font-serif text-[1.8rem]">{title}</h3>
                </div>
                <p className="text-sm text-white/60 mt-2">{description}</p>
            </div>
        </div>
    )
}

export default CardHeader
