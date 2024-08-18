import React from 'react';
import avater from '../../../../assects/image/img_01.jpg';
import Image from 'next/image';
const Info = () => {
    return (
        <div>
            <div className='py-20'>
                <div className='inner-content capitalize'>
                    {/* info */}
                    <div className='flex flex-col lg:flex-row-reverse gap-6'>
                        {/*  */}
                        <div className='lg:w-1/2 grid gap-4 py-8'>
                            {/*  */}
                            <div className=' uppercase text-slate-300 font-bold text-xl'>about us</div>
                            {/*  */}
                            <div className='text-6xl'>We’ve been helping customer globally.</div>
                            {/*  */}
                            <div className=''>
                                <div className=' text-xl font-semibold'>
                                    Who we are?
                                </div>
                                <div className=' text-base'>
                                    Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook. As operations scaled, they grew frustrated by how difficult it was.
                                </div>
                            </div>
                            {/*  */}
                            <div className=''></div>
                            {/*  */}
                            <div className=''></div>
                        </div>
                        {/*  */}
                        <div className='p-4 w-full lg:w-1/2'>
                            <div className=''>
                                <Image src={avater} alt=''></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;