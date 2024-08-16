import React from 'react';
import brand from '@/assects/image/brand/logo.png'
import Image from 'next/image';
import { menuItems } from '@/utills/menu/menuItems';
import Menu from './../menuUI/Menu';
import FillBtn from '../buttons/FillBtn';
const Header = () => {
    return (
        <div>
            <header className="container shadow-lg p-2">
                <div className="inner-content flex justify-between">
                    {/* brand */}
                    <div className="brand w-32">
                        <Image src={brand} alt='logo-creatiqucode' />
                    </div>

                    <div className=" p-4 flex">
                        <Menu />

                        <FillBtn btnTitle={'check'}/>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;