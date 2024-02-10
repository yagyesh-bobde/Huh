import React from 'react'
import { Link } from 'react-router-dom'



const Hero = () => {
    return (
        <section id="hero" className='min-h-[75vh] md:min-h-[89vh] flex flex-col-reverse gap-10 md:gap-0 md:flex-row items-center'>
            <div className="content flex flex-col gap-10 md:w-1/2">
                <div className="main_content texxt-[40px] md:text-[75px] font-semibold">
                    Learning faster. think bigger . speak fluent
                </div>
                <div className='flex flex-col gap-3 md:items-center md:flex-row md:justify-between'>
                    <Link
                    to="/login"
                    className='bg-primary py-4 rounded-full text-white font-semibold flex items-center justify-center md:w-1/2 btn-hover'
                    >
                        Start Learning
                    </Link>
                    <Link
                    to="/login"
                    className='bg-white text-black border-2 border-primary py-4 rounded-full font-semibold flex items-center justify-center md:w-1/2 btn-hover'
                    >
                        Download App
                    </Link>
                </div>
            </div>
            <div className="mic flex items-center justify-end w-1/2">
                <img src="/images/hero/hero-mic.svg" alt="" />
            </div>
        </section>
    )
}

export default Hero
