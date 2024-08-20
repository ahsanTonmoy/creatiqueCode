import Info from '@/components/pages/about/info/Info';
import PageBannar from '@/components/uiComponent/pageBannar/PageBannar';
import React from 'react';

const page = () => {
    return (
        <div>
            {/*  */}
            <div className=''><PageBannar titile={'about us'}/></div>
            {/*  */}
            <div className='container'><Info/></div>
        </div>
    );
};

export default page;