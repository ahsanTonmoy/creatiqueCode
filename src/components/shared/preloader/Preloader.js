// components/Preloader.js
'use client';

import { useEffect, useState } from 'react';
import loader from '../../../assects/image/preloader-crop.gif'
import Image from 'next/image';
const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 6000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div >
            <div className='grid place-content-center bg-white h-screen absolute top-0 left-0 z-[9999] w-[98%]'>
                <Image  src={loader} alt='' />
            </div>
        </div>
    );
};



export default Preloader;
