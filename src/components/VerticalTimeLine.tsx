// src/components/VerticalTimeLine.tsx
import React from 'react'

import schoolIcon from '../assets/school.svg'
import workIcon from '../assets/work.svg'
import timelineElements from '../data/timelineElements'
import { TimelineElement } from '../types/TimelineElement'

interface TimelineProps {
    defaultColor?: string
}

const VerticalTimeLine: React.FC<TimelineProps> = ({ defaultColor }) => {
    return (
        <div className="w-full h-auto col-start-1 row-start-4 col-span-full row-span-10 place-self-center py-8 mb-2">
            {timelineElements.map((element: TimelineElement, index) => {
                const colorClass = defaultColor || `bg-${element.color}-500`

                return (
                    <div
                        key={element.id}
                        className="relative flex flex-col items-center mx-auto my-6 w-full sm:w-96"
                    >
                        {/* Vertical Line connecting the steps */}
                        {index !== timelineElements.length - 1 && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-0.5 sm:w-1 bg-white h-full"></div>
                        )}

                        {/* Timeline Block */}
                        <div className="bg-gray-800 text-gray-300 border border-gray-600 rounded-lg px-6 py-4 w-full z-20">
                            {/* Title */}
                            <div className="text-xl font-semibold mb-2">
                                {element.title}
                            </div>

                            {/* Location and Date */}
                            <div className="text-sm text-gray-400 mb-4">
                                {element.location}
                                <span className="sm:hidden">
                                    {' '}
                                    | {element.date}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="text-gray-300 mb-4">
                                {element.description}
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                {element.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-700 text-gray-300 rounded-xl px-3 py-1 text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Icon */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 sm:-top-8 z-30">
                            <img
                                src={
                                    element.icon === 'school'
                                        ? schoolIcon
                                        : workIcon
                                }
                                alt="icon"
                                className={`w-10 h-10 p-2 rounded-full border-2 ${colorClass}`}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VerticalTimeLine
