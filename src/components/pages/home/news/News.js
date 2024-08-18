import Link from 'next/link';
import React from 'react';

const News = () => {
    return (
        <div>
            <div className='py-4 md:py20'>
                <div className='inner-content'>
                    <div className=' p-1 md:p-20 grid gap-8'>
                        <div className=' lg:text-6xl md:text-5xl text-4xl font-light text-center leading-snug'>
                            Ready to take plan? It’s just a matter of one click
                        </div>

                        <div className='text-center lg:text-3xl text-lg px-8'>
                            Try it risk free — we don’t charge cancellation fees.
                        </div>

                        <div className=''>
                            <div className=' rounded-full lg:w-3/4 mx-auto bg-slate-400 font-semibold cursor-pointer'>
                                <form action='#' className=' relative capitalize'>
                                    <input className='md:p-6 p-4 px-6 w-full bg-[#fff] rounded-full capitalize' type='search' name='searchFild' placeholder=' email address'></input>
                                    <input className='md:p-6 p-4 px-6 lg:w-48 md:w-24 fillBtn text-white absolute right-0 rounded-e-full uppercase font-semibold z-0 cursor-pointer' type='submit' name='searchFild' value={'Subscribe'}></input>
                                </form>
                            </div>

                            <div className='p-4 my-4 text-center uppercase font-medium text-lg'>
                                or <Link className='text-[#095859]' href={'/'}> free consulations</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;