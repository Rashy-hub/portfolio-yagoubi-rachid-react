import NavBar from '../components/NavBar'
import LogoHome from '../components/LogoHome'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Header = () => {
    const [lastScrollY, setLastScrollY] = useState(0)
    const controls = useAnimation()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY) {
                controls.start({ y: '-100%' })
            } else {
                controls.start({ y: '0%' })
            }
            setLastScrollY(currentScrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY, controls])
    return (
        <motion.header
            initial={{ y: '0%' }}
            animate={controls}
            className="fixed top-0 w-full h-20 flex items-center justify-between shadow-lg backdrop-filter backdrop-blur-lg bg-header-bg z-50"
        >
            <LogoHome />
            <NavBar />
            <div className="hidden cursor-pointer">
                <i
                    className="fa-solid fa-bars fa-lg"
                    id="logo-home-hamburger"
                ></i>
            </div>
        </motion.header>
    )
}

export default Header
