import { ReactNode } from 'react'

interface PropType {
    children: ReactNode
}

const Main = (props: PropType) => {
    return (
        <main className="mt-20 bg-slate-900 overflow-x-hidden scroll-smooth">
            {props.children}
        </main>
    )
}

export default Main
