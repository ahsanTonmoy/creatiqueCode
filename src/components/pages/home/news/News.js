import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ils_03 from '@/assects/image/assets/ils_03.svg'
import ils_04 from '@/assects/image/assets/ils_04.svg'
const News = () => {
    return (
        <div>
            <div className='py-4 md:py20'>
                <div className='inner-content '>
                    <div className=' p-1 lg:p-6 grid gap-8'>

                        <div className="xl:w-7/12 lg:w-11/12 md:w-9/12 w-full xsm:px-[12px] max-w-full m-auto text-center">
							<div className="title-style-one md:text-[45px] text-3xl" >
								<h2 className="">Ready to take plan? It’s just a matter of <span className=" heighLight">one click</span></h2>
							</div> 
							
						</div>

                        <div className='text-center  lg:text-3xl text-lg px-8'>
                            Try it risk free — we don’t charge cancellation fees.
                        </div>

                        <div className=''>
                            <div className=' rounded-full px-4 xl:w-3/4 md:w-3/4 mx-auto font-semibold cursor-pointer'>
                                <form action='#' className=' relative capitalize'>
                                    <input className='md:p-6 p-4 px-2 w-full bg-[#fff] rounded-full capitalize' type='search' name='searchFild' placeholder=' email address'></input>
                                    <input className='md:p-6 p-4 md:px-8 px-2 bg-[#FF733B] hover:bg-[#007BFF] text-white absolute right-0 rounded-e-full uppercase font-semibold cursor-pointer z-10' type='submit' name='searchFild' value={'Subscribe'}></input>
                                </form>
                            </div>

                            <div className='p-4 my-4 text-center text-zinc-500 font-medium text-lg'>
                            Already a member? 
                                or <Link className='border-b text-black' href={'/'}> Sign in.</Link>
                            </div>
                        </div>

                    </div>

                    <Image src={ils_03} alt="" className="lazy-img shapes shape-four absolute  w-[16%] left-2 md:bottom-[19%] bottom-[7%] z-1" />
                    <Image src={ils_04} alt="" className="lazy-img shapes shape-five absolute w-[30%] right-4 bottom-0" />
                </div>

                {/*  */}
            </div>
        </div>
    );
};

export default News;