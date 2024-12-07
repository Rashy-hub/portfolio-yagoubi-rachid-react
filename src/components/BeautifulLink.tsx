import { motion } from 'framer-motion'
import React from 'react'

interface BeautifulLinkProps {
    href: string // The target URL for the link
    text: string // The text displayed for the link
    className?: string // Additional CSS classes for styling
    gridPosition?: string // Tailwind grid positioning classes (e.g., 'col-start-1 row-start-2')
}

const BeautifulLink: React.FC<BeautifulLinkProps> = ({
    href,
    text,
    className = '',
    gridPosition = '',
}) => {
    return (
        <motion.div
            className={`relative w-full h-full ${gridPosition} flex justify-center items-center`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <a
                href={href}
                className={`inline-block px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {text}
            </a>
        </motion.div>
    )
}

export default BeautifulLink
