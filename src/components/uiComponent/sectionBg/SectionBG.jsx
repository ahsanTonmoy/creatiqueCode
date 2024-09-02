'use client'
import Image from "next/image";
import shapeL from '@/assects/image/shape/shape_88.svg'
import shapeR from '@/assects/image/shape/shape_89.svg'


const SectionBG = ({ bgColor, xFector, yFector, content}) => {
    return (
        <div>
            {/*  */}
            <div className={`${bgColor} relative`}>
                <div className="p-4 md:p-10 lg:p-20">
                    {/*  */}
                    <div className={`${yFector}`}>
                        <div className="shapes shape-one rounded-[50%] absolute  w-9 h-9 right-[21%] -top-5 bg-[#007BFF] "></div>
                        <div className="shapes shape-two rounded-[50%] absolute  w-9 h-9 left-[30%] -bottom-5 bg-[#FF7228]"></div>
                        <div className="shapes shape-three rounded-[50%] absolute  w-2.5 h-2.5 animate-[jumpThree_5s_infinite_linear] left-[4%] top-[43%] bg-[#00D8AF]"></div>
                    </div>
                    {/*  */}
                    <div className={`${xFector}`}>
                    <Image src={shapeL} alt="" className="lazy-img shapes shape-four absolute left-0 bottom-[6%]"/>
                    <Image src={shapeR} alt="" className="lazy-img shapes shape-five absolute right-0 top-[6%]"></Image>
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionBG;