import Articals from '@/components/pages/home/articals/Articals';
import Bannar from '@/components/pages/home/bannar/Bannar';
import Consuletion from '@/components/pages/home/consuletion/Consuletion';
import News from '@/components/pages/home/news/News';
import Services from '@/components/pages/home/services/Services';
import Testimonal from '@/components/pages/home/testimonal/Testimonal';
import SectionBG from '@/components/uiComponent/sectionBg/SectionBG';
import Head from 'next/head';
import React from 'react';

const page = () => {
  return (
    <>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    </Head>
      {/* f */}
      <div className='px-4 md:px-20'>
        <Bannar />
      </div>
      <SectionBG
        bgColor={'secendary-bg'}
        content={<div className='pageContainer'>
          <Services />
          <Consuletion />
        </div>
        }      >
      </SectionBG>

      {/* s */}
      <div className=' px-4 md:px-20 pageContainer'>
        <Testimonal />
      </div>
      {/* f */}
      <div className='px-4 md:px-20 pageContainer'>
        <Articals />
      </div>
      {/* s */}
      <SectionBG
        bgColor={'secendary-bg'}
        content={<div className='pageContainer'>
          <News/>
        </div>
        }      >
      </SectionBG>
    </>
  );
};

export default page;