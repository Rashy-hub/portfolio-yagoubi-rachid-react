import { motion } from 'framer-motion'

const Avatar = () => {
    return (
        <div className="relative w-[400px] h-[400px] ">
            <motion.div
                className=" w-[400px] h-[400px] absolute right-0 "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <img
                    className="w-full h-full object-cover  rounded-full"
                    src="/avatar-transparent.png"
                    alt="Avatar"
                />
            </motion.div>
        </div>
    )
}

export default Avatar
