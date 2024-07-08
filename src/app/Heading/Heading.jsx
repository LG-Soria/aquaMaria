import React from 'react'
import Image from 'next/image'
import { useScroll } from "framer-motion"


function Heading() {
    
    return (
        <section className='bg-dark text-white
        py-6 
        md:grid md:grid-cols-12 md:grid-rows-12 md:gap-3 md:pt-6 md:pb-24  
        lg:gap-8 '>

            <div className='bg-white h-72 px-2  m-4 overflow-hidden 
            md:col-span-5 md:row-span-10 md:col-start-2 md:row-start-3 md:m-0
            md:w-[20rem] md:h-[25rem] 
            lg:col-span-6 lg:col-start-2 lg:w-[25rem] lg:h-[28rem]
            2xl:col-start-3
            border-t-[20px] border-b-[20px] border-t-white border-b-blue-600 '>
                <Image width={1380}
                    height={1520}
                    objectFit='cover'
                    quality={100} src="/img/dispenser1.jpg" alt="Imagen de dispensers"
                    className='md:relative md:top-3 lg:h-[95%] animate__fadeInLeft animate__animated
                    ' />
            </div>

            <div className=' flex-col flex  gap-8 
            md:w-[18rem]  md:relative md:top-8
            md:col-span-4 md:row-span-9 md:col-start-8 md:row-start-3 md:gap-[2rem] 
             lg:col-start-7 2xl:top-1 2xl:gap-[3rem] animate__fadeInRight animate__slow animate__animated'>
                {/**logo */}
                <div className='flex flex-row gap-2 w-11/12 mx-auto items-center justify-start
                md:relative md:mx-0 '>
                    <Image width={1060} height={1200} src="/img/logo.png" alt="Logo de AquaMaria"
                        className='w-[60px] h-[3rem] md:w-[5rem] md:h-[4rem]' />

                    <h1 className='text-2xl font-medium md:text-xl md:font-bold'>
                        Filtros AquaMaria</h1>
                </div>

                <div className=' mx-auto p-2 w-11/12
                 md:p-0 md:mx-0  md:relative md:top-8 2xl:w-[25rem]'>
                    <h2 className='font-bold text-4xl 2xl:text-6xl  md:text-5xl md:ml-2'>Agua pura,
                      <br></br>  vida mas saludable
                    </h2>
                </div>

                <div className='mx-auto w-11/12 px-1 pb-2 md:top-12 md:px-0 md:relative'>
                    <button className=' w-36 h-10 bg-terciario text-sm font-bold  uppercase
                    md:w-32 md:h-8 md:text-xs animate__animated animate__heartBeat animate__delay-3s animate__slower animate__infinite'>
                        leer mas
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Heading