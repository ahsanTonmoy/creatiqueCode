import React from 'react';
import brand from '@/assects/image/brand/logo.png'
import Image from 'next/image';
import { menuItems } from '@/utills/menu/menuItems';
import Menu from './../menuUI/Menu';
import FillBtn from '../buttons/FillBtn';
const Header = () => {
    return (
        <div>
            <header className="shadow-lg py-6 px-8">
                <div className="inner-content flex justify-between gap-4">
                    {/* brand */}
                    <div className="brand w-32">
                        <Image src={brand} alt='logo-creatiqucode' />
                    </div>

                    <div className=" flex gap-4">
                        <Menu />

                        <FillBtn radius={' rounded-lg'} btnTitle={'free consutaletion'}/>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;