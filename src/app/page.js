import Articals from '@/components/pages/home/articals/Articals';
import Bannar from '@/components/pages/home/bannar/Bannar';
import Consuletion from '@/components/pages/home/consuletion/Consuletion';
import News from '@/components/pages/home/news/News';
import Services from '@/components/pages/home/services/Services';
import Testimonal from '@/components/pages/home/testimonal/Testimonal';
import SectionBG from '@/components/uiComponent/sectionBg/SectionBG';
import Head from 'next/head';
import React from 'react';
import Preloader from './../components/shared/preloader/Preloader';

const page = () => {
  return (
    <>
    <Preloader/>
      {/* f */}
      <div className='px-4 lg:px-20 relative'>
        <Bannar />
      </div>
      <SectionBG
        bgColor={'secendary-bg'}
        content={<div className='pageContainer '>
          <Services />
          <Consuletion />
          <Testimonal />
        </div>
        }      >
      </SectionBG>

      {/* s */}
     
      <div className='px-4 md:px-10 lg:px-20 pageContainer'>
        <Articals />
      </div>
      {/* s */}
      <SectionBG
        bgColor={'secendary-bg'}
        xFector={'hidden'}
        content={<div className='pageContainer px-4 lg:px-20'>
          <News/>
        </div>
        }      >
      </SectionBG>
    </>
  );
};

export default page;