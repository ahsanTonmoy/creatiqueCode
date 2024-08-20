import React from 'react';

const PageBannar = ({ titile }) => {
    return (
        <div className='md:p-4'>
            <div className='pageBannar text-center capitalize py-20 '>
                <div className='p-4 md:p-24'>
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