import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";
const Blogs = () => {
    return (
        <div>
            <div>
                {/*  */}
                <div className="blog-section-five mt-[70px]  lg:mt-[30px] md:mt-[30px] sm:mt-[30px] xsm:mt-[30px]">
                    <div className="px-4 md:px-10">
                        <div className=" border-b-[#f1f1f1] border-b border-solid pb-[150px] lg:pb-[60px] md:pb-[60px] sm:pb-[60px] xsm:pb-[60px]  ">
                            <div className="flex flex-wrap mx-[-12px] xxl:mx-[-24px]">
                                {/* blog card */}
                                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[12px] max-w-full flex">
                                    <article className="blog-meta-five flex flex-col relative  mb-[60px] lg:mb-[50px] md:mb-[50px] sm:mb-[50px] xsm:mb-[50px] border w-full transition-all duration-[0.3s] ease-[ease-in-out] md:p-12 p-6 border-solid border-black before:content-[''] before:absolute before:w-full before:h-full before:border before:z-[-1] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:border-solid before:border-black before:left-2 before:top-2 hover:border-[color:var(--prime-ten)] hover:before:border-[color:var(--prime-ten)] wow fadeInUp" >
                                        <div><a href="blog-details.html" className="tag uppercase font-medium tran3s text-[12px] sm:text-[11px] xsm:text-[11px] tracking-[1px] border text-black px-[11px] py-[3px] border-solid border-black hover:text-white hover:bg-black">Design</a></div>
                                        <div className="post-data mt-[30px]  mb-[100px]  lg:mb-[50px] md:mb-[50px] sm:mb-[50px] xsm:mb-[50px] ">
                                            <a href="blog-details.html"><h4 className="tran3s blog-title text-3xl font-bold sm:text-[42px] xsm:text-[22px] leading-[1.416em] hover:text-black hover:underline">Until recently, the prevailing view assumed lorem ipsum was..</h4></a>
                                        </div>
                                        <div className="blog-footer flex items-center justify-between mt-auto">
                                            <div className="blog-date font-medium  text-black ">Featured - <a href="blog-details.html" className="font-normal tran3s hover:text-black hover:underline">18 Jul 2023</a></div>
                                            <Link href={`/artical/slug`} className="read-more tran3s p-2 text-center leading-[45px] text-white text-[24px] bg-black hover:bg-[var(--prime-ten)]"><i className="bi bi-arrow-up-right rotate-12"><MdOutlineArrowOutward/></i></Link>
                                        </div>
                                    </article>
                                </div>
                                
                            </div>

                            <div className="page-pagination-one pt-[50px] lg:pt-[30px] md:pt-[30px] sm:pt-[30px] xsm:pt-[30px] ">
                                <ul className="flex items-center justify-center mb-0 pl-0 list-none ">
                                    <li className=" group font-medium text-[20px] text-[#3E3E3E] mr-[22px] lg:text-[18px] lg:mr-[18px] md:text-[18px] md:mr-[18px] sm:text-[18px] sm:mr-[18px] xsm:text-[18px] xsm:mr-[18px] active"><a className=" transition-all duration-[0.3s] ease-[ease]  text-[color:var(--prime-ten)]" href="#">1</a></li>
                                    <li className=" group font-medium text-[20px] text-[#3E3E3E] mr-[22px] lg:text-[18px] lg:mr-[18px] md:text-[18px] md:mr-[18px] sm:text-[18px] sm:mr-[18px] xsm:text-[18px] xsm:mr-[18px]"><a className=" transition-all duration-[0.3s] ease-[ease] group-hover:text-[color:var(--prime-ten)]" href="#">2</a></li>
                                    <li className=" group font-medium text-[20px] text-[#3E3E3E] mr-[22px] lg:text-[18px] lg:mr-[18px] md:text-[18px] md:mr-[18px] sm:text-[18px] sm:mr-[18px] xsm:text-[18px] xsm:mr-[18px]"><a className=" transition-all duration-[0.3s] ease-[ease] group-hover:text-[color:var(--prime-ten)]" href="#">3</a></li>
                                    <li className=" group font-medium text-[20px] text-[#3E3E3E] mr-[22px] lg:text-[18px] lg:mr-[18px] md:text-[18px] md:mr-[18px] sm:text-[18px] sm:mr-[18px] xsm:text-[18px] xsm:mr-[18px]"><a className=" transition-all duration-[0.3s] ease-[ease] group-hover:text-[color:var(--prime-ten)]" href="#">4</a></li>
                                    <li className=" font-medium text-[20px] text-[#3E3E3E] mr-[22px] lg:text-[18px] lg:mr-[18px] md:text-[18px] md:mr-[18px] sm:text-[18px] sm:mr-[18px] xsm:text-[18px] xsm:mr-[18px]">...</li>
                                    <li className=" group font-medium text-[20px] text-[#3E3E3E] mr-[22px] lg:text-[18px] lg:mr-[18px] md:text-[18px] md:mr-[18px] sm:text-[18px] sm:mr-[18px] xsm:text-[18px] xsm:mr-[18px]"><a className=" transition-all duration-[0.3s] ease-[ease] group-hover:text-[color:var(--prime-ten)] text-[18px]" href="#">Last</a></li>
                                    <li className=" group font-medium mr-[22px] text-[28px] lg:text-[18px] lg:mr-[18px] md:text-[18px] md:mr-[18px] sm:text-[18px] sm:mr-[18px] xsm:text-[18px] xsm:mr-[18px] arrow text-black"><a className=" transition-all duration-[0.3s] ease-[ease] group-hover:text-[color:var(--prime-ten)]" href="#"><i className="bi bi-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;