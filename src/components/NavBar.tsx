import HamburgerMenu from './HamburgerMenu'

const NavLinks = ['Home', 'Skills', 'Services', 'Projects', 'Contact']
const HamburgerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

const NavBarV2 = () => (
    <nav className="w-fit font-title mr-4 ">
        <ul className="flex flex-row space-x-8 hidden md:block">
            {NavLinks.map((item) => (
                <li key={item} className="navbar__item relative">
                    <a
                        href={`#${item.toLowerCase()}`}
                        className="text-white relative hover:text-yellow-300 transition-colors duration-300"
                    >
                        {item}
                        {/* The animated underline using the ::after pseudo-element */}
                    </a>
                </li>
            ))}
        </ul>
        <HamburgerMenu
            links={HamburgerLinks}
            menuClassName="w-48"
            linkClassName="text-lg"
            iconClassName="text-gray-100"
        />
    </nav>
)

export default NavBarV2
