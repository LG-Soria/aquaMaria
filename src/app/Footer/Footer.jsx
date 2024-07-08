import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {

    return (
        <section className='bg-dark text-white   py-8 md:pb-8 md:pt-0
        flex flex-col justify-start items-center'>

            <div className='flex flex-row gap-2  
            w-full  bg-white text-primario
            items-center  py-5 px-2 my-5 md:mt-0 md:mb-5 md:justify-center '>
                <Image width={160} height={120} src="/img/logo.png" alt="Logo de AquaMaria" />

                <h1 className='text-2xl uppercase font-black border-b-primario border-b-2'>
                     Aqu<span className='text-acento'>aMa</span>ria</h1>
            </div>

            <div className='flex flex-col md:flex-row gap-3 lg:justify-around lg:w-[100%]
            animate__fadeIn animate__animated animate__slower animate__delay-2s'>
                <div>
                    <h4 className='font-black text-xl mb-2'>Oficina</h4>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex flex-col gap-1'><span>Cerrito 2326</span> <span>Ramos Mejia</span></li>
                        <li className='flex flex-col gap-1'><span>Tel: 1133551515</span> <span>Email: aquamaria@aqua.com</span></li>
                    </ul>

                </div>
                <div>
                    <h4 className='font-black text-xl mb-2'>Horarios de atencion</h4>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex flex-col gap-1'><span>Lunes a Viernes</span> <span>9:00 am a 5:00 pm</span></li>
                        <li className='flex flex-col gap-1'><span>Tel: 1133551515</span> <span>Email: aquamaria@aqua.com</span></li>
                    </ul>

                </div>
                <div>
                    <h4 className='font-black text-xl mb-2'>Redes Sociales</h4>
                    <ul className='flex flex-row justify-start relative right-2'>
                        <li><MdEmail className='w-12 h-8' /></li>
                        <li><FaFacebook className='w-12 h-8' /></li>
                        <li><FaInstagram  className='w-12 h-8'/></li>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer