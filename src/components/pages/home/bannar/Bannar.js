import Link from 'next/link';
import React from 'react';
import bannar from '@/assects/image/bannar/ils_02.jpg'
import Image from 'next/image';
const Bannar = () => {
    return (
        <div>
            <div className='homeBannar pt-28' >
                <div className='inner-content pageContainer p-1 md:p-20 grid gap-8'>
                    <div className=' lg:text-6xl md:text-5xl text-4xl font-light text-center leading-snug'>
                        Increase your web traffic with our expert
                    </div>

                    <div className='text-center lg:text-3xl text-lg px-8 text-gray-400'>
                        Agency work with top rated talented people provide qulaity services.
                    </div>

                    <div className=''>
                        <div className=' rounded-full lg:w-3/4 mx-auto bg-slate-400 font-semibold cursor-pointer'>
                            <form action='#' className=' relative'>
                                <input className='md:p-6 p-4 px-6 w-full bg-[#eee] rounded-full capitalize' type='search' name='searchFild' placeholder='search here'></input>
                                <input className='md:p-6 p-4 px-6 lg:w-48 md:w-24 fillBtn text-white absolute right-0 rounded-e-full uppercase font-semibold z-0' type='submit' name='searchFild' value={'search'}></input>
                            </form>
                        </div>

                        <div className='p-4 my-4 text-center uppercase font-extrabold text-xl'>
                            or <Link className='text-[#095859]' href={'/'}> free consulations</Link>
                        </div>
                    </div>

                </div>

                <div className='grid justify-items-center'>
                    <Image src={bannar} alt='bannar' className='' />

                </div>
            </div>
        </div>
    );
};

export default Bannar;