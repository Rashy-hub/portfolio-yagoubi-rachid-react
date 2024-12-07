import React from 'react'
import { motion } from 'framer-motion'
import { FaMicrochip, FaCode, FaSearchengin } from 'react-icons/fa'
import ServicesCard from '../components/ServicesCard'

const ServicesContainer: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <motion.div
            className="w-full h-full col-start-2 row-start-3 col-span-10 row-span-6 place-self-center flex gap-8 items-center justify-center flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the container is visible
            variants={containerVariants}
        >
            <motion.div variants={cardVariants}>
                <ServicesCard
                    title="Embedded Solutions Design"
                    description="Specializing in embedded systems and IoT solutions, I design efficient hardware and software integrations for modern technologies."
                    Icon={FaMicrochip}
                />
            </motion.div>
            <motion.div variants={cardVariants}>
                <ServicesCard
                    title="Web Development"
                    description="As a full-stack JavaScript developer, I build responsive and high-performing web applications using React, Node.js, and TypeScript."
                    Icon={FaCode}
                />
            </motion.div>
            <motion.div variants={cardVariants}>
                <ServicesCard
                    title="SEO Optimization"
                    description="I help improve your site's rankings and visibility through effective SEO strategies and web optimization techniques."
                    Icon={FaSearchengin}
                />
            </motion.div>
        </motion.div>
    )
}

export default ServicesContainer
