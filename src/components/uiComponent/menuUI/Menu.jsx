import { menuItems } from '@/utills/menu/menuItems';
import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <div>
            <ul className=' flex gap-5'>
                {
                    menuItems.map(menu =>
                        <li className='has-dropdown relative' tabIndex={0} role="button" key={menu}><Link href={menu.path}>{menu.route}</Link>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Menu;