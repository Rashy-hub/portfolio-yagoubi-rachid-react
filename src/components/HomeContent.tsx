import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HomeContent = () => {
    const [text, setText] = useState<string>('')
    const [index, setIndex] = useState<number>(0)
    const [isComplete, setIsComplete] = useState<boolean>(false)

    const jobs: string[] = [
        'a JavaScript FullStack dev',
        'an Electronic Engineer',
        'a Content Writer',
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setText((prevText) => {
                const currentJob = jobs[index]
                if (prevText.length < currentJob.length) {
                    return currentJob.slice(0, prevText.length + 1)
                }
                return prevText
            })
        }, 140)

        if (text === jobs[index]) {
            setIsComplete(true)
        }

        return () => clearInterval(interval)
    }, [text, index])

    useEffect(() => {
        if (isComplete) {
            const timeout = setTimeout(() => {
                setIsComplete(false)
                setIndex((prevIndex) => (prevIndex + 1) % jobs.length)
                setText('')
            }, 1000)
            return () => clearTimeout(timeout)
        }
    }, [isComplete, index])

    return (
        <div className="relative md:w-full md:h-full md:col-start-7 md:row-start-4 md:col-span-6 md:row-span-4">
            <motion.div
                className="  font-title"
                initial={{ opacity: 0, y: 20 }} // Start animation with fade and slight downward offset
                animate={{ opacity: 1, y: 0 }} // End animation fully visible and at original position
                transition={{ duration: 1, ease: 'easeOut' }} // Smooth ease-out animation
            >
                <motion.h1
                    className="text-4xl font-bold text-neutral-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Hello there! It's &nbsp;
                    <span className="text-blue-500" id="myName">
                        Rachid Yagoubi
                    </span>
                    <br />
                    <motion.div
                        className="min-w-[280px] text-2xl mt-4 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        I'm&nbsp;
                        <span className="w-fit h-fit relative inline overflow-hidden whitespace-nowrap text-emerald-900 text-2xl">
                            <span className="absolute left-0 top-0 text-amber-300">
                                {text}
                                <motion.span
                                    className="absolute left-0 top-0 animate-cursor text-amber-300"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.8,
                                    }}
                                ></motion.span>
                            </span>
                        </span>
                    </motion.div>
                </motion.h1>

                <motion.p
                    className="home__content--desc mt-6 text-2xl text-lime-200 max-w-[60%]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    Having started my career as an{' '}
                    <strong>electronics engineer</strong>, I have designed
                    innovative solutions for embedded systems and
                    microcontrollers. My growing interest in software
                    development led me to retrain as a{' '}
                    <strong>full-stack web developer</strong>, specializing in
                    JavaScript, React, and Node.js.
                </motion.p>
            </motion.div>
        </div>
    )
}

export default HomeContent
