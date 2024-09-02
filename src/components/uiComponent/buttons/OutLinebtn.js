import React from 'react';

const OutLinebtn = ({radius,btnTitle}) => {
    return (
        <div>
            <button className={`outLineBtn py-2 px-8 ${radius} capitalize font-semibold`}>{btnTitle}</button>
        </div>
    );
};

export default OutLinebtn;