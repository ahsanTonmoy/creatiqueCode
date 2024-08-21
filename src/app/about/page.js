import Info from '@/components/pages/about/info/Info';
import Team from '@/components/pages/about/ourTeam/Team';
import PageBannar from '@/components/uiComponent/pageBannar/PageBannar';
import React from 'react';

// title
export const metadata = {
    title: 'About'
}
const page = () => {
    return (
        <div>
            {/*  */}
            <div className=''><PageBannar titile={'about us'}/></div>
            {/*  */}
            <div className='pageContainer'><Info/></div>
            <div className='py-10 pageContainer'><Team></Team></div>
        </div>
    );
};

export default page;