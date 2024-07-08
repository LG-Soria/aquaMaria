'use client'
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'

function About() {
    const aboutInfo = [{
        image: "/img/dispenser2.jpg",
        alt: "imagen y diseño",
        text: "Comodidad y practicidad",
        id: 1,
    }, {
        image: "/img/dispenser6.jpg",
        alt: "imagen y diseño",
        text: "Diseño moderno y elegante",
        id: 2,
    }, {
        image: "/img/dispenser3.jpg",
        alt: "filtro",
        text: "Filtros avalados ",
        id: 3,
    },]
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })
    const isInView = useInView(ref, {
        amount: 'all',
    });
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);



    return (
        <div
            className='bg-dark py-5 text-white 
        md:flex md:flex-row md:gap-5 
        lg:justify-center lg:gap-14
        2xl:py-20 '>

            <div className='py-5 px-3  flex flex-col gap-4
             md:w-[16rem] md:relative md:left-6 lg:left-0 
             2xl:w-[25rem] 
             animate__fadeInLeft animate__animated 
             '>
                <h3 className='text-3xl font-bold 2xl:text-5xl '>Nosotros</h3>
                <p className='text-sm 2xl:text-lg'>En AquaMaria, comprendemos la importancia de acceder a agua pura y fresca en todo momento. Por eso, ofrecemos dispensers de agua con modalidad frío calor incorporados y filtros purificadores que te permiten disfrutar de agua de calidad en la comodidad de tu hogar u oficina.</p>
            </div>


            <motion.ul
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
                className='flex flex-col gap-8 h-full  py-4 
            md:flex-row  md:w-[30rem] md:gap-0 md:overflow-hidden 
            lg:overflow-visible lg:w-[35rem]
            2xl:w-[45rem] 2xl:gap-16 '>

                <li className='flex  flex-col justify-center items-center md:justify-end '>
                    <div className='w-44 md:w-32 h-56 md:h-48 bg-white overflow-hidden 
                                border-t-[20px] border-b-[20px] border-t-white border-b-blue-600 
                                '>
                        <Image src={aboutInfo[0].image}
                            width={500} height={400} alt={aboutInfo[0].alt}
                            className='w-[20rem] relative bottom-11 md:relative md:bottom-6' />

                    </div>
                    <div className='font-semibold text-center text-xl w-40  md:text-lg  p-3 '>
                        {aboutInfo[0].text}
                    </div>
                </li>

                <li className='flex   flex-col justify-center items-center md:justify-end lg:w-[13rem] '>
                    <div className='w-44  h-56  md:h-52  lg:w-[10rem]  bg-white overflow-hidden  md:w-32  border-t-[20px] border-b-[20px] border-t-white border-b-blue-600'>
                        <Image src={aboutInfo[1].image}
                            width={650} height={1100} alt={aboutInfo[1].alt}
                            className='  w-[10rem] h-[14.5rem] ' />

                    </div>
                    <div className='font-semibold text-center text-xl md:text-[0.9rem]  w-40  p-3 '>
                        {aboutInfo[1].text}
                    </div>
                </li>
                <li className='flex flex-col justify-center items-center md:justify-end lg:ml-[1rem] lg:w-[13rem] '>
                    <div className='w-44 h-56 md:h-[15rem] lg:w-[11rem]  bg-white overflow-hidden  md:w-32 border-t-[20px] border-b-[20px] border-t-white border-b-blue-600 '>
                        <Image src={aboutInfo[2].image}

                            width={640} height={427} alt={aboutInfo[2].alt} className='
                              w-[55rem]  h-[14.5rem] md:relative md:bottom-8  '/>

                    </div>
                    <div className='font-semibold text-center text-xl md:text-lg w-40  p-3 '>
                        {aboutInfo[2].text}
                    </div>
                </li>
            </motion.ul>

        </div>
    )
}

export default About