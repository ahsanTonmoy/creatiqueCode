'use client'
import React from 'react';

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
            <div className='md:py-20 py-4'>
                <div className='inner-content py-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        {/* title */}
                        <div className='grid gap-8'>
                            {/* title */}
                            <div className='sec-title md:text-6xl text-3xl leading-tight'>
                                Let’s talk <br></br>
                                with <span className='heighLight'> expereince </span>advisors.
                            </div>

                            {/* sub title */}
                            <div className=' text-lg md:text-3xl'>
                                eiusmod tempor incididunt. Ut enim mim veniam, quis nostrud elit.
                            </div>

                            {/*  */}
                            <div>
                                <div className='text-[#095859] text-2xl capitalize my-4'>urgent?</div>

                                <div className=' flex text-xl gap-2 capitalize '>call us <div className='-my-2 text-3xl '> +88 019XXXXXX</div></div>
                            </div>
                        </div>

                        {/* from */}
                        <div className=' p-4 md:p-8 secendary-bg rounded-lg'>
                            {/*  */}
                            <form onSubmit={hendleform}>
                                <div className='grid gap-4 capitalize'>
                                    {/* name */}
                                    <div className='form-control'>
                                        <label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">Name*</label>
                                        <input type='text' name='name' placeholder='your name *' className='bg-white p-4 w-full capitalize rounded-lg border-4' required />
                                    </div>
                                    {/* email */}
                                    <div className='form-control'>
                                        <label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">email*</label>
                                        <input type='email' name='email' placeholder='email *' className='bg-white p-4 w-full capitalize rounded-lg border-4' required />
                                    </div>
                                    {/* message */}
                                    <div className='form-control'>
                                        <label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">messages*</label>
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