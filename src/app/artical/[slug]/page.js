
import React from 'react';
import DetailsPage from '@/components/shared/detailsPage/DetailsPage';
const page = ({params}) => {
    console.log(params.slug);
    return (
        <div>
           <DetailsPage/>
        </div>
    );
};

export default page;