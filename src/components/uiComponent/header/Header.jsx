'use client'
import React, { useEffect, useState } from 'react';
import brand from '@/assects/image/brand/logo.png'
import Image from 'next/image';
import Menu from './../menuUI/Menu';
import FillBtn from '../buttons/FillBtn';
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const Header = () => {
    const [open, setOpen] = useState(false)
    const [header, setHeader] = useState(false)

    const scrollHeader = () =>{
        if(window.scrollY >= 20){
            setHeader(true)
        }else{
            setHeader(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollHeader)
        return () =>{
            window.addEventListener('scroll', scrollHeader)
        }
    },[])
    return (
        <div>
            <header className={header? ' fixed w-full shadow-xl px-8 py-4':'px-8 py-4'}>
                <div className="inner-content flex justify-between gap-4">
                    {/* brand */}
                    <div className="brand w-32">
                        <Image src={brand} alt='logo-creatiqucode' />
                    </div>
                    {/* for large device */}
                    <div className="  gap-16 md:flex hidden">
                        <Menu style={' flex gap-6'} />
                    </div>

                    {/* for large device */}
                    <div>
                        <div className="hidden lg:block">
                            <FillBtn radius={' rounded-sm'} btnTitle={'free consultation'} />
                        </div>
                        <div className=" text-[#095859] text-2xl py-2 md:hidden cursor-pointer">
                            <div className="" onClick={() => setOpen(!open)}>
                                <AiOutlineBars />
                            </div>
                            {/*  */}
                            {
                                open ? <div className="sidebar fixed top-0 left-0 w-full h-screen text-base">
                                    <div className="menu bg-[#fff] w-60 h-screen p-4">
                                        <div className="text-[#095859] text-2xl grid justify-items-end gap-6" onClick={() => setOpen(!open)}>
                                            <IoClose />
                                        </div>
                                        <div className="grid gap-20 my-4">
                                            <Menu style={'grid gap-2 text-black'} />

                                            <FillBtn radius={' rounded-sm'} btnTitle={'free consultation'} />
                                        </div>
                                    </div>
                                </div> : null}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;