import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi' // Importing Feather icons

interface HamburgerMenuProps {
    links: { label: string; href: string }[] // Array of links with labels and hrefs
    menuClassName?: string // Optional custom classes for the menu
    linkClassName?: string // Optional custom classes for the links
    iconClassName?: string // Optional custom classes for the hamburger icon
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
    links,
    menuClassName = '',
    linkClassName = '',
    iconClassName = '',
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative block md:hidden">
            {/* Hamburger Icon */}
            <button
                className={`focus:outline-none ${iconClassName}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <FiX className="w-6 h-6 text-gray-800" />
                ) : (
                    <FiMenu className="w-6 h-6 text-gray-800" />
                )}
            </button>

            {/* Menu Items */}
            <ul
                className={`absolute right-0 top-10 bg-white shadow-lg rounded-md ${
                    isOpen ? 'block' : 'hidden'
                } ${menuClassName}`}
            >
                {links.map((link) => (
                    <li key={link.href} className="border-b last:border-b-0">
                        <a
                            href={link.href}
                            className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors ${linkClassName}`}
                            onClick={() => setIsOpen(false)} // Close the menu on link click
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HamburgerMenu
