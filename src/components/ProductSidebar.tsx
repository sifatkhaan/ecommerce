'use client'
import React, { useRef, useState } from 'react'
import { Collapse, Checkbox } from "antd";
import { IoMdStar, IoMdStarOutline, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import NewProduct from './NewProduct';
import ShopNewProduct from './ShopNewProduct';

interface CustomPanelHeaderProps {
    headerText: string;
}
export default function ProductSidebar() {
    const { Panel } = Collapse;
    return (
        <div>
            <div className='bg-white lg:p-3 lg:py-6'>
                <Collapse defaultActiveKey={['1']}
                    expandIconPosition="right"
                    ghost
                    className='font-bold'
                >
                    <Panel header="BRAND" key="1" className='border-y lg:block'>
                        <p><Checkbox className='font-semibold'>ZARA</Checkbox></p>
                        <p><Checkbox className='font-semibold'>NIKE</Checkbox></p>
                        <p><Checkbox className='font-semibold'>ADIDAS</Checkbox></p>
                        <p><Checkbox className='font-semibold'>LOTTO</Checkbox></p>
                        <p><Checkbox className='font-semibold'>PUMA</Checkbox></p>
                    </Panel>
                </Collapse>
            </div>
            {/* <NewProduct/> */}
            <ShopNewProduct/>
            {/* <div className='pl-3 lg:mt-6 bg-white lg:p-3'>
                <div className='flex justify-between items-center border-b'>
                    <div><h3 className="text-lg uppercase font-semibold  p-2">new product</h3></div>
                    <div className='flex px-4 text-lg '>
                        <span className='mr-3 lg:mr-2' onClick={handlePrev}><IoIosArrowBack /></span>
                        <span onClick={handleNext}><IoIosArrowForward /></span>
                    </div>
                </div>
                <Slider ref={slideRef} {...setting}>
                <div>
                    
                        <div className='flex mt-4 '>
                            <div>
                                <img src="/assets/images/category/media/3.jpg" alt="" className='border' />
                            </div>
                            <div className='flex justify-center items-center mx-2'>
                                <div className="product-detail">
                                    <ul className="flex">
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStarOutline className='text-orange-300 text-lg' /></li>
                                    </ul>
                                    <a href="#"><p className='text-base py-1'>Sumsung Galaxy</p></a>
                                    <h6 className='text-cyan-600 text-base font-semibold'>$47.05 <span className='text-gray-700 line-through'>$55.21</span></h6>
                                </div>
                            </div>

                        </div>
                        <div className='flex mt-4 '>
                            <div>
                                <img src="/assets/images/category/media/2.jpg" alt="" className='border' />
                            </div>
                            <div className='flex justify-center items-center mx-2'>
                                <div className="product-detail">
                                    <ul className="flex">
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStarOutline className='text-orange-300 text-lg' /></li>
                                    </ul>
                                    <a href="#"><p className='text-base py-1 capitalize'>usha table fan</p></a>
                                    <h6 className='text-cyan-600 text-base font-semibold'>$47.05 <span className='text-gray-700 line-through'>$55.21</span></h6>
                                </div>
                            </div>

                        </div>
                        <div className='flex mt-4 '>
                            <div>
                                <img src="/assets/images/category/media/1.jpg" alt="" className='border' />
                            </div>
                            <div className='flex justify-center items-center mx-2'>
                                <div className="product-detail">
                                    <ul className="flex">
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStarOutline className='text-orange-300 text-lg' /></li>
                                    </ul>
                                    <a href="#"><p className='text-base py-1 capitalize'>Bajaj Rex Mixer</p></a>
                                    <h6 className='text-cyan-600 text-base font-semibold'>$47.05 <span className='text-gray-700 line-through'>$55.21</span></h6>
                                </div>
                            </div>

                        </div>
                </div>
                <div>
                <div className='flex mt-4 '>
                            <div>
                                <img src="/assets/images/category/media/1.jpg" alt="" className='border' />
                            </div>
                            <div className='flex justify-center items-center mx-2'>
                                <div className="product-detail">
                                    <ul className="flex">
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStarOutline className='text-orange-300 text-lg' /></li>
                                    </ul>
                                    <a href="#"><p className='text-base py-1 capitalize'>Bajaj Rex Mixer</p></a>
                                    <h6 className='text-cyan-600 text-base font-semibold'>$47.05 <span className='text-gray-700 line-through'>$55.21</span></h6>
                                </div>
                            </div>

                        </div>
                        <div className='flex mt-4 '>
                            <div>
                                <img src="/assets/images/category/media/2.jpg" alt="" className='border' />
                            </div>
                            <div className='flex justify-center items-center mx-2'>
                                <div className="product-detail">
                                    <ul className="flex">
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStarOutline className='text-orange-300 text-lg' /></li>
                                    </ul>
                                    <a href="#"><p className='text-base py-1 capitalize'>usha table fan</p></a>
                                    <h6 className='text-cyan-600 text-base font-semibold'>$47.05 <span className='text-gray-700 line-through'>$55.21</span></h6>
                                </div>
                            </div>

                        </div>
                        <div className='flex mt-4 '>
                            <div>
                                <img src="/assets/images/category/media/3.jpg" alt="" className='border' />
                            </div>
                            <div className='flex justify-center items-center mx-2'>
                                <div className="product-detail">
                                    <ul className="flex">
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                        <li><IoMdStarOutline className='text-orange-300 text-lg' /></li>
                                    </ul>
                                    <a href="#"><p className='text-base py-1'>Sumsung Galaxy</p></a>
                                    <h6 className='text-cyan-600 text-base font-semibold'>$47.05 <span className='text-gray-700 line-through'>$55.21</span></h6>
                                </div>
                            </div>

                        </div>
                    

                </div>
                </Slider>
            </div> */}
        </div>
    )
}
