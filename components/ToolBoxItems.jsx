import React from 'react'
import TechIcon from './TechIcon'

const ToolBoxItems = ({ toolboxItems,className,itemsWrapperClassName }) => {
    return (
        <div className={`flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`} >
            <div className={`flex  flex-none py-0.5 gap-6 pr-6 
                ${itemsWrapperClassName}`} >
            {toolboxItems.map((item,index) => (
                <div key={index} className="inline-flex items-center  gap-4 py-2 px-3 border-[2px] border-white/10   rounded-lg">
                    <TechIcon component={item.iconType} />
                    <span className="font-semibold">{item.title}</span>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ToolBoxItems
