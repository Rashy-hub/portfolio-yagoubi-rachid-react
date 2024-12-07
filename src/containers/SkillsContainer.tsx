import React from 'react'
import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'

function SkillsContainer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Les enfants s'affichent progressivement
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.05, transition: { duration: 0.3 } },
    }

    return (
        <motion.div
            className="md:col-start-2 md:row-start-3 md:col-span-10 md:row-span-6 col-start-5 row-start-2 col-span-6 row-span-6 place-self-center flex gap-8 items-center  flex-wrap "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                variants={cardVariants}
                whileHover="hover "
                className="xl:basis-[30%]  lg:basis-[30%] md:basis-[50%] basis[100%] h-fit mx-auto "
            >
                <SkillCard
                    path="/typescript-svgrepo-com.svg"
                    title="Typescript"
                />
            </motion.div>
            <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="xl:basis-[30%]  lg:basis-[30%] md:basis-[50%] basis[100%] h-fit mx-auto"
            >
                <SkillCard path="/react-svgrepo-com.svg" title="React" />
            </motion.div>
            <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="xl:basis-[30%]  lg:basis-[30%] md:basis-[50%] basis[100%] h-fit mx-auto"
            >
                <SkillCard path="/node-svgrepo-com.svg" title="Node" />
            </motion.div>
            <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="xl:basis-[30%]  lg:basis-[30%] md:basis-[50%] basis[100%] h-fit mx-auto"
            >
                <SkillCard path="/expressjs-icon.svg" title="Express" />
            </motion.div>
            <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="xl:basis-[30%]  lg:basis-[30%] md:basis-[50%] basis[100%] h-fit mx-auto "
            >
                <SkillCard path="/next-js-svgrepo-com.svg" title="Next" />
            </motion.div>
            <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="xl:basis-[30%]  lg:basis-[30%] md:basis-[50%] basis[100%] h-fit mx-auto "
            >
                <SkillCard path="/tailwind-svgrepo-com.svg" title="TailWind" />
            </motion.div>
        </motion.div>
    )
}

export default SkillsContainer
