import FillBtn from '@/components/uiComponent/buttons/FillBtn';
import React from 'react';
import Desgin from '@/assects/image/icon/icon_09.svg'
import content from '@/assects/image/icon/icon_52.svg'
import web from '@/assects/image/icon/icon_53.svg'
import seo from '@/assects/image/icon/icon_54.svg'
import pay from '@/assects/image/icon/icon_55.svg'
import Image from 'next/image';

const Services = () =>{
    const serviceItem= [
        {
            icon: Desgin ,
            title: 'design & development'
        },
        {
            icon: content,
            title: 'Content writing & Affiliate'
        },
        {
            icon: web,
            title: 'SEO & social marketing'
        },
        {
            icon: Desgin ,
            title: 'design & development'
        },
        {
            icon: Desgin ,
            title: 'design & development'
        },
    ]
    return (
        <div>
            <div className='md:py-20 py-4'>
                <div className='content'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        {/* title */}
                        <div className='title col-span-2'>
                            <div className=' text-6xl leading-tight'>let&apos;s <br></br> Discover all our Services.</div>
                        </div>
                        {/* services card */}
                        {
                            serviceItem.map(item => 
                                <div className='bg-white p-10 rounded-lg grid gap-4 cursor-pointer' key={item}>
                                    {/* img */}
                                    <div><Image src={item.icon} alt=''/></div>
                                    {/*  */}
                                    <div className='text-2xl font-semibold capitalize'>{item.title}</div>
                                </div>
                            )
                        }
                        {/* buttom title */}
                        <div className=''>
                            <div className='grid gap-4'>
                                <div className='heighLight font-semibold'>Confusion?</div>
                                <div className=' font-normal text-3xl'>Send message for info.</div>
                                <div className=''><FillBtn radius={'rounded-full'} btnTitle={'contact us'}></FillBtn></div>
                            </div>
                        </div>
                        {/*  */}
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;