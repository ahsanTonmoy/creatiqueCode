import Info from '@/components/pages/about/info/Info';
import Team from '@/components/pages/about/ourTeam/Team';
import PageBannar from '@/components/uiComponent/pageBannar/PageBannar';
import React from 'react';

const page = () => {
    return (
        <div>
            {/*  */}
            <div className=''><PageBannar titile={'about us'}/></div>
            {/*  */}
            <div className='container'><Info/></div>
            <div className='py-10'><Team></Team></div>
        </div>
    );
};

export default page;