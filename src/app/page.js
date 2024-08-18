import Articals from '@/components/pages/home/articals/Articals';
import Bannar from '@/components/pages/home/bannar/Bannar';
import Consuletion from '@/components/pages/home/consuletion/Consuletion';
import Services from '@/components/pages/home/services/Services';
import Testimonal from '@/components/pages/home/testimonal/Testimonal';
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
      {/* f */}
      <div className='container'>
        <Consuletion/>
      </div>
      {/* s */}
      <div className='secendary-bg container'>
        <Testimonal/>
      </div>
      {/* f */}
      <div className=' container'>
        <Articals/>
      </div>
    </div>
  );
};

export default page;