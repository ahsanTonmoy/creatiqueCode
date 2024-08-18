import React from 'react';

const OutLinebtn = ({radius,btnTitle}) => {
    return (
        <div>
            <button className={`outLineBtn p-4 ${radius}`}>{btnTitle}</button>
        </div>
    );
};

export default OutLinebtn;