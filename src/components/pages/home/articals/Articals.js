import Image from 'next/image';
import React from 'react';
import newsImg from '../../../../assects/image/ils_06.svg'
import OutLinebtn from '@/components/uiComponent/buttons/OutLinebtn';
import FillBtn from '@/components/uiComponent/buttons/FillBtn';
const Articals = () => {
    const post = [
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
                    <div className='md:flex gap-4 justify-between'>
                        <div className='title text-6xl my-4 text-center md:text-start'>
                        <span className='heighLight'> company </span> inside<br></br> News.
                        </div>

                        <div className='grid place-content-center my-4'><FillBtn radius={'rounded-md'} btnTitle={'go to blog'}></FillBtn></div>
                    </div>


                    {/* content */}
                    <div className='py-8'>
                        <div className='grid md:grid-cols-3 gap-4'>
                            {
                                post.map(item =>
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

                                        {/*  */}

                                        <div>
                                            <OutLinebtn radius={'rounded-full'} btnTitle={'read more'}></OutLinebtn>
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