'use client'
import React, { useState } from 'react'
import { Collapse, Checkbox, Slider } from "antd";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

export default function ShopSidebar({onBrandChange, onColorChange, onSizeChange, onPriceChange, range}:any) {
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
                        <p><Checkbox className='font-semibold' onChange={()=> onBrandChange('zara')}>ZARA</Checkbox></p>
                        <p><Checkbox className='font-semibold' onChange={()=> onBrandChange('nike')}>NIKE</Checkbox></p>
                        <p><Checkbox className='font-semibold' onChange={()=> onBrandChange('adidas')}>ADIDAS</Checkbox></p>
                        <p><Checkbox className='font-semibold' onChange={()=> onBrandChange('lotto')}>LOTTO</Checkbox></p>
                        <p><Checkbox className='font-semibold' onChange={()=> onBrandChange('puma')}>PUMA</Checkbox></p>
                    </Panel>
                    <Panel header="COLORS" key="2" className='uppercase border-y lg:block'>
                        <p><Checkbox className='custom-checkbox font-semibold' onChange={()=> onColorChange('white')}>White</Checkbox></p>
                        <p><Checkbox className='custom-checkbox1 font-semibold' onChange={()=> onColorChange('brown')}>Brown</Checkbox></p>
                        <p><Checkbox className='custom-checkbox2 font-semibold' onChange={()=> onColorChange('red')}>Red</Checkbox></p>
                        <p><Checkbox className='custom-checkbox3 font-semibold' onChange={()=> onColorChange('teal')}>Teal</Checkbox></p>
                        <p><Checkbox className='custom-checkbox4 font-semibold' onChange={()=> onColorChange('pink')}>Pink</Checkbox></p>
                    </Panel>
                    <Panel header="SIZE" key="3" className='border-y lg:block'>
                        <p><Checkbox className='font-semibold' onChange={()=> onSizeChange('small')}>S</Checkbox></p>
                        <p><Checkbox className='font-semibold' onChange={()=> onSizeChange('medium')}>M</Checkbox></p>
                        <p><Checkbox className='font-semibold' onChange={()=> onSizeChange('large')}>L</Checkbox></p>
                        <p><Checkbox className='font-semibold' onChange={()=> onSizeChange('xl')}>XL</Checkbox></p>
                        <p><Checkbox className='font-semibold' onChange={()=> onSizeChange('xxl')}>XXL</Checkbox></p>
                    </Panel>
                    <Panel header="PRICE" key="4" className='border-y lg:block'>
                        <Slider
                            range
                            min={10}
                            max={200}
                            defaultValue={[10, 200]}
                            value={range}
                            onChange={onPriceChange}
                            tooltip={{ formatter: value => `৳${value}` }}
                        />
                        <div className='p-2 text-base lg:text-lg'>
                            Selected Range: <span className='font-normal'>৳ {range[0]} - ৳ {range[1]}</span>
                        </div>
                    </Panel>
                </Collapse>
            </div>
            <div className='pl-3 lg:mt-6 bg-white lg:p-3'>
                <h3 className="text-lg uppercase font-semibold border-b p-2">new product</h3>
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
            {/* <NewProduct/> */}
        </div>
    )
}
