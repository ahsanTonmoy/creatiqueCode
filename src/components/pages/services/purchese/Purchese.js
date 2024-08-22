import Image from 'next/image';
import shape20 from '../../../../assects/image/shape/shape_20.svg'
import shape21 from '../../../../assects/image/shape/shape_21.svg'
import shape22 from '../../../../assects/image/shape/shape_22.svg'
import shape23 from '../../../../assects/image/shape/shape_23.svg'
const Purchese = () => {
    return (
        <div>
            <div className='p-3 md:p-20'>
                {/*  */}
                <div className="wrapper relative mt-[160px] lg:mt-[100px] md:mt-[100px] sm:mt-[100px] xsm:mt-[100px]">
                    <div className="container">
                        <div className="flex flex-wrap mx-[-12px]">
                            <div className="xl:w-8/12  lg:w-10/12  m-auto text-center w-full flex-[0_0_auto] px-[12px] max-w-full">&gt;
                                <div className="title-style-one text-5xl leading-tight">
                                    <h2 className="sec-title font-bold text-black !m-0">Ready to take plan? It’s just a matter of <span className=" inline-block relative z-[1] before:content-[''] before:absolute before:w-[98%] before:h-3 before:z-[-1] before:left-1 before:bottom-2.5 before:bg-[rgba(255,139,37,0.4)]">one clike</span></h2>
                                </div>
                                <p className="text-[24px] 2xl:text-[22px] lg:text-[19px] md:text-[19px] sm:text-[19px] xsm:text-[19px] leading-[1.67em]  text-black  pt-10  pb-[35px]  lg:pt-[30px] md:pt-[30px] sm:pt-[30px] xsm:pt-[30px]  lg:pb-5 wow fadeInUp" >Try it risk free — we don’t charge cancellation fees.</p>
                                <a href="#" className="btn-two text-[18px] py-5 lg:text-[16px] md:text-[16px] sm:text-[16px] xsm:text-[16px] text-white leading-[60px] relative transition-all duration-[0.3s] ease-[ease-in-out] px-[50px] rounded-[30px] bg-black hover:bg-[var(--prime-one)] font-medium wow fadeInUp" >Purchase Now</a>
                            </div>
                        </div>
                    </div>
                    <Image src={shape20} alt="" className="lazy-img shapes absolute shape-one top-10 left-6 " />
                    <Image src={shape21} alt="" className="lazy-img shapes absolute shape-two bottom-3 left-20" />
                    <Image src={shape22} alt="" className="lazy-img shapes absolute shape-three butttom-16 right-6" />
                    <Image src={shape23} alt="" className="lazy-img shapes absolute shape-four top-14 right-12" />
                </div>
            </div>
        </div>
    );
};

export default Purchese;