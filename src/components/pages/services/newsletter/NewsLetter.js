import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            {/*  */}
            <div className=''>
                <div className="fancy-short-banner-one mt-[170px]  lg:mt-[120px] md:mt-[120px] sm:mt-[120px] xsm:mt-[120px]">
                    <div className="container">
                        <div className="bg-wrapper relative bg-cover z-[1] p-[80px_12px] lg:p-[50px_12px] md:p-[50px_12px] bg-[rgba(255,139,37,0.2)] sm:p-[50px_12px] xsm:p-[50px_12px] rounded-[40px] w-full ">
                            <div className="shapes shape-one absolute z-[-1] w-[60px] h-[60px] right-[-2%] top-[-9%] animate-[rotated_30s_infinite_linear] rounded-[13px] rotate-12 bg-[#17BD37]"></div>
                            <div className="inner-wrapper max-w-[1170px]  mx-auto my-0 2xl:max-w-[1010px] lg:max-w-[900px] ">
                                <div className="subscribe-area">
                                    <div className="flex flex-wrap mx-[-12px] items-end">
                                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full">
                                            <div className="title-style-two">
                                                <div className="sc-title font-medium text-[20px] text-[#F96F60] pb-[5px] lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] ">Subscirbe Now</div>
                                                <h4 className="main-title font-bold text-black text-[50px] leading-[1.20em]  ">New user? Start your free trial now.</h4>
                                            </div>
                                        </div>
                                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] place-self-center px-[12px] max-w-full">
                                            <div className="subscribe-form max-w-[500px] ml-auto md:max-w-full md:m-[20px_0_0] sm:max-w-full sm:m-[20px_0_0] xsm:max-w-full xsm:m-[20px_0_0]">
                                                <form action="#" className=" h-[70px] relative text-left shadow-[0_10px_20px_rgba(70,40,13,0.05)] lg:h-[65px] md:h-[65px] sm:h-[65px] xsm:h-[65px]">
                                                    <input className=" w-full h-full p-[0_200px_0_20px] rounded-[7px] border-0  lg:p-[0_122px_0_15px] md:p-[0_122px_0_15px] sm:p-[0_122px_0_15px] xsm:p-[0_122px_0_15px]" type="email" placeholder="Email address" />
                                                    <button className="tran3s absolute text-[18px] font-medium text-white w-40 rounded-[6px] right-2 inset-y-2 bg-[var(--prime-one)] hover:bg-[#212121] lg:w-[120px] lg:text-[16px] md:w-[120px] md:text-[16px] sm:w-[120px] sm:text-[16px] xsm:w-[120px] xsm:text-[16px]">Subscribe</button>
                                                </form>
                                                <p className="!m-0 pt-[10px] text-[#979797]">Already a member? <a href="#" className=" text-black hover:text-[#0d6efd]">Sign in.</a></p>
                                            </div>
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

export default NewsLetter;