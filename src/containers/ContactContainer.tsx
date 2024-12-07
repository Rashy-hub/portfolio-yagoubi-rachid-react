import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

const ContactContainer: React.FC = () => {
    const formVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <motion.div
            className="w-full h-full col-start-2 row-start-3 col-span-10 row-span-6 place-self-center flex gap-8 items-center justify-center flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the container is visible
            variants={formVariants}
        >
            <ContactForm />
        </motion.div>
    )
}

export default ContactContainer
