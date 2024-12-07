import React from 'react'
import { motion } from 'framer-motion'

interface PropTypes {
    description: string
    title: string
    Icon: React.ElementType
}

const ServicesCard: React.FC<PropTypes> = ({ title, description, Icon }) => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center min-h-[360px] w-[320px] text-center bg-gradient-to-r from-[#AAF1FFCC] via-[#B4FFC3AA] to-[#B4FFC3AA] rounded-2xl border-2 border-whitesmoke shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{
                scale: 1.05,
                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
            }}
        >
            <motion.div
                className="h-20 w-20 flex justify-center items-center text-3xl text-gray-800"
                whileHover={{ rotate: 15 }}
                transition={{ type: 'spring', stiffness: 200 }}
            >
                <Icon />
            </motion.div>
            <div className="flex flex-col items-center gap-2">
                <motion.h3
                    className="text-2xl font-medium text-lime-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-lg font-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {description}
                </motion.p>
                <motion.a
                    href="#"
                    className="inline-flex px-4 py-2 mt-2 text-white font-medium border-2 border-black rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 hover:bg-transparent hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    Read More
                </motion.a>
            </div>
        </motion.div>
    )
}

export default ServicesCard
