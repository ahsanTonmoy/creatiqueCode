import React from 'react';
import icon from '@/assects/image/icon/icon_61.svg'
import authorImg from '@/assects/image/author.jpg'
import Image from 'next/image';
const Testimonal = () => {
    const testimonal = [
        {
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: 'devid jonh',
            img: authorImg,
            localtion: 'usa'
        },
        {
            icon: icon,
            msgg: 'We’v 9,000 agents around the country, Find agents near your neighborhood.',
            author: ' maria islam',
            img: authorImg,
            localtion: 'bangladesh'
        },
        {
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
                    <div className='title text-6xl my-4'>
                    You’r gonna love<br></br> us forever.
                    </div>

                    {/* content */}
                    <div className='py-8'>
                        <div className='grid md:grid-cols-3 gap-4'>
                            {
                                testimonal.map(item=>
                                    <div className='bg-white p-8 rounded-lg grid gap-4' key={item}>
                                        {/*  */}
                                        <div className='bg-teal-900 w-fit p-4 rounded-full'>
                                            <Image src={item.icon} alt=''></Image>
                                        </div>

                                        {/*  */}
                                        <div className=' text-lg font-extralight'>{item.msgg}</div>

                                        {/*  */}

                                        <div className='flex gap-8'>
                                            <div>
                                                <Image src={item.img} alt=''></Image>
                                            </div>
                                            <div>
                                                <div className='font-semibold text-base capitalize'>{item.author}</div>
                                                <div className='text-gray-400 text-xl capitalize'>{item.localtion}</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonal;