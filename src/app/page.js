import Articals from '@/components/pages/home/articals/Articals';
import Bannar from '@/components/pages/home/bannar/Bannar';
import Consuletion from '@/components/pages/home/consuletion/Consuletion';
import News from '@/components/pages/home/news/News';
import Services from '@/components/pages/home/services/Services';
import Testimonal from '@/components/pages/home/testimonal/Testimonal';
import React from 'react';

const page = () => {
  return (
    <>
      {/* f */}
      <div className='p-4 md:p-20'>
        <Bannar/>
      </div>
      {/* s */}
      <div className='secendary-bg p-4 md:p-20'>
        <Services/>
      </div>
      {/* f */}
      <div className='p-4 md:p-20'>
        <Consuletion/>
      </div>
      {/* s */}
      <div className='secendary-bg p-4 md:p-20'>
        <Testimonal/>
      </div>
      {/* f */}
      <div className=' p-4 md:p-20'>
        <Articals/>
      </div>
      {/* s */}
      <div className='secendary-bg p-4 md:p-20'>
        <News/>
      </div>
    </>
  );
};

export default page;