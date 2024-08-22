'use client'
import { menuItems } from '@/utills/menu/menuItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Menu = ({style}) => {
    const pathName = usePathname();
    return (
        <div>
            <ul className={`${style}`}>
                {
                    menuItems.map(menu =>
                        <li className='menuItem relative capitalize font-medium text-lg tracking-widest' key={menu.route}>
                            <Link className={`${pathName === menu.path ? ' px-2 text-[#FF8C24] hover:text-[#095859] transition-all duration-100': 'px-2 lg:hover:text-[#FF8C24]'}`} href={menu.path}>{menu.route}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Menu;