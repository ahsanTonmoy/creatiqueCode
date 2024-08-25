'use client'
import Link from 'next/link';
import React from 'react';
import bannar from '@/assects/image/bannar/ils_02.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';
const Bannar = () => {
    return (
        <div>
            <motion.div
                className='homeBannar pt-28' >
                <div className='inner-content pageContainer md:p-10 lg:p-20 grid gap-8 md:gap-20'>
                    <div className=' lg:text-7xl md:text-5xl text-4xl font-light text-center leading-relaxed'>
                        <span className=' heighLight'> 1 Increase </span> your web traffic <br></br> with our expert
                    </div>

                    <div className='text-center lg:text-3xl text-lg px-8 text-gray-400'>
                        Agency work with top rated talented people provide qulaity services.
                    </div>

                    <div className=''>
                        <div className=' rounded-full lg:w-2/3 w-full mx-auto bg-slate-400 font-semibold cursor-pointer text-sm md:text-lg'>
                            <form action='#' className=' relative'>
                                <input className='lg:p-8 p-6 px-6 w-full bg-[#eee] rounded-full capitalize' type='search' name='searchFild' placeholder='search here'></input>
                                <input className='lg:p-8 p-6 px-6 md:w-48 w-24 bg-[#FF733B] hover:bg-[#007BFF] text-white absolute right-0 rounded-e-full uppercase font-semibold z-0' type='submit' name='searchFild' value={'search'}></input>
                            </form>
                        </div>

                        <div className='p-4 my-4 text-center capitalize font-semibold text-xl'>
                            or <Link className='text-[#FF8C24]' href={'/'}> free consulations</Link>
                        </div>
                    </div>

                </div>

                <div className='grid justify-items-center'>
                    <Image src={bannar} alt='bannar' className='' />

                </div>
            </motion.div>
        </div>
    );
};

export default Bannar;