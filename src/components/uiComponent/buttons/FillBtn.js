import React from 'react';

const FillBtn = ({btnTitle,radius}) => {
    return (
        <div>
            <button className={`fillBtn px-4 py-2 mx-2 font-semibold text-white ${radius}`}>{btnTitle}</button>
        </div>
    );
};

export default FillBtn;