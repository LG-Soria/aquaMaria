'use client'
import React from 'react'



function Section() {
   
    return (
        <section className='bg-[#096da7] md:py-10'>
            <div className='text-white 
            py-6 md:py-12 px-3 flex flex-col gap-5 text-center md:items-center'>
                <h3
                    className='font-bold p-2 md:text-4xl md:w-[35rem] 2xl:text-5xl 2xl:w-[45rem]  '
                >AquaMaria: Agua pura y fresca al alcance de tu mano</h3>

                <p className='text-sm font-medium md:text-base md:w-[45rem] 2xl:w-[55rem] 2xl:text-lg 
                animate__fadeIn  animate__animated  animate__slower
                '>Olvidate de las molestias de los bidones y el agua embotellada. Con AquaMaria, tienes agua pura y filtrada al instante,
                 a la temperatura que prefieras.</p>
            </div>

        </section>
    )
}

export default Section