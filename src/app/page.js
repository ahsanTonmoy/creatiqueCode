import Bannar from '@/components/pages/home/bannar/Bannar';
import Services from '@/components/pages/home/services/Services';
import React from 'react';

const page = () => {
  return (
    <div>
      {/* f */}
      <div className='container'>
        <Bannar/>
      </div>
      {/* s */}
      <div className='secendary-bg container'>
        <Services/>
      </div>
    </div>
  );
};

export default page;