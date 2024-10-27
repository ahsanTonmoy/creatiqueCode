'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaTrophy } from "react-icons/fa6";
import { IoArrowRedoCircle } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Hosting = () => {
    const [hostPlan, setHostPlan]= useState([]);

    useEffect((()=>{
        fetch('hostingData.json')
        .then(res=>res.json())
        .then(data => setHostPlan(data))
    }),[])
    console.log(hostPlan);
    return (
        <div>
            {/*  */}
            <div className='inner-section  cursor-pointer'>
                {/*  */}
                <div className="xl:w-7/12 lg:w-11/12 md:w-9/12 w-full xsm:px-[12px] max-w-full m-auto text-center capitalize p-6">
                    <div className="title-style-one md:text-[45px] text-3xl" >
                        <h2 className="">budget <span className=" heighLight">hosting</span></h2>
                    </div>

                </div>
                {/*  */}
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 py-16">
                    {
                        hostPlan.map(item => 
                            <div key={item.name} className=' bg-white p-6 rounded-lg shadow-sm hover:shadow-lg'>
                                {/* title */}
                                <div className='p-4 text-center font-extralight'>
                                    {/*  */}
                                    <div className='grid justify-items-center gap-2 mb-4'>
                                        <div className='text-4xl text-[#FF733B]'> <FaTrophy/> </div>
                                        <div className='font-bold text-xl'> {item.name} </div>
                                    </div>
                                    <hr/>
                                    {/*  */}
                                    <div className='py-4 text-4xl font-bold'> $ {item.price.yearly} /yr</div>
                                </div>
                                {/* featured */}
                                <div className=' py-4 overfloy-hidden'>
                                    {/*  */}
                                    <div className='border-b flex gap-3 p-2'>
                                        <span className='mt-1 text-[#FF733B]'><IoArrowRedoCircle/></span>
                                        <span className=''> {item.storage} </span>
                                    </div>
                                    {/*  */}
                                    <div className='border-b flex gap-3 p-2'>
                                        <span className='mt-1 text-[#FF733B]'><IoArrowRedoCircle/></span>
                                        <span className=''> {item.sslCertificate} </span>
                                    </div>
                                    {/*  */}
                                    <div className='border-b flex gap-3 p-2'>
                                        <span className='mt-1 text-[#FF733B]'><IoArrowRedoCircle/></span>
                                        <span className=''> {item.support} </span>
                                    </div>
                                    {/*  */}
                                    <div className='border-b flex gap-3 p-2'>
                                        <span className='mt-1 text-[#FF733B]'><IoArrowRedoCircle/></span>
                                        <span className=''> {item.additionalFeatures} </span>
                                    </div>
                                    {/*  */}
                                    <div className='border-b flex gap-3 p-2'>
                                        <span className='mt-1 text-[#FF733B]'><IoArrowRedoCircle/></span>
                                        <span className=''> {item.bandwidth} </span>
                                    </div>
                                    {/*  */}
                                    <div className='border-b flex gap-3 p-2'>
                                        <span className='mt-1 text-[#FF733B]'><IoArrowRedoCircle/></span>
                                        <span className=''> {item.emailAccounts} email account </span>
                                    </div>
                                    {/*  */}
                                    <div className='border-b flex gap-3 p-2'>
                                        <span className='mt-1 text-[#FF733B]'><IoArrowRedoCircle/></span>
                                        <span className=''> {item.domainsIncluded} domains Included </span>
                                    </div>
                                    {/*  */}
                                    <div className='border-b flex gap-3 p-2'>
                                        <span className='mt-1 text-[#FF733B]'><IoArrowRedoCircle/></span>
                                        <span className=''> {item.database.type} </span>
                                    </div>
                                </div>
                                {/* plan */}
                                <div className='p-6 capitalize font-bold bg-white'>
                                    <Link href={'#'} className=' text-[#FF733B] flex gap-2 text-2xl justify-center'>
                                    get it new <span className='mt-[6px]'><FaArrowRight/></span>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Hosting;