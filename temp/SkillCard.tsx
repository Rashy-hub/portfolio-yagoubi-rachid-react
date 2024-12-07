import React from 'react'

interface PropTypes {
    path: string
    title: string
}
const SkillCard: React.FC<PropTypes> = (props) => {
    return (
        <div className="flex flex-col justify-center items-center basis-[30%] h-[40%] text-center   border-2 border-[rgb(243,243,255)] rounded-[30px] bg-gradient-to-r from-[rgba(170,241,255,0.39)] to-[rgba(180,255,195,0.237)] shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]">
            <img
                src={props.path}
                alt="skill image"
                width="150px"
                height="150px"
            />
            <p className="mt-2 font-title text-2xl font-bold">{props.title}</p>
        </div>
    )
}

export default SkillCard
