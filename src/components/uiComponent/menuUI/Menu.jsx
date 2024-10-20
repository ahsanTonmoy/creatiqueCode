'use client'

import React from 'react';
import { menuItems } from '@/utills/menu/menuItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from "react-icons/io";

const Menu = ({ style }) => {
    const pathName = usePathname();
    console.log(menuItems.children);
    return (
        <div>
            <ul className={`${style}`}>
                {
                    menuItems.map(menu => 
                        <li className='menuItem relative capitalize font-medium text-lg tracking-widest cursor-pointer' key={menu.route}>
                            {menu.submenu? <div className= 'px-2 lg:hover:text-[#FF8C24] flex justify'>{menu.route} <div className="mt-2 ml-4"><IoIosArrowDown/></div></div>:
                            <Link className={`${pathName === menu.path ? ' px-2 text-[#FF8C24] hover:text-[#095859] transition-all duration-100' : 'px-2 lg:hover:text-[#FF8C24]'}`} href={menu.path}>{menu.route}</Link>}
                            {/*  */}
                            {
                                menu.submenu ? <ul className='submenu hidden lg:absolute lg:min-w-56 bg-white lg:border-b-4 border-[#FF8C24] rounded  lg:pt-6 pt-4 top-10'>
                                    {
                                        menu.submenu.map(item =>
                                            
                                            <li className='hover:bg-[#FF8C24] hover:text-white p-2' key={item.route}>
                                                <Link className={`${pathName === item.path ? ' px-2 text-[#FF8C24] hover:text-white transition-all duration-100' : 'px-2 '}`} href={item.path}>{item.route}</Link>
                                            </li>
                                        )
                                    }
                                </ul> : null}

                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Menu;