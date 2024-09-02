'use client'
import React, { useEffect, useState } from 'react';
import brand from '@/assects/image/brand/logo.png'
import Image from 'next/image';
import Menu from './../menuUI/Menu';
import FillBtn from '../buttons/FillBtn';
import { AiOutlineBars } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation';

const Header = () => {
    const [open, setOpen] = useState(false)
    const [header, setHeader] = useState(false)
    const pathName = usePathname()

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        return () => {
            window.addEventListener('scroll', scrollHeader)
        }
    }, [])

    return (
        <div>
            {
                pathName === '/' ?
                <header className={header ? ' fixed  w-full mx-auto  shadow-xl px-8 py-6 bg-white z-50' : 'px-8 md:py-8 py-6 bg-transparent fixed  w-full mx-auto z-10'}>
                <div className="inner-content flex justify-between gap-4">
                    {/* brand */}
                    <div className="brand w-32">
                        <Image src={brand} alt='logo-creatiqucode' />
                    </div>
                    {/* for large device */}
                    <motion.div

                        className="  gap-16 py-1 lg:flex hidden">
                        <Menu style={' flex gap-4'} />
                    </motion.div>

                    {/* for large device */}
                    <div>
                        <div className="hidden lg:block">
                            <FillBtn radius={' rounded-full'} btnTitle={'free consultation'} />
                        </div>
                        <div className=" text-[#FF733B] text-2xl py-2 lg:hidden cursor-pointer">
                            <div className="" onClick={() => setOpen(!open)}>
                                <AiOutlineBars />
                            </div>
                            {/*  */}
                            {
                                open ? <div className="sidebar fixed top-0 left-0 w-full h-screen text-base z-20">
                                    <div className="menu bg-[#fff] w-60 h-screen p-4">
                                        <div className="text-[#FF733B] text-2xl grid justify-items-end gap-6" onClick={() => setOpen(!open)}>
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
                :
                <header className={header ? ' fixed  w-full mx-auto  shadow-xl px-8 py-6 bg-white z-50' : 'px-8 md:py-8 py-6 bg-transparent fixed  w-full mx-auto z-10'}>
                <div className="inner-content flex justify-between gap-4">
                    {/* brand */}
                    <div className="brand w-32">
                        <Image src={brand} alt='logo-creatiqucode' />
                    </div>
                    {/* for large device */}
                    <motion.div

                        className="  gap-16 py-1 lg:flex hidden">
                        <Menu style={' flex gap-4'} />
                    </motion.div>

                    {/* for large device */}
                    <div>
                        <div className="hidden lg:block">
                            <FillBtn radius={' rounded-lg !bg-black'} btnTitle={'free consultation'} />
                        </div>
                        <div className=" text-[#FF733B] text-2xl py-2 lg:hidden cursor-pointer">
                            <div className="" onClick={() => setOpen(!open)}>
                                <AiOutlineBars />
                            </div>
                            {/*  */}
                            {
                                open ? <div className="sidebar fixed top-0 left-0 w-full h-screen text-base z-20">
                                    <div className="menu bg-[#fff] w-60 h-screen p-4">
                                        <div className="text-[#FF733B] text-2xl grid justify-items-end gap-6" onClick={() => setOpen(!open)}>
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

            }
        </div>
    );
};

export default Header;