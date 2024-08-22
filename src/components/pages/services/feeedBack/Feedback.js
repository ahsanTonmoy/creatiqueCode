'use client'
const { default: Image } = require("next/image")
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import img1 from '@/assects/image/media/img_02.png'
import img2 from '@/assects/image/media/img_03.png'
import icon7 from '@/assects/image/icon/icon_07.svg'
const Feedback = () => {
    const review = [
        {
            clientImg: img1,
            clinetName: 'martin jones',
            location: 'usa',
            review: 'very solid , 8.5 out of 10',
            text: 'We’v 9,000 agents across are country, Find agents near your neighborhood.',
        },
        {
            clientImg: img2,
            clinetName: 'martin jones',
            location: 'usa',
            review: 'very solid , 8.5 out of 10',
            text: 'We’v 9,000 agents across are country, Find agents near your neighborhood.',
        },
        {
            clientImg: img1,
            clinetName: 'martin jones',
            location: 'usa',
            review: 'very solid , 8.5 out of 10',
            text: 'We’v 9,000 agents across are country, Find agents near your neighborhood.',
        },
        {
            clientImg: img2,
            clinetName: 'martin jones',
            location: 'usa',
            review: 'very solid , 8.5 out of 10',
            text: 'We’v 9,000 agents across are country, Find agents near your neighborhood.',
        },
        {
            clientImg: img1,
            clinetName: 'martin jones',
            location: 'usa',
            review: 'very solid , 8.5 out of 10',
            text: 'We’v 9,000 agents across are country, Find agents near your neighborhood.',
        },
    ]
    return (
        <div>
            {/*  */}
            <div className="feedback">
                <div className="feedback-section-one z-[2] relative wow fadeInUp" >
                    <div className="bg-white  relative pt-[150px] lg:pt-[100px] md:pt-[100px] sm:pt-[100px] xsm:pt-[100px] ">
                        {/* title */}
                        <div className="container">
                            <div className="flex flex-wrap mx-[-12px] items-center">
                                <div className="xl:w-6/12 lg:w-6/12 md:w-7/12 w-full flex-[0_0_auto] px-[12px] max-w-full m-auto">
                                    <div className="title-style-one text-center">
                                        <h2 className="sec-title font-bold text-6xl text-black my-4">What’s <span className=" inline-block relative z-[1] before:content-[''] before:absolute before:w-[98%] before:h-3 before:z-[-1] before:left-1 before:bottom-2.5 before:bg-[rgba(255,139,37,0.4)]">Our Client</span> Say About us.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* content */}
                        <div className="inner-content md:p-20 p-2">
                            <Swiper
                                slidesPerView={'auto'}
                                centeredSlides={true}
                                spaceBetween={30}
                                className="mySwiper"
                            >
                                {
                                    review.map(item => 
                                        // slide per item
                                        <SwiperSlide key={item.clinetName}>
                                            <div className="feedback-block-one  items-end grid gap-4 md:p-8 p-4 md:grid-cols-2 rounded-[15px] bg-sada border border-solid border-[#E1E1E1]">
                                                <div className="img-meta relative overflow-hidden before:content-[''] before:absolute before:h-[51%] before:z-[1] before:rounded-[0_0_0_15px] before:bottom-0 before:inset-x-0 before:bg-[linear-gradient(180deg,rgba(255,255,255,0.0117614)_0%,rgba(255,255,255,0.701752)_43.58%,#FFFFFF_100%)] xsm:w-full xsm:max-w-[350px] xsm:max-h-[inherit] xsm:m-[0_auto_40px]">
                                                    <Image src={item.clientImg} alt="" className="m-auto" />
                                                </div>
                                                <div className="grid gap-2 ">
                                                    <div className="icon flex items-center justify-center w-[55px] h-[55px] rounded-[50%]  bg-teal-600" >
                                                        <Image src={icon7} alt="" />
                                                    </div>
                                                    <div className="rating h3 font-bold text-3xl text-black ">{item.review}</div>
                                                    <p className=" text-[24px] 2xl:text-[22px] lg:text-[19px] md:text-[19px] sm:text-[19px] xsm:text-[19px] leading-[1.67em] pt-[35px] pb-5">{item.text}</p>
                                                    <h6>{item.clinetName} <span className="opacity-25">{item.location}</span></h6>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;

