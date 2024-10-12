import DetailsPage from '@/components/shared/detailsPage/DetailsPage';
import React from 'react';

const page = ({params}) => {
    console.log(params.slug);
    return (
        <div>
            <DetailsPage item={params.slug}/>
        </div>
    );
};

export default page;