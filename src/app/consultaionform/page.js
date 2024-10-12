'use client'
import React from 'react';
import Preloader from '@/components/shared/preloader/Preloader';
import PageBannar from '@/components/uiComponent/pageBannar/PageBannar';
const page = () => {
    const hendleform = e => {
        e.preventDefault()

        const msg = {
            name: e.target.name.value,
            email: e.target.email.value,
            msg: e.target.msg.value,
            attachFile: e.target.attachFile.value,
        }

        console.log(msg);
    }
    return (
        <div>
            <Preloader />
            <div>
                <PageBannar titile={'consultation form'}></PageBannar>
                {/*  */}
                <div className='md:px-4'>
                    <div className='pageBannar'>
                    {/*  */}
                        <div className="md:p-20 p-4 pageContainer">
                        {/* form */}
							<div className="contact-section-two text-left p-12 bg-white shadow-2xl">
								<div className=" md:mb-[60px] sm:mb-[60px] xsm:mb-[60px] wow fadeInLeft" >
									<form onSubmit={hendleform}>
										<div className='grid gap-4'>
											{/* name */}
											<div className='form-control'>
												<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">Name*</label>
												<input type='text' name='name' placeholder='your name *' className='bg-white p-4 w-full capitalize rounded-lg border-4' required />
											</div>
											{/* email */}
											<div className='form-control'>
												<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">email*</label>
												<input type='email' name='email' placeholder='email *' className='bg-white p-4 w-full rounded-lg border-4' required />
											</div>
											
											{/* message */}
											<div className='form-control'>
												<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">messages*</label>
												<textarea type='text' name='msg' placeholder='your messeges' className='bg-white p-4 w-full capitalize rounded-lg border-4' required></textarea>
											</div>
                                            {/* file */}
											<div className='form-control'>
												<label className="block text-[14px] text-[rgba(0,0,0,0.5)] mb-[7px]">attach file</label>
												<input type='file' name='attachFile' className='my-4' />
											</div>
											{/* submit */}
											<div className='form-control'>
												<input type='submit' value={'SEND MESSAGE'} className='fillBtn !bg-black w-full text-white p-4 rounded-lg cursor-pointer font-bold'></input>
											</div>
										</div>
									</form>
								</div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;