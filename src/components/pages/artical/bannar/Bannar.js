import Image from 'next/image';
import React from 'react';
import shape172 from '@/assects/image/shape/shape_172.svg'

const Bannar = () => {
    return (
        <div>
            <div className='py-20 md:py-48'>
                {/*  */}
                <div className="fancy-feature-fiftyOne relative">
                    <div className="container">
                        <div className="flex flex-wrap mx-[-12px]">
                            <div className="xxl:w-7/12 xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full text-center m-auto wow fadeInUp" >
                                <div className="title-style-five mb-[65px] lg:mb-10 md:mb-10 sm:mb-10 xsm:mb-10">
                                    <div className="sc-title-two italic relative inline-block text-[17px] text-[color:var(--prime-ten)] mb-5 pl-10 before:content-[''] before:absolute before:w-6 before:h-px before:left-0 before:top-3.5 before:bg-[var(--prime-ten)]">Blog</div>
                                    <h2 className="main-title font-medium text-black lg:text-[72px] leading-[1.25em]  md:text-[35px] sm:text-[35px] text-[35px]">Check our inside News</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={shape172} alt="" className="lazy-img shapes shape-two absolute  right-[10%]  top-[4%]" />
                </div>
            </div>
        </div>
    );
};

export default Bannar;