'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import icon from '@/assects/image/icon/icon_61.svg'
import authorImg from '@/assects/image/author.jpg'
import Image from 'next/image';
const Testimonal = () => {
    const testimonal = [
        {
            id: 1,
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: 'devid jonh',
            img: authorImg,
            localtion: 'usa'
        },
        {
            id: 2,
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: ' maria islam',
            img: authorImg,
            localtion: 'bangladesh'
        },
        {
            id: 3,
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: 'devid ',
            img: authorImg,
            localtion: 'australia'
        },
        {
            id: 4,
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: 'devid ',
            img: authorImg,
            localtion: 'australia'
        },
        {
            id: 5,
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: 'devid ',
            img: authorImg,
            localtion: 'australia'
        },
        {
            id: 6,
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: 'devid ',
            img: authorImg,
            localtion: 'australia'
        },
        {
            id: 7,
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: 'devid ',
            img: authorImg,
            localtion: 'australia'
        },
        {
            id: 8,
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: 'devid ',
            img: authorImg,
            localtion: 'australia'
        },
    ]
    return (
        <div>
            <div className='md:py-20 py-4'>
                <div className='inner-content py-8'>
                    {/* title */}
                    <div className='sec-title text-6xl my-4'>
                        You’r gonna <span className='heighLight'> love </span><br></br> us forever.
                    </div>

                    {/* content */}
                    <div className=' py-10 px-10 lg:px-0 md:px-20'>
                        {/* for lerge */}
                        <div className=' hidden lg:block'>
                            {/* slider */}
                            <Swiper watchSlidesProgress={true}
                                slidesPerView={3}
                                className="mySwiper">
                                {
                                    testimonal.map(item =>
                                        <SwiperSlide className='bg-white m-4 p-8 rounded-lg grid !gap-4 ' key={item.id}>
                                            {/*  */}
                                            <div className='bg-teal-900 w-fit p-4 rounded-full'>
                                                <Image src={item.icon} alt=''></Image>
                                            </div>

                                            {/*  */}
                                            <div className=' text-lg font-extralight my-6'>{item.msgg}</div>

                                            {/*  */}

                                            <div className='flex gap-4'>
                                                <div>
                                                    <Image src={item.img} alt=''></Image>
                                                </div>
                                                <div>
                                                    <div className='font-semibold text-base capitalize'>{item.author}</div>
                                                    <div className='text-gray-400 text-xl capitalize'>{item.localtion}</div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                        {/*  */}
                        <div className='lg:hidden'>
                            {/* slider */}
                            <Swiper watchSlidesProgress={true}
                                slidesPerView={1}
                                className="mySwiper">
                                {
                                    testimonal.map(item =>
                                        <SwiperSlide className='bg-white p-8 rounded-lg grid  m-4 ' key={item.id}>
                                            {/*  */}
                                            <div className='bg-teal-900 w-fit p-4 rounded-full'>
                                                <Image src={item.icon} alt=''></Image>
                                            </div>

                                            {/*  */}
                                            <div className=' text-lg font-extralight my-6'>{item.msgg}</div>

                                            {/*  */}

                                            <div className='flex gap-4'>
                                                <div>
                                                    <Image src={item.img} alt=''></Image>
                                                </div>
                                                <div>
                                                    <div className='font-semibold text-base capitalize'>{item.author}</div>
                                                    <div className='text-gray-400 text-xl capitalize'>{item.localtion}</div>
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

export default Testimonal;