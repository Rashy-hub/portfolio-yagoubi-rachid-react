import React, { useState } from 'react'

const ProjectCard: React.FC<{
    link: string
    image: string
    title: string
    description: string
}> = ({ image, title, description, link }) => {
    // Helper to truncate description to 50 words
    const truncateText = (text: string, limit: number): string => {
        const words = text.split(' ')
        return words.length > limit
            ? words.slice(0, limit).join(' ') + '...'
            : text
    }

    const [isTextHovered, setIsTextHovered] = useState(false)

    return (
        <div className="relative min-h-[360px] w-[320px] overflow-hidden shadow-lg cursor-pointer hover:scale-110 transition duration-300">
            {/* Image Section */}
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-lg transform transition duration-400 ease-in-out hover:scale-110 hover:rotate-3"
                />
            </a>
            {/* Text Overlay Section */}
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-slate-700 text-white">
                <h1 className="text-xl font-bold text-yellow-400 uppercase">
                    {title}
                </h1>
                <div
                    className="relative"
                    onMouseEnter={() => setIsTextHovered(true)}
                    onMouseLeave={() => setIsTextHovered(false)}
                >
                    <p className="text-sm">
                        {isTextHovered
                            ? description
                            : truncateText(description, 30)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
