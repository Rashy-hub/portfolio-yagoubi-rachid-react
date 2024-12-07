import React from 'react'
import { motion } from 'framer-motion'

interface PropTypes {
    path: string
    title: string
}

const SkillCard: React.FC<PropTypes> = (props) => {
    return (
        <motion.div
            className="p-8 flex flex-col justify-center items-center text-center border-2 border-[rgb(243,243,255)] rounded-[30px] bg-gradient-to-r from-[rgba(170,241,255,0.39)] to-[rgba(180,255,195,0.237)] shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]"
            initial={{ opacity: 0, y: -100, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
                type: 'spring',
                stiffness: 120,
                damping: 12,
                duration: 0.5,
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img
                src={props.path}
                alt="skill image"
                width="150px"
                height="150px"
                className="hover:cursor-pointer"
            />
            <p className="mt-2 font-title text-2xl font-bold ">{props.title}</p>
        </motion.div>
    )
}

export default SkillCard
