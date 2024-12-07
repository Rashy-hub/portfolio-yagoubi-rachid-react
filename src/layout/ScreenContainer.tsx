import React from 'react'
/*    text-align: center;
    justify-content: center;
    align-items: center;
    flex-basis: 30%;
    height: 40%; 
    
        grid-area: sk;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: stretch;
    align-self: stretch;
    align-items: center;
    gap: 2rem;*/
function SkillsContainer() {
    return (
        <div className="w-full  h-full col-start-2 row-start-2 col-span-10 row-span-10 place-self-center  flex gap-8 items-center self-stretch justify-stretch flex-wrap">
            <div className="flex flex-col justify-center items-center basis-[30%] h-[40%] text-center   border-2 border-[rgb(243,243,255)] rounded-[30px] bg-gradient-to-r from-[rgba(170,241,255,0.39)] to-[rgba(180,255,195,0.237)] shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]">
                <img
                    src="/typescript-svgrepo-com.svg"
                    alt="TypeScriptImage"
                    width="200px"
                    height="200px"
                />
                <p className="mt-2 font-title text-2xl font-bold">TypeScript</p>
            </div>

            <div className="flex flex-col justify-center items-center basis-[30%] h-[40%] text-center   border-2 border-[rgb(243,243,255)] rounded-[30px] bg-gradient-to-r from-[rgba(170,241,255,0.39)] to-[rgba(180,255,195,0.237)] shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]">
                <img
                    src="/react-svgrepo-com.svg"
                    alt="ReactImage"
                    width="200px"
                    height="200px"
                />
                <p className="mt-2 font-title text-2xl font-bold">React</p>
            </div>

            <div className="flex flex-col justify-center items-center basis-[30%] h-[40%] text-center   border-2 border-[rgb(243,243,255)] rounded-[30px] bg-gradient-to-r from-[rgba(170,241,255,0.39)] to-[rgba(180,255,195,0.237)] shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]">
                <img
                    src="/node-svgrepo-com.svg"
                    alt="NodeImage"
                    width="200px"
                    height="200px"
                />
                <p className="mt-2 font-title text-2xl font-bold">Node</p>
            </div>

            <div className="flex flex-col justify-center items-center basis-[30%] h-[40%] text-center   border-2 border-[rgb(243,243,255)] rounded-[30px] bg-gradient-to-r from-[rgba(170,241,255,0.39)] to-[rgba(180,255,195,0.237)] shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]">
                <img
                    src="/expressjs-icon.svg"
                    alt="ExpressImage"
                    width="200px"
                    height="200px"
                />
                <p className="mt-2 font-title text-2xl font-bold">Express</p>
            </div>

            <div className="flex flex-col justify-center items-center basis-[30%] h-[40%] text-center   border-2 border-[rgb(243,243,255)] rounded-[30px] bg-gradient-to-r from-[rgba(170,241,255,0.39)] to-[rgba(180,255,195,0.237)] shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]">
                <img
                    src="/next-js-svgrepo-com.svg"
                    alt="NextImage"
                    width="200px"
                    height="200px"
                />
                <p className="mt-2 font-title text-2xl font-bold">Next</p>
            </div>

            <div className="flex flex-col justify-center items-center basis-[30%] h-[40%] text-center   border-2 border-[rgb(243,243,255)] rounded-[30px] bg-gradient-to-r from-[rgba(170,241,255,0.39)] to-[rgba(180,255,195,0.237)] shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]">
                <img
                    src="/tailwind-svgrepo-com.svg"
                    alt="TailWindImage"
                    width="200px"
                    height="200px"
                />
                <p className="mt-2 font-title text-2xl font-bold">TailWind</p>
            </div>
        </div>
    )
}

export default SkillsContainer
