'use client'
import Link from 'next/link';
import React from 'react';
import bannar from '@/assects/image/bannar/ils_02.jpg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import shape83 from '../../../../assects/image/shape/shape_83.svg'
import shape84 from '../../../../assects/image/shape/shape_84.svg'
import shape85 from '../../../../assects/image/shape/shape_85.svg'
const Bannar = () => {
    return (
        <div>
            <div className=' pt-28' >
                <div className='inner-content pageContainer md:p-10 lg:px-20 lg:py-16 grid gap-8 md:gap-20'>
                    <div className=' lg:text-7xl md:text-5xl text-4xl font-light text-center leading-relaxed'>
                        <span className=' heighLight'>  Increase </span> your web traffic <br></br> with our expert
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
                {/*  */}
                <div className="shapes shape-one rounded-[50%] absolute z-[-1] xsm:!hidden w-9 h-9 animate-[jumpTwo_6s_infinite_linear] left-[10%] top-[14%]
				bg-[#74E2CD]"></div>
                <Image src={shape83} alt="" className="lazy-img shapes shape-two absolute z-[-1] xsm:!hidden animate-[jumpThree_6s_infinite_linear] left-[3%] top-1/4"  />
                <div className="shapes shape-three absolute z-[-1] xsm:!hidden w-5 h-5 rotate-45 left-[19%] top-[28%] bg-[#BCD5FF]"></div>
                <Image src={shape84} alt="" className="lazy-img shapes shape-four absolute z-[-1] xsm:!hidden left-[7%] top-[41%]"  />
                <Image src={shape85} alt="" className="lazy-img shapes shape-five absolute z-[-1] xsm:!hidden animate-[rotated_25s_infinite_linear] right-[12%] top-[13%]" />
                <div className="shapes shape-six rounded-[50%] absolute z-[-1] xsm:!hidden w-3 h-3 right-[5%] top-[15%] bg-[#74E2CD]"></div>
                <div className="shapes shape-seven rounded-[50%] absolute z-[-1] xsm:!hidden w-9 h-9 animate-[jumpThree_5s_infinite_linear] right-[18%] top-[29%] bg-[#FF5C33]"></div>
                <Image src={shape84} alt="" className="lazy-img shapes shape-eight absolute z-[-1] xsm:!hidden right-[4%] top-[27%]"  />
                <Image src={shape83} alt="" className="lazy-img shapes shape-nine absolute z-[-1] xsm:!hidden animate-[jumpTwo_6s_infinite_linear] right-[8%] top-[43%]"  />
            </div>
            {/*  */}

            <div className='grid justify-items-center'>
                <Image src={bannar} alt='bannar' className='' />

            </div>
        </div>

    );
};

export default Bannar;