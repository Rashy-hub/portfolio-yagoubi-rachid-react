import React from 'react'

interface TimelineItemProps {
    title: string
    date: string
    description: string
    isLeft: boolean
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    date,
    description,
    isLeft,
}) => {
    return (
        <div
            className={`flex ${
                isLeft ? 'flex-row-reverse' : 'flex-row translate-x-[100%]'
            } items-center space-x-6  w-1/2`}
        >
            <div
                className={`w-12 h-12 flex justify-center items-center rounded-full bg-purple-600 text-white border-4 border-white shadow-lg`}
            >
                <i className="fa fa-book" aria-hidden="true"></i>
            </div>

            <div
                className={`flex flex-col ${
                    isLeft ? 'mr-12' : 'ml-12'
                } max-w-xs sm:max-w-md`}
            >
                <div className="font-semibold text-lg text-gray-100">
                    {title}
                </div>
                <small className="text-sm text-purple-600 font-semibold italic">
                    {date}
                </small>
                <p className="mt-2 text-md text-neutral-100">{description}</p>
            </div>
        </div>
    )
}

export default TimelineItem
