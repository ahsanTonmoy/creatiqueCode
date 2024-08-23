import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ils_03 from '@/assects/image/assets/ils_03.svg'
import ils_04 from '@/assects/image/assets/ils_04.svg'
const News = () => {
    return (
        <div>
            <div className='py-4 md:py20 relative'>
                <div className='inner-content '>
                    <div className=' p-1 md:p-20 grid gap-8'>
                        <div className='sec-title lg:text-6xl md:text-5xl text-4xl font-light text-center leading-snug'>
                            Ready to take plan? It’s just a matter of <span className='heighLight'> one click </span>
                        </div>

                        <div className='text-center lg:text-3xl text-lg px-8'>
                            Try it risk free — we don’t charge cancellation fees.
                        </div>

                        <div className=''>
                            <div className=' rounded-full lg:w-3/4 mx-auto bg-slate-400 font-semibold cursor-pointer'>
                                <form action='#' className=' relative capitalize'>
                                    <input className='md:p-6 p-4 px-6 w-full bg-[#fff] rounded-full capitalize' type='search' name='searchFild' placeholder=' email address'></input>
                                    <input className='md:p-6 p-4 px-6 lg:w-48 md:w-24 bg-[#FF733B] hover:bg-[#007BFF] text-white absolute right-0 rounded-e-full uppercase font-semibold z-0 cursor-pointer z-10' type='submit' name='searchFild' value={'Subscribe'}></input>
                                </form>
                            </div>

                            <div className='p-4 my-4 text-center uppercase font-medium text-lg'>
                                or <Link className='text-[#095859]' href={'/'}> free consulations</Link>
                            </div>
                        </div>

                    </div>

                    <Image src={ils_03} alt="" className="lazy-img shapes shape-four absolute  w-[20%] lg:-left-24 bottom-[19%] md:z-[10] z-[-1]"  />
				<Image src={ils_04} alt="" className="lazy-img shapes shape-five absolute w-[30%] -right-4 lg:-bottom-20 bottom-0"  />
                </div>

                {/*  */}
            </div>
        </div>
    );
};

export default News;