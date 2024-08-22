import React from 'react';
import avater from '../../../../assects/image/img_01.jpg';
import Image from 'next/image';
import shape09 from '@/assects/image/shape/shape_09.svg'
import shape10 from '@/assects/image/shape/shape_10.svg'
import shape11 from '@/assects/image/shape/shape_11.svg'
import shape12 from '@/assects/image/shape/shape_12.svg'
import shape13 from '@/assects/image/shape/shape_12.svg'
import icon6 from '@/assects/image/icon/icon_06.svg'
import { IoMdStar } from "react-icons/io";
import { MdStarBorder } from 'react-icons/md';
const Info = () => {
    return (
        <div>
            <div className='py-20'>
                <div className='inner-content capitalize'>
                    {/* info */}
                    <div className='grid md:grid-cols-2 gap-6 md:gap-16'>
                        {/*  */}
                        <div className=' grid gap-8 my-8 place-content-center p-4'>
                            {/*  */}
                            <div className=' uppercase text-slate-300 font-bold text-xl'>about us</div>
                            {/*  */}
                            <div className='text-4xl leading-relaxed font-bold md:w-1/2'>We’ve been helping customer globally.</div>
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
                            <div className=''>
                                <p className="text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] mb-[10px] pt-[30px] lg:pt-5 md:pt-5 sm:pt-5 xsm:pt-5 "><span className="font-medium text-black ">Avg 4.8 rating</span> makes us world best agency.</p>

                                <div className='py-4 flex gap-1 text-xl text-yellow-500'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <MdStarBorder />
                                </div>
                            </div>

                        </div>
                        {/*  */}
                        <div className='p-4 w-full md:order-first'>
                            <div>
                                {/*  */}
                                <div className="img-meta inline-block relative !pl-[1rem] xl:!pl-[3rem] lg:!pl-[3rem] pb-[50px] sm:mt-[90px] xsm:mt-[90px] ">
                                    <Image src={avater} alt="" className="lazy-img" style="" />
                                    <Image src={shape09} alt="" className="lazy-img shapes shape-one absolute top-[-9%] left-[-3%] z-0 w-[24%] animate-[jumpTwo_3.5s_infinite_linear]" style="" />
                                    <Image src={shape10} alt="" className="lazy-img shapes shape-two absolute z-[-1] top-[-10%] left-[64%]" style="" />
                                    <div className="shapes shape-three absolute w-[57px] h-[57px] rotate-[15deg] right-[-5%] z-0 animate-[rotated_28s_infinite_linear] rounded-[13px] top-[10%] bg-[#FF8C24]"></div>
                                    <Image src={shape11} alt="" className="lazy-img shapes shape-four absolute z-[-1] right-[-11%] top-[52%]" style="" />
                                    <Image src={shape12} alt="" className="lazy-img shapes shape-five absolute z-[-1] left-[9%] bottom-[2%]" style="" />
                                    <div className="shapes shape-six absolute w-20 h-20 rotate-[-15deg] z-0 animate-[rotatedTwo_3.5s_infinite_linear] rounded-[15px] left-0 top-[44%] bg-[#17BD37]"></div>
                                    <Image src={shape13} alt="" className="lazy-img shapes shape-seven absolute z-[-1] left-[-10%] animate-[jumpFour_3.5s_infinite_linear] top-1/4" style="" />
                                    <div className="card-one absolute w-[330px] shadow-[0px_30px_60px_rgba(14,36,58,0.06)] right-[-17%] pl-[45px] pr-[15px] py-[25px] bottom-0 bg-white lg:p-[15px_15px_15px_30px] lg:w-[280px] md:p-[15px_15px_15px_30px] md:w-[280px] md:right-0 sm:p-[15px_15px_15px_30px] sm:w-[280px] sm:right-0 xsm:p-[15px_15px_15px_30px] xsm:w-[280px] xsm:right-0 wow fadeInUp" dataWowDelay="0.25s" style={{ visibility: 'visible', animationDelay: 0.25, animationName: 'fadeInUp' }}>
                                        <div className="icon flex items-center justify-center rounded-[50%] absolute w-[54px] h-[54px] shadow-[0px_15px_30px_rgba(11,13,36,0.208646)] z-[1] top-[-25px] left-[-25px] bg-[#A024FF]"><Image src={icon6} alt="" className="lazy-img" style="" /></div>
                                        <div className="name text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] font-medium text-black mb-[10px]">- Rashed Ka, <span className="opacity-50">CEO</span></div>
                                        <p className="text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] !m-0">We aim to answer any quis query in a minute</p>
                                    </div>
                                </div>

                                {/*  */}
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <div className="grid md:grid-cols-3 justify-items-center pt-[60px] md:pt-10 sm:pt-10  ">
                            <div className=" flex-[0_0_auto] px-[12px] max-w-full">
                                <div className="counter-block-three text-center mt-10 wow fadeInUp" >
                                    <div className="main-count font-bold text-black text-[60px] mb-[-9px] lg:text-[45px] lg:mb-[-5px] md:text-[35px] md:mb-[-5px] sm:text-[35px] sm:mb-[-5px] xsm:text-[35px] xsm:mb-[-5px]"><span className="counter">3.5</span>k</div>
                                    <p className=" text-black text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] !m-0">Job  successfully</p>
                                </div>
                            </div>
                            <div className=" flex-[0_0_auto] px-[12px] max-w-full">
                                <div className="counter-block-three text-center mt-10 wow fadeInUp">
                                    <div className="main-count font-bold text-black text-[60px] mb-[-9px] lg:text-[45px] lg:mb-[-5px] md:text-[35px] md:mb-[-5px] sm:text-[35px] sm:mb-[-5px] xsm:text-[35px] xsm:mb-[-5px]"><span className="counter">20 </span>million</div>
                                    <p className=" text-black text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] !m-0">3,280 avg rating</p>
                                </div>
                            </div>
                            <div className=" flex-[0_0_auto] px-[12px] max-w-full">
                                <div className="counter-block-three text-center mt-10 wow fadeInUp" >
                                    <div className="main-count font-bold text-black text-[60px] mb-[-9px] lg:text-[45px] lg:mb-[-5px] md:text-[35px] md:mb-[-5px] sm:text-[35px] sm:mb-[-5px] xsm:text-[35px] xsm:mb-[-5px]"><span className="counter">30</span>k+</div>
                                    <p className=" text-black text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] leading-[1.67em] !m-0">Contact Profile</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;