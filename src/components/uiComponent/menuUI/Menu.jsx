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
                        <li className='menuItem relative capitalize font-bold text-lg' tabIndex={0} role="button" key={menu}><Link className={`${pathName === menu.path ? ' border-l-2 lg:border-l-0 lg:border-b pb-1 px-2 border-[#095859] hover:text-[#095859] transition-all duration-100': 'px-2 lg:hover:text-[#095859]'}`} href={menu.path}>{menu.route}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Menu;