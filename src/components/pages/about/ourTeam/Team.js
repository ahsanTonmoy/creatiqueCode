import FillBtn from '@/components/uiComponent/buttons/FillBtn';
import Image from 'next/image';
import React from 'react';
import image16 from '@/assects/image/team/img_16.jpg'
import image17 from '@/assects/image/team/img_17.jpg'
import image18 from '@/assects/image/team/img_18.jpg'
import image19 from '@/assects/image/team/img_19.jpg'
const Team = () => {
    return (
        <div>
            <div className="team-section-four mt-[150px] lg:mt-[90px] md:mt-[90px] sm:mt-[90px] xsm:mt-[90px]">
				<div className="p-4 md:p-8">
                    {/* title */}
					<div className="grid md:grid-cols-2 mx-[-12px] items-end">
						<div className=" w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInLeft" >
							<div className="title-style-one text-center xl:text-left lg:text-left md:text-left ">
								<div className="sc-title uppercase text-[16px] md:text-xl  tracking-[2px] text-[rgba(0,0,0,0.3)] mb-2">OUR TEAM</div>
								<h2 className="sec-title font-bold text-black">We’ve talented expert to help you</h2>
							</div> 
						</div>
						<div className="grid md:justify-items-end justify-items-center w-full gap-4 p-4" >
							<FillBtn btnTitle={'view full team'}/>
						</div>
					</div> 
                    {/* content */}

					<div className="wrapper border-b-[#f1f1f1] border-b border-solid pt-20 lg:pt-[50px] md:pt-[50px] sm:pt-[50px] xsm:pt-[50px] ">
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
							<div className=" w-full flex-[0_0_auto] px-[12px] max-w-full">
								<div className="team-block-three relative pb-10 lg:pb-[30px] md:pb-[30px] sm:pb-[30px] xsm:pb-[30px] before:content-[''] before:absolute before:h-0.5 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:-bottom-px before:inset-x-0 before:bg-[#000] hover:before:opacity-100 wow fadeInUp" >
									<div className="">
                                        <Image src={image19} alt="" className="lazy-img team-img w-full rounded-[15px]"  />
										<div className="info text-center p-[38px_15px_5px] lg:p-[20px_5px_0] md:p-[20px_5px_0] sm:p-[20px_5px_0] xsm:p-[20px_5px_0]">
											<h5 className=" text-black font-medium mb-[5px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Zubayer Al Hasan</h5>
											<div className=" text-black opacity-75">Developer</div>
										</div> 
									</div> 
								</div> 
							</div>
							<div className=" w-full flex-[0_0_auto] px-[12px] max-w-full">
								<div className="team-block-three relative pb-10 lg:pb-[30px] md:pb-[30px] sm:pb-[30px] xsm:pb-[30px] before:content-[''] before:absolute before:h-0.5 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:-bottom-px before:inset-x-0 before:bg-[#000] hover:before:opacity-100 wow fadeInUp" >
									<div className="img-meta">
                                        <Image src={image16} alt="" className="lazy-img team-img w-full rounded-[15px]"  />
										<div className="info text-center p-[38px_15px_5px] lg:p-[20px_5px_0] md:p-[20px_5px_0] sm:p-[20px_5px_0] xsm:p-[20px_5px_0]">
											<h5 className=" text-black font-medium mb-[5px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Jannatul Ferdaus</h5>
											<div className=" text-black opacity-75">CEO</div>
										</div> 
									</div> 
								</div> 
							</div>
							<div className=" w-full flex-[0_0_auto] px-[12px] max-w-full">
								<div className="team-block-three relative pb-10 lg:pb-[30px] md:pb-[30px] sm:pb-[30px] xsm:pb-[30px] before:content-[''] before:absolute before:h-0.5 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:-bottom-px before:inset-x-0 before:bg-[#000] hover:before:opacity-100 wow fadeInUp" >
									<div className="img-meta">
                                        <Image src={image17} alt="" className="lazy-img team-img w-full rounded-[15px]"  />
										<div className="info text-center p-[38px_15px_5px] lg:p-[20px_5px_0] md:p-[20px_5px_0] sm:p-[20px_5px_0] xsm:p-[20px_5px_0]">
											<h5 className=" text-black font-medium mb-[5px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Rashed Kabir</h5>
											<div className=" text-black opacity-75">Designer</div>
										</div> 
									</div> 
								</div> 
							</div>
							<div className=" w-full flex-[0_0_auto] px-[12px] max-w-full">
								<div className="team-block-three relative pb-10 lg:pb-[30px] md:pb-[30px] sm:pb-[30px] xsm:pb-[30px] before:content-[''] before:absolute before:h-0.5 before:opacity-0 before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:-bottom-px before:inset-x-0 before:bg-[#000] hover:before:opacity-100 wow fadeInUp" >
									<div className="img-meta">
                                        <Image src={image18} alt="" className="lazy-img team-img w-full rounded-[15px]"  />
										<div className="info text-center p-[38px_15px_5px] lg:p-[20px_5px_0] md:p-[20px_5px_0] sm:p-[20px_5px_0] xsm:p-[20px_5px_0]">
											<h5 className=" text-black font-medium mb-[5px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px]">Angelina Shelly</h5>
											<div className=" text-black opacity-75">Analysist</div>
										</div> 
									</div> 
								</div> 
							</div>
						</div> 
					</div>
				</div>
			</div>
        </div>
    );
};

export default Team;