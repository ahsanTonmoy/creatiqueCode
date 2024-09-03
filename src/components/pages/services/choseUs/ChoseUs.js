import shape179 from '@/assects/image/shape/shape_179.svg'
import { Accordion, AccordionSummary, Typography } from '@mui/material';
import Image from 'next/image';
import { MdExpandMore } from 'react-icons/md';
import AccordionDetails from '@mui/material/AccordionDetails';
import { TiArrowSortedDown } from "react-icons/ti";
const ChoseUs = () => {
    return (
        <div >
            {/*  */}
            <div className=' capitalize px-4 py-20'>
                {/*  */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* title */}
                    <div className="grid px-4">
                        {/* sub title */}
                        <div className="text-2xl text-black opacity-30 font-bold">Why us?</div>
                        {/* title */}
                        <div className="sec-title !p-0 text-5xl w-8/12 font-bold">Why <span className="heighLight">choose</span> creatique code.</div>
                        {/* text */}
                        <div className="text-black opacity-30 text-3xl">We helping our client to fullfill their needs with our expert.</div>
                        {/* sub title */}
                        <div className="my-3 hidden md:block"><Image src={shape179} alt='' /></div>
                    </div>
                    {/* content */}
                    <div className="md:m-4 m-1 p-4 md:p-10 bg-white rounded-lg h-fit ">
                        <Accordion defaultExpanded className=' !shadow-none py-4'>
                            <AccordionSummary
                                expandIcon={<TiArrowSortedDown />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className='font-bold text-2xl'>Web Design & Development</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        {/*  */}
                        <Accordion className=' !shadow-none py-4'>
                            <AccordionSummary
                                expandIcon={<TiArrowSortedDown />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography  className='font-bold text-2xl'>Google ads setup & management
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        {/*  */}
                        <Accordion className=' !shadow-none py-4'>
                            <AccordionSummary
                                expandIcon={<TiArrowSortedDown />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography  className='font-bold text-2xl'>Google ads setup & management
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering teams at Facebook.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                </div>
            </div>

            {/*  */}
            <div className="shapes shape-two absolute z-1 w-20 h-20 bottom-[-5%] rotate-12 animate-[rotated_35s_infinite_linear] rounded-[15px] right-[10%] bg-[#FF8C24] xsm:!hidden"></div>
        </div>
    );
};

export default ChoseUs;