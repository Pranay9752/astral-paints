import { cn } from '@/utils/cn'
import React from 'react'

function SectionLayout({ title, subtitle, classname,  children}) {
    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <div className="mb-4">
                <p className=" font-medium text-lg">{subtitle || ""}</p>
            </div>

            <div className="flex items-center mb-8">
                <h1 className="text-4xl font-bold  mr-4">{title || ""}</h1>
                <div className={cn("h-2 w-40 bg-gradient-to-r from-orange-400  rounded-full", classname)}></div>
            </div>

            {children}
        </div>
    )
}

export default SectionLayout