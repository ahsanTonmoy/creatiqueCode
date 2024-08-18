import React from 'react';

const OutLinebtn = ({radius,btnTitle}) => {
    return (
        <div>
            <button className={`outLineBtn p-3 ${radius} capitalize font-semibold`}>{btnTitle}</button>
        </div>
    );
};

export default OutLinebtn;