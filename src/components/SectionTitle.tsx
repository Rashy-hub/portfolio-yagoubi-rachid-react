import { motion } from 'framer-motion'

interface PropType {
    title: string
}

const SectionTitle = ({ title }: PropType) => {
    return (
        <div className="w-full h-full  row-start-2 col-span-full flex justify-center items-center mt-12 mb-12">
            <motion.h2
                className="w-fit h-fit flex relative font-title mx-auto text-neutral-300 text-5xl md:text-5xl lg:text-6xl xl:text-9xl font-bold underline-offset-4"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.6 }} // Trigger when 50% of the element is visible
            >
                {title === 'home' ? '' : title}
                <motion.span
                    className="w-[100%] absolute left-0 bottom-[-10px] h-[5px] rounded-[30%] bg-[#9931ea] bg-gradient-to-b from-[#9931ea] via-[#f797ff] to-[#ffffff]"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{
                        delay: 0.5,
                        duration: 0.6,
                        ease: 'easeInOut',
                    }}
                    viewport={{ once: true, amount: 0.6 }}
                />
            </motion.h2>
        </div>
    )
}

export default SectionTitle
