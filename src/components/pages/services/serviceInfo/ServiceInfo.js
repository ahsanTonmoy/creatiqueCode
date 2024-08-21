'use client'
import Image from 'next/image';
import lazy from '@/assects/image/lazy.svg'
const ServiceInfo = () => {
    return (
        <div>
            <div className='py-20'>
                {/*  */}
                <div className="fancy-feature-one pt-[120px] text-left lg:pt-[90px] md:pt-[90px] sm:pt-[90px] xsm:pt-[90px]">
                    {/* title */}
                    <div className="">
                        <div className="flex flex-wrap mx-[-12px] items-center md:gap-3 gap-8">
                            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInLeft" >
                                <div className="title-style-one text-center xl:text-left lg:text-left text-5xl">
                                    <h2 className="main-title font-bold text-black !m-0">Provide <span className=" inline-block relative z-[1] heighLight">Quality</span> Services.</h2>
                                </div> 
                            </div>
                            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[12px] max-w-full !ml-auto wow fadeInRight" >
                                <p className=" text-[24px] 2xl:text-[22px] lg:text-[19px] md:text-[19px] sm:text-[19px] xsm:text-[19px] leading-[1.67em] text-center xl:text-left lg:text-left  md:pt-[30px] sm:pt-[30px] xsm:pt-[30px]  !m-0">Jano provides alternative asset management solutions to a global client base and manages a significant.</p>
                            </div>
                        </div>
                    </div>
                    {/* content */}
                    <div className="pt-[120px] lg:pt-20 md:pt-[60px] sm:pt-[60px] xsm:pt-[60px]">
                        <div className="flex flex-wrap mx-[-12px] xxl:mx-[-24px]">
                            {/* card */}
                            <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInUp" >
                                <div className="card-style-one xxl:!pr-[3rem]  relative mb-[90px]  md:mb-[70px] sm:mb-[70px] xsm:mb-[70px] before:content-[''] before:absolute before:left-[-30px] before:top-[-30px] before:bottom-[-30px] before:shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)] before:z-[-1] before:opacity-0 before:origin-[0_0] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:rounded-[5px] before:scale-x-100 before:scale-y-90 before:right-0 before:bg-white hover:before:opacity-100 hover:before:scale-[1.0] lg:p-[0_10px_0_15px] md:p-[0_10px_0_15px] sm:p-[0_10px_0_15px] xsm:p-[0_10px_0_15px]">
                                    <div className="icon flex items-center justify-center w-[55px] h-[55px] rounded-[15px] lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px] bg-green-300"><Image src={lazy}  alt="" className="lazy-img" /></div>
                                    <h5 className="font-medium mt-[35px] mb-[25px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px] "><a href="service-details.html" className="tran3s  text-black  hover:text-[color:var(--prime-one)]">Proffesional Support <br></br> by expert.</a></h5>
                                    <p className="mb-[25px]">Through our Family Office Services, we are able to provide the expertise derived from our beginnings.</p>
                                    <a href="service-details.html"><Image src={lazy} alt="" className="lazy-img"/></a>
                                </div> 
                            </div>
                            {/* card */}
                            <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInUp" >
                                <div className="card-style-one xxl:!pr-[3rem]  relative mb-[90px]  md:mb-[70px] sm:mb-[70px] xsm:mb-[70px] before:content-[''] before:absolute before:left-[-30px] before:top-[-30px] before:bottom-[-30px] before:shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)] before:z-[-1] before:opacity-0 before:origin-[0_0] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:rounded-[5px] before:scale-x-100 before:scale-y-90 before:right-0 before:bg-white hover:before:opacity-100 hover:before:scale-[1.0] lg:p-[0_10px_0_15px] md:p-[0_10px_0_15px] sm:p-[0_10px_0_15px] xsm:p-[0_10px_0_15px]">
                                    <div className="icon flex items-center justify-center w-[55px] h-[55px] rounded-[15px] lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px] bg-green-300"><Image src={lazy}  alt="" className="lazy-img" /></div>
                                    <h5 className="font-medium mt-[35px] mb-[25px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px] "><a href="service-details.html" className="tran3s  text-black  hover:text-[color:var(--prime-one)]">Proffesional Support <br></br> by expert.</a></h5>
                                    <p className="mb-[25px]">Through our Family Office Services, we are able to provide the expertise derived from our beginnings.</p>
                                    <a href="service-details.html"><Image src={lazy} alt="" className="lazy-img"/></a>
                                </div> 
                            </div>
                            {/* card */}
                            <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInUp" >
                                <div className="card-style-one xxl:!pr-[3rem]  relative mb-[90px]  md:mb-[70px] sm:mb-[70px] xsm:mb-[70px] before:content-[''] before:absolute before:left-[-30px] before:top-[-30px] before:bottom-[-30px] before:shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)] before:z-[-1] before:opacity-0 before:origin-[0_0] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:rounded-[5px] before:scale-x-100 before:scale-y-90 before:right-0 before:bg-white hover:before:opacity-100 hover:before:scale-[1.0] lg:p-[0_10px_0_15px] md:p-[0_10px_0_15px] sm:p-[0_10px_0_15px] xsm:p-[0_10px_0_15px]">
                                    <div className="icon flex items-center justify-center w-[55px] h-[55px] rounded-[15px] lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px] bg-green-300"><Image src={lazy}  alt="" className="lazy-img" /></div>
                                    <h5 className="font-medium mt-[35px] mb-[25px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px] "><a href="service-details.html" className="tran3s  text-black  hover:text-[color:var(--prime-one)]">Proffesional Support <br></br> by expert.</a></h5>
                                    <p className="mb-[25px]">Through our Family Office Services, we are able to provide the expertise derived from our beginnings.</p>
                                    <a href="service-details.html"><Image src={lazy} alt="" className="lazy-img"/></a>
                                </div> 
                            </div>
                            {/* card */}
                            <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInUp" >
                                <div className="card-style-one xxl:!pr-[3rem]  relative mb-[90px]  md:mb-[70px] sm:mb-[70px] xsm:mb-[70px] before:content-[''] before:absolute before:left-[-30px] before:top-[-30px] before:bottom-[-30px] before:shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)] before:z-[-1] before:opacity-0 before:origin-[0_0] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:rounded-[5px] before:scale-x-100 before:scale-y-90 before:right-0 before:bg-white hover:before:opacity-100 hover:before:scale-[1.0] lg:p-[0_10px_0_15px] md:p-[0_10px_0_15px] sm:p-[0_10px_0_15px] xsm:p-[0_10px_0_15px]">
                                    <div className="icon flex items-center justify-center w-[55px] h-[55px] rounded-[15px] lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px] bg-green-300"><Image src={lazy}  alt="" className="lazy-img" /></div>
                                    <h5 className="font-medium mt-[35px] mb-[25px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px] "><a href="service-details.html" className="tran3s  text-black  hover:text-[color:var(--prime-one)]">Proffesional Support <br></br> by expert.</a></h5>
                                    <p className="mb-[25px]">Through our Family Office Services, we are able to provide the expertise derived from our beginnings.</p>
                                    <a href="service-details.html"><Image src={lazy} alt="" className="lazy-img"/></a>
                                </div> 
                            </div>
                            {/* card */}
                            <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInUp" >
                                <div className="card-style-one xxl:!pr-[3rem]  relative mb-[90px]  md:mb-[70px] sm:mb-[70px] xsm:mb-[70px] before:content-[''] before:absolute before:left-[-30px] before:top-[-30px] before:bottom-[-30px] before:shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)] before:z-[-1] before:opacity-0 before:origin-[0_0] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:rounded-[5px] before:scale-x-100 before:scale-y-90 before:right-0 before:bg-white hover:before:opacity-100 hover:before:scale-[1.0] lg:p-[0_10px_0_15px] md:p-[0_10px_0_15px] sm:p-[0_10px_0_15px] xsm:p-[0_10px_0_15px]">
                                    <div className="icon flex items-center justify-center w-[55px] h-[55px] rounded-[15px] lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px] bg-green-300"><Image src={lazy}  alt="" className="lazy-img" /></div>
                                    <h5 className="font-medium mt-[35px] mb-[25px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px] "><a href="service-details.html" className="tran3s  text-black  hover:text-[color:var(--prime-one)]">Proffesional Support <br></br> by expert.</a></h5>
                                    <p className="mb-[25px]">Through our Family Office Services, we are able to provide the expertise derived from our beginnings.</p>
                                    <a href="service-details.html"><Image src={lazy} alt="" className="lazy-img"/></a>
                                </div> 
                            </div>
                            {/* card */}
                            <div className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full wow fadeInUp" >
                                <div className="card-style-one xxl:!pr-[3rem]  relative mb-[90px]  md:mb-[70px] sm:mb-[70px] xsm:mb-[70px] before:content-[''] before:absolute before:left-[-30px] before:top-[-30px] before:bottom-[-30px] before:shadow-[0px_30px_70px_rgba(10,22,37,0.0555514)] before:z-[-1] before:opacity-0 before:origin-[0_0] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:rounded-[5px] before:scale-x-100 before:scale-y-90 before:right-0 before:bg-white hover:before:opacity-100 hover:before:scale-[1.0] lg:p-[0_10px_0_15px] md:p-[0_10px_0_15px] sm:p-[0_10px_0_15px] xsm:p-[0_10px_0_15px]">
                                    <div className="icon flex items-center justify-center w-[55px] h-[55px] rounded-[15px] lg:w-[55px] lg:h-[55px] lg:p-[15px] md:w-[55px] md:h-[55px] md:p-[15px] sm:w-[55px] sm:h-[55px] sm:p-[15px] xsm:w-[55px] xsm:h-[55px] xsm:p-[15px] bg-green-300"><Image src={lazy}  alt="" className="lazy-img" /></div>
                                    <h5 className="font-medium mt-[35px] mb-[25px] lg:text-[20px] md:text-[20px] sm:text-[20px] xsm:text-[20px] "><a href="service-details.html" className="tran3s  text-black  hover:text-[color:var(--prime-one)]">Proffesional Support <br></br> by expert.</a></h5>
                                    <p className="mb-[25px]">Through our Family Office Services, we are able to provide the expertise derived from our beginnings.</p>
                                    <a href="service-details.html"><Image src={lazy} alt="" className="lazy-img"/></a>
                                </div> 
                            </div>
                            
                            
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;