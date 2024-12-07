import SectionTitle from '../components/SectionTitle'
import { ReactNode } from 'react'

interface PropType {
    children: ReactNode
    name: string
}

const Section = ({ children, name }: PropType) => {
    return (
        <section
            className="h-fit w-screen flex flex-col items-center justify-between  md:grid md:grid-cols-12 md:grid-rows-[repeat(auto-fit,_minmax(0,_1fr))]  lg:h-screen gap-8 md:gap-4 pt-4 place-content-center"
            id={name}
        >
            <SectionTitle title={name} />
            {children}
        </section>
    )
}

export default Section
