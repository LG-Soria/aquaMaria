'use client'
import React, { useRef } from 'react';
import { useInView, useScroll, useTransform, motion } from 'framer-motion';
import { FaCheckCircle } from "react-icons/fa";
import { transform } from 'next/dist/build/swc';



const titles = [{
  id: 1,
  title: "Agua pura y filtrada "
}, {
  id: 2,
  title: "Sin Bidones "
}, {
  id: 3,
  title: "Comodidad y practicidad "
}, {
  id: 4,
  title: "Facil Instalacion"
},
]
const Item = ({ title, refItem }) => (
  <motion.li
    ref={refItem}
    variant={itemVariants}
    initial={'hidden'}
    animate={'visible'}
    whileInView="visible"
    transition={{ duration: 0.5 }} // Consistent animation duration
    className='flex flex-col
      p-3 bg-fondo  gap-2  justify-center items-center
      text-center uppercase text-dark font-bold
      h-32 w-36 md:w-44 md:h-36'>
    <FaCheckCircle className='w-16 h-24' /> {title}
  </motion.li>
);


function Items() {
  const itemVariants = {
    visible: { opacity: 1, scale: 1.1, x: 0 },
    hidden: { opacity: 0, scale: .8, x: -200 },
  }
  const [refItem, isInView] = useInView()

  return (

    <ul className='flex flex-col justify-center items-center gap-3 md:flex-row md:gap-8 lg:gap-12 py-5 md:py-10 md:px-5 '>
      {titles.map((title) => (
        <motion.li
          variant={itemVariants}
          initial={'hidden'}
          animate={'visible'}
          whileInView="visible"
          transition={{ duration: 0.5 }} // Consistent animation duration
          className='flex flex-col
         p-3 bg-fondo  gap-2  justify-center items-center
         text-center uppercase text-dark font-bold
         h-32 w-36 md:w-44 md:h-36'>
          <FaCheckCircle className='w-16 h-24' /> {title} 1
        </motion.li>
      ))}

    </ul>

  );
}

export default Items;