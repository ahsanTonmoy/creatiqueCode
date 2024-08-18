import Image from 'next/image';
import React from 'react';
import newsImg from '../../../../assects/image/ils_06.svg'
const Articals = () => {
    const post =[
        {
            image: newsImg,
            title: 'A Discount Cartridge dsu is Better Ever.',
            date: '11 july, 2023'
        },
        {
            image: newsImg,
            title: 'A Discount Cartridge dsu is Better Ever.',
            date: '19 augost, 2023'
        },
        {
            image: newsImg,
            title: 'A Discount Cartridge dsu is Better Ever.',
            date: '11 may, 2022'
        },
    ]
    return (
        <div>
            <div className='py-4 md:py-20'>
            <div className='inner-content py-8'>
                    {/* title */}
                    <div className='title text-6xl my-4'>
                    You’r gonna love<br></br> us forever.
                    </div>

                    {/* content */}
                    <div className='py-8'>
                        <div className='grid md:grid-cols-3 gap-4'>
                            {
                                post.map(item=>
                                    <div className='bg-white p-8 rounded-lg grid gap-4 capitalize shadow-sm' key={item}>
                                        {/*  */}
                                        <div className=' w-fit p-4 rounded-lg'>
                                            <Image src={item.image} alt=''></Image>
                                        </div>

                                        {/*  */}
                                        <div className=' text-lg font-light '>{item.date}</div>

                                        {/*  */}

                                        <div className=' text-2xl font-medium'>
                                           {item.title}
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

export default Articals;