'use client'
import React from 'react'
import Image from 'next/image';
import shape90 from '@/assects/image/shape/shape_90.svg'
import shape91 from '@/assects/image/shape/shape_91.svg'
import icon60 from '../../../../assects/image/icon/icon_60.svg'
const Consuletion = () => {
    const hendleform = e => {
        e.preventDefault()

        const msg = {
            name: e.target.name.value,
            email: e.target.email.value,
            msg: e.target.msg.value,
        }

        console.log(msg);
    }
    return (
        <div>
            <div className='md:py-20 py-4 '>
                <div className='inner-content py-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        {/* title */}
                        <div className='grid gap-4'>
                            <div className=''>
                                <Image src={icon60} alt='' />
                            </div>
                            {/* title */}
                            <div className='sec-title md:text-6xl text-3xl leading-tight'>
                                Let’s talk <br></br>
                                with <span className='heighLight'> expereince </span> advisors.
                            </div>

                            {/* sub title */}
                            <div className=' text-lg md:text-3xl'>
                                eiusmod tempor incididunt. Ut enim mim veniam, quis nostrud elit.
                            </div>

                            {/*  */}
                            <div>
                                <div className='text-[#FF733B] text-2xl capitalize my-4'>urgent?</div>

                                <div className=' flex text-xl gap-2 capitalize '>call us <div className='-my-2 text-3xl '> +88 01311857085</div></div>
                            </div>
                        </div>
                        <div className='lg:m-0 md:m-10 p-4 md:p-8 bg-white rounded-lg relative '>
                            {/* top bg */}
                            <div className=' absolute -top-14 -left-20 -rotate-12 hidden md:block text-center text-xl'>
                                <div>
                                    Fill the <br></br> form 
                                </div>

                                <div className=' pl-12'>
                                    <Image className='' src={shape90} alt='' />
                                 </div>       

                            </div>
                            {/* bottom shape */}
                            <div className=' absolute -bottom-16 -left-16 hidden md:block'>
                                <Image src={shape91} alt='' />

                            </div>
                            {/*  */}
                            <form onSubmit={hendleform}>
                                <div className='grid gap-4 capitalize md:p-4'>
                                    {/* name */}
                                    <div className='form-control'>
                                        <input type='text' name='name' placeholder='your name *' className='bg-white p-4 w-full capitalize rounded-lg border-4' required />
                                    </div>
                                    {/* email */}
                                    <div className='form-control'>
                                        <input type='email' name='email' placeholder='email *' className='bg-white p-4 w-full capitalize rounded-lg border-4' required />
                                    </div>
                                    {/* message */}
                                    <div className='form-control'>
                                        <textarea type='text' name='msg' placeholder='your messeges' className='bg-white p-4 w-full capitalize rounded-lg border-4' required></textarea>
                                    </div>
                                    {/* name */}
                                    <div className='form-control'>
                                        <input type='submit' value={'SEND MESSAGE'} className='fillBtn w-full text-white p-4 rounded-lg cursor-pointer font-bold'></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consuletion;