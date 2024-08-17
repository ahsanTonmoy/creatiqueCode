'use client'
import React from 'react';
import brand from '@/assects/image/brand/logo.png'
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/utills/menu/menuItems';
import { usePathname } from 'next/navigation';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    const pathName = usePathname();
    return (
        <div>
            <footer className='px-8 py-4 bg-white'>
                <div className='footer-content grid lg:gap-2 gap-8 grid-cols-1 md:grid-cols-5 py-10'>
                    {/* footerItem - logo */}
                    <div className='footerItem'>
                        <div className="brand w-32">
                            <Image src={brand} alt='logo-creatiqucode' />
                        </div>
                    </div>
                    {/* footerItem - menu */}
                    <div className='footerItem'>
                        {/* title */}
                        <div className='title uppercase text-lg font-extralight tracking-widest'>links</div>
                        {/* content */}
                        <div className='py-4'>
                            <ul className={``}>
                                {
                                    menuItems.map(menu =>
                                        <li className='pt-2 relative capitalize font-normal' tabIndex={0} role="button" key={menu}><Link className={`${pathName === menu.path ? '  text-[#095859] hover:text-[#000] transition-all duration-100' : ' lg:hover:text-[#095859]'}`} href={menu.path}>{menu.route}</Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    {/* footerItem - help & support */}
                    <div className='footerItem'>
                        {/* title */}
                        <div className='title uppercase text-lg font-extralight tracking-widest'>help & support</div>
                        {/* content */}
                        <div className='py-4'>
                            <ul className={``}>
                                {/*  */}
                                <li className='pt-2 capitalize font-normal' ><Link className='hover:text-[#095859]' href={'/'}>item support</Link>
                                </li>
                                {/*  */}
                                <li className='pt-2 capitalize font-normal' ><Link className='hover:text-[#095859]' href={'/'}>foram</Link>
                                </li>
                                {/*  */}
                                <li className='pt-2 capitalize font-normal' ><Link className='hover:text-[#095859]' href={'/'}>report above</Link>
                                </li>
                                {/*  */}
                                <li className='pt-2 capitalize font-normal' ><Link className='hover:text-[#095859]' href={'/'}>live</Link>
                                </li>


                            </ul>
                        </div>
                    </div>
                    {/* footerItem - products */}
                    <div className='footerItem'>
                        {/* title */}
                        <div className='title uppercase text-lg font-extralight tracking-widest'>products</div>
                        {/* content */}
                        <div className='py-4'>
                            <ul className={``}>
                                {/*  */}
                                <li className='pt-2 capitalize font-normal' ><Link className='hover:text-[#095859]' href={'/'}>software</Link>
                                </li>
                                {/*  */}
                                <li className='pt-2 capitalize font-normal' ><Link className='hover:text-[#095859]' href={'/'}>web application</Link>
                                </li>
                                {/*  */}
                                <li className='pt-2 capitalize font-normal' ><Link className='hover:text-[#095859]' href={'/'}>report above</Link>
                                </li>
                                {/*  */}


                            </ul>
                        </div>
                    </div>
                    {/* footerItem - help & support */}
                    <div className='footerItem'>
                        {/* title */}
                        <div className='title uppercase text-lg font-extralight tracking-widest'>Our Address</div>
                        {/* content */}
                        <div className='py-4 grid gap-4'>
                            {/* address */}
                            <div>2190 Lojiho Terrace, Mirpur, Equal Licensed in 50 states.</div>
                            {/* email */}
                            <div><Link href={'mailto:info@creatiquecode.com'}>info@creatiquecode.com</Link></div>
                            {/* address */}
                            <div>+880 1311 857 085</div>
                            {/* address */}
                            <div>
                                <div className='social-icon my-4 flex gap-4 text-xl'>
                                    {/*  */}
                                    <Link href={'https://www.facebook.com/profile.php?id=100010579990810'}><FaFacebookF></FaFacebookF></Link>
                                    {/*  */}
                                    <Link href={'/'}><FaTwitter></FaTwitter></Link>
                                    {/*  */}
                                    <Link href={'https://www.linkedin.com/in/ahsanur-rahman-tonmoy-1680921b6'}><FaLinkedinIn></FaLinkedinIn></Link>
                                    {/*  */}
                                    <Link href={'https://github.com/ahsanTonmoy'}><FaGithub></FaGithub></Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* copyright */}
                <div className='text-center font-extralight text-xl capitalize'>Copyright @2024 <Link className=' border-b pb-2 boder ' href={'/'}>creatiquecode it</Link></div>
            </footer>
        </div>
    );
};

export default Footer;