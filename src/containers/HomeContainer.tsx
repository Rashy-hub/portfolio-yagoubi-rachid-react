import React from 'react'

interface HomeContainerProps {
    children: React.ReactNode
}
const HomeContainer: React.FC<HomeContainerProps> = ({ children }) => {
    return (
        <div className="w-full h-full col-start-1 row-start-3 col-span-full row-span-9 place-self-center flex flex-col justify-start items-center gap-2">
            {children}
        </div>
    )
}

export default HomeContainer
