import React from 'react'
import SkillCard from '../components/SkillCard'

function SkillsContainer() {
    return (
        <div className="w-full  h-full col-start-2 row-start-2 col-span-10 row-span-10 place-self-center  flex gap-8 items-center self-stretch justify-stretch flex-wrap mt-8">
            <SkillCard path="/typescript-svgrepo-com.svg" title="Typescript" />
            <SkillCard path="/react-svgrepo-com.svg" title="React" />
            <SkillCard path="/node-svgrepo-com.svg" title="Node" />
            <SkillCard path="/expressjs-icon.svg" title="Express" />
            <SkillCard path="/next-js-svgrepo-com.svg" title="Next" />
            <SkillCard path="/tailwind-svgrepo-com.svg" title="TailWind" />
        </div>
    )
}

export default SkillsContainer
