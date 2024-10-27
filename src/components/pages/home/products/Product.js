"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import productItem from '@/assects/image/product/productItem.jpg'
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";

const Product = () => {
    const [product, setProduct] = useState([]);
    //  
    useEffect((() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }), [])

    return (
        <div>
            {/*  */}
            <div className='inner-section py-10'>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    <div className="lg:order-first order-last bg-blue-500 content-center lg:my-10">
                        <div className=' capitalize p-10 inner-section grid gap-6 text-white'>
                            {/*  */}
                            <div className=' capitalize font-bold text-xl'>featuerd items </div>
                            {/*  */}
                            <div className=' capitalize'>
                                <article>
                                    Our software products are exceptional, with a focus on innovation, user experience, and quality.
                                </article>
                            </div>
                            {/*  */}
                            <div>
                                <Link href={'#'} className=' border border-white p-2 text-xs font-semibold uppercase'>
                                view all featured items
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* product items */}
                    <div className="lg:col-span-2 ">
                        <div className="product grid lg:grid-cols-3 gap-4 capitalize">

                            {
                                product.slice(0, 6).map(item =>
                                    <div key={item.name} className='product-item cursor-pointer'>
                                        <div className='inner-item bg-white border rounded'>
                                            {/* image block */}
                                            <div className='image-block '>
                                                <Image className='rounded' src={productItem} alt='' />
                                            </div>

                                            {/* text-block */}
                                            <div className=' p-2 grid gap-2'>
                                                {/* prodtct info */}
                                                <div className='grid gap-2'>
                                                    {/*  */}
                                                    <div className='name'>{item.name}</div>
                                                    {/*  */}
                                                    <div className='rateing flex justify-between place-content-center'>
                                                        {/*  */}
                                                        <div className=' flex gap-1 text-xs pt-[6px] text-amber-400	'>
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                        {/*  */}
                                                        <div className=''>
                                                            <Link href={'#'} className=' border px-2 py-1 capitalize text-sm'>live preview</Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/*  */}
                                                <div className='pt-4'>
                                                    <hr />
                                                    {/* prodtct info */}
                                                    {/*  */}
                                                    <div className='script flex justify-between place-content-center py-2'>
                                                        {/*  */}
                                                        <div className=' flex gap-2 text-xs pt-[6px]'>
                                                            <FaLaravel className='mt-[3px]' />

                                                            <span>{item.scriptType}</span>{ }
                                                        </div>
                                                        {/*  */}
                                                        <div className=' text-xs font-bold pt-2'>
                                                            $ {item.pricing.price}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {/* inner-item */}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;