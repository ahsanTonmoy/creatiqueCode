import React from 'react';
import loader from '../assects/image/preloader-crop.gif'
import Image from 'next/image';
const Loading = () => {
    return (
        <div>
            <div cLassName='grid place-content-center bg-white h-screen absolute top-0 left-0 z-[9999] w-screen'>
                <Image src={loader} alt='' />
            </div>
        </div>
    );
};

export default Loading;