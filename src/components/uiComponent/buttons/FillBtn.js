import React from 'react';

const FillBtn = ({btnTitle,radius}) => {
    return (
        <div>
            <button className={`fillBtn px-8 py-2 capitalize font-semibold text-white ${radius}`}>{btnTitle}</button>
        </div>
    );
};

export default FillBtn;