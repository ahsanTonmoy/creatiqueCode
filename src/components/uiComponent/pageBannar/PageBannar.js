import React from 'react';

const PageBannar = ({titile}) => {
    return (
        <div>
            <div className='pageBannar text-center capitalize'>
                <div className='p-10 md:p-24'>
                    {/* title */}
                    <div className='text-6xl font-bold'>{titile}</div>
                    {/* sub title */}
                    <div className='text-xl font-extralight my-6'>
                        Agency work with top rated talented people provide qulaity services.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageBannar;