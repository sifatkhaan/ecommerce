"use client"
import BreadCrump from '@/components/BreadCrump'
import React, { useEffect, useRef, useState } from 'react'
import { FaFilter, FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Button, DrawerProps, Drawer, Checkbox, Input } from "antd";
import ProductSidebar from '@/components/ProductSidebar';
import { IoIosArrowBack, IoMdStar, IoMdStarOutline } from 'react-icons/io';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from '@/components/Card';
export default function Product() {
    const [open, setOpen] = useState(false);
    const [grid, setGrid] = useState(5)
    const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
    // slider
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [navLg1, setLgNav1] = useState(null);
    const [navLg2, setLgNav2] = useState(null);

    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const sliderLg1 = useRef(null);
    const sliderLg2 = useRef(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
        setLgNav1(sliderLg1.current);
        setLgNav2(sliderLg2.current);
    }, []);

    const mobileSettingsMain = {
        arrows: true,
        asNavFor: nav2,
        ref: slider1,
        adaptiveHeight: true,
    };

    const mobileSettingsThumbs = {
        
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: nav1,
        ref: slider2,
        focusOnSelect: true,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
    };

    const settingsMain = {
        asNavFor: navLg2,
        ref: sliderLg1,
        adaptiveHeight: true,
    };
    const settingsThumbs = {
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: navLg1,
        ref: sliderLg2,
        focusOnSelect: true,
        dots: false,
        centerMode: true,
        centerPadding: "0px",

    };

    const sliderImage = [
        { image: "/assets/images/product/001.jpg" },
        { image: "/assets/images/product/002.jpg" },
        { image: "/assets/images/product/003.jpg" },
        { image: "/assets/images/product/004.jpg" }
    ]
    //end slider
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [quantity, setQuantity] = useState(0)
    //quantity
    const handleQtyChange = (e: any) => {
        const value = e.target.value;
        if (value === "") {
            setQuantity(0);
        } else {
            const parsedValue = parseInt(value, 10);
            if (!isNaN(parsedValue)) {
                setQuantity(parsedValue);
            }
        }
    };

    const handlePlus = () => {
        setQuantity(prevQty => prevQty + 1)
    }
    const handleMinus = () => {
        setQuantity(prevQty => prevQty > 0 ? prevQty - 1 : 0)
    }

    const slideToShow= [
        {
          id:1,
          image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
          image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
          name:'Tomato Hybrid Vegetable Seeds',
          price:70,
          discounted:60,
          brand:'zara',
          colors:'white',
          size:'small'
        },
        {
          id:2,
          image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
          image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
          name:'Tomato Hybrid Vegetable Seeds',
          price:72,
          discounted:65,
          brand:'nike',
          colors:'brown',
          size:'large'
        },
        {
          id:3,
          image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
          image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
          name:'Tomato Hybrid Vegetable Seeds',
          price:75,
          discounted:68,
           brand:'adidas',
          colors:'red',
          size:'medium'
        },
        {
          id:4,
          image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
          image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
          name:'Tomato Hybrid Vegetable Seeds',
          price:80,
          discounted:70,
           brand:'lotto',
          colors:'teal',
          size:'xl'
        },
        {
          id:5,
          image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
          image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
          name:'Tomato Hybrid Vegetable Seeds',
          price:83,
          discounted:75,
           brand:'puma',
          colors:'pink',
          size:'xxl'
        },
        {
          id:6,
          image:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
          image2:'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
          name:'Tomato Hybrid Vegetable Seeds',
          price:75,
          discounted:70,
           brand:'nike',
          colors:'white',
          size:'medium'
        },
      ]

    return (
        <div className='h-auto bg-green-50'>
            <BreadCrump pageName='Product' lastName='Product' />
            <div className='m-2 mx-8 lg:mx-20'>
            <div className='lg:flex '>
                <div className='w-full lg:w-1/4'>
                    <div className='lg:hidden'>
                        <Button className='bg-blue-400 text-white' onClick={showDrawer}><FaFilter className='text-white' />Filter</Button>
                        <div className='m-2'>
                            <Slider {...mobileSettingsMain} ref={slider1}>
                                {sliderImage.map((img, idx) => (
                                    <div key={idx} className='flex justify-center items-center'>
                                        <div className='w-full flex justify-center items-center'>
                                            <img
                                                src={img.image}
                                                alt={`Slide ${idx}`}
                                                className='w-[75%] md:w-[50%] h-auto object-cover'
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className='m-2'>
                            <Slider {...mobileSettingsThumbs} ref={slider2}>
                                {sliderImage.map((img, idx) => (
                                    <div key={idx} className='m-1'>
                                        <img src={img.image} alt={`Thumbnail ${idx}`} className='m-1 border w-[80%] md:w-[50%] h-full cursor-pointer transform transition duration-300 hover:scale-105 hover:border-orange-500' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className='hidden lg:block lg:mx-auto'>
                        <ProductSidebar />
                    </div>
                </div>
                <div className='w-full lg:w-1/3 lg:ml-10'>
                    <div className='hidden lg:block'>
                        <div className='m-2'>
                            <Slider {...settingsMain} ref={sliderLg1}>
                                {sliderImage.map((img, idx) => (
                                    <div key={idx} className='flex justify-center items-center'>
                                        <img src={img.image} alt={`Slide ${idx}`} className='lg:max-w-full lg:h-auto lg:mx-auto' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className='m-2'>
                            <Slider {...settingsThumbs} ref={sliderLg2} className="mt-4">
                                {sliderImage.map((img, idx) => (
                                    <div key={idx} className='m-1'>
                                        <img src={img.image} alt={`Thumbnail ${idx}`} className='m-1 border w-[85%] h-auto cursor-pointer transform transition duration-300 hover:scale-105 hover:border-orange-500' />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/3'>
                    <div className='grid text-gray-700 md:full lg:w-3/4'>
                        <div className='m-2 grid justify-items-center lg:justify-items-start'>
                            <p className='font-bold text-gray-700 text-center capitalize'>women pink skirt</p>
                            <p className='text-center capitalize'>
                                <span className='text-gray-700 m-1 font-semibold text-sm'>$70</span>
                                <span className='m-1 uppercase text-gray-500 text-xs line-through'>mrp $140</span>
                                <span className='m-1 text-sky-500 text-xs font-bold'>50% off</span>
                            </p>

                            <ul className="flex justify-center items-center">
                                <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                <li><IoMdStar className='text-orange-300 text-lg' /></li>
                                <li><IoMdStarOutline className='text-orange-300 text-lg' /></li>
                                <li className='text-sky-500 text-xs mx-1' >(6 Reviews)</li>
                            </ul>

                        </div>
                        <div className='grid lg:grid-cols-2 lg:gap-2 justify-items-center text-center'>
                            <div className='flex justify-center items-center bg-gray-100 p-1.5 m-1 w-3/4 max-w-72 lg:w-full rounded-md' >
                                <img src="/assets/images/farm/logo/batch_b.png" alt="" className='mx-1 w-5 h-auto' />
                                <span className='text-gray-500 font-sans capitalize'>3 best seller</span>
                            </div>
                            <div className='flex justify-center items-center bg-gray-100 p-1.5 px m-1 w-3/4 max-w-72 lg:w-full rounded-md'>
                                <img src="/assets/images/farm/logo/user_b.png" alt="" className='mx-1 w-5 h-auto' />
                                <span className='text-gray-500 font-sans capitalize'>44 Active view this</span>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 p-4 border-y lg: text-gray-700'>
                        <p className='text-center lg:text-start font-bold'>Hurry up ! Deal End In:</p>
                        <p className='text-center lg:text-start lg:px-0 p-2'>EXPIRED</p>
                    </div>
                    <div className='grid justify-items-center lg:justify-items-start'>
                        <div className='text-gray-700 lg:w-3/4 max-w-96 lg:max-w-none'>
                            <div>
                                <div>
                                    <span className='font-bold'>Select Size</span>
                                    <span className='m-1 text-sky-500 font-bold'> Size Chart</span>
                                </div>
                                <div className='m-1 grid grid-cols-5 gap-1 lg:gap-2 '>
                                    <div className='py- lg:py-2 border rounded-md hover:bg-gray-200 text-center'>S</div>
                                    <div className='py- lg:py-2 border rounded-md hover:bg-gray-200 text-center'>M</div>
                                    <div className='py- lg:py-2 border rounded-md hover:bg-gray-200 text-center'>L</div>
                                    <div className='py- lg:py-2 border rounded-md hover:bg-gray-200 text-center'>XL</div>
                                    <div className='py- lg:py-2 border rounded-md hover:bg-gray-200 text-center'>2XL</div>
                                </div>
                            </div>
                            <div className='m-2'>
                                <p className='text-center lg:text-start font-bold'>Color</p>
                                <div className='grid grid-cols-7 justify-center items-center m-2 lg:mx-0'>
                                    <p><Checkbox className='custom-checkbox font-semibold'></Checkbox></p>
                                    <p><Checkbox className='custom-checkbox1 font-semibold'></Checkbox></p>
                                    <p><Checkbox className='custom-checkbox2 font-semibold'></Checkbox></p>
                                    <p><Checkbox className='custom-checkbox3 font-semibold'></Checkbox></p>
                                    <p><Checkbox className='custom-checkbox4 font-semibold'></Checkbox></p>
                                    <p><Checkbox className='custom-checkbox5 font-semibold'></Checkbox></p>
                                    <p><Checkbox className='custom-checkbox6 font-semibold'></Checkbox></p>
                                </div>
                            </div>
                            <div className='grid lg:justify-items-start m-2'>
                                <p className='text-center lg:text-start font-bold'>Quantity</p>
                                <div className='flex justify-center items-center w-2/3 mx-auto lg:mx-0 bg-white border m-2 lg:py-1'>
                                    <div className='px-3 bg-white border-r cursor-pointer' onClick={handleMinus}><FiMinus /></div>
                                    <div className='bg-white'>
                                        <Input className='text-center bg-white rounded-none border-none' type="text" value={quantity} onChange={handleQtyChange} />
                                    </div>
                                    <div className='grid justify-items-center px-3 bg-white border-l cursor-pointer' onClick={handlePlus}><p><FiPlus /></p></div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center lg:justify-start lg:ml-2'>
                                <div className='flex items-center justify-center text-white bg-sky-400 p-2 w-2/3 max-w-96 shake-icon hover:cursor-pointer'>
                                    <div className='mx-2 cart-icon' ><FaCartShopping /></div>
                                    <div className='font-semibold'>Add To Cart</div>
                                </div>
                                <div className='bg-sky-400 text-white p-3 ml-2 hover:cursor-pointer'><FaHeart className='' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='my-4 border-y text-gray-700 pb-3'>
                        <div className='text-center lg:text-start font-bold mt-4 ml-2'>Delivery Location</div>
                        <div className='grid grid-cols-1 justify-items-center lg:justify-items-start gap-1'>
                            <div className='flex items-center justify-between w-full max-w-96 m-2'>
                                <div className='flex'>
                                    <button className="grid justify-items-center w-1/3 p-3 bg-gray-100 text-gray-600 text-lg rounded-l-md">
                                        <IoLocationOutline />
                                    </button>
                                    <Input
                                        placeholder="Enter PinCode"
                                        className="flex-grow p-1.5 border border-gray-200 rounded-none"
                                    />
                                </div>
                                <div className='bg-sky-400 font-semibold text-white p-2 px-3 ml-2 rounded-md'>Check</div>
                            </div>

                            <div className='w-full max-w-96 m-2'>
                                <div className='flex justify-center bg-gray-100 items-center p-2 lg:w-full rounded-md'>
                                    <img src="/assets/images/farm/logo/car_b.png" alt="" className='mx-2 w-8 h-auto' />
                                    <span className='text-gray-500 font-sans'>Order within 12 hrs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="capitalize text-gray-700 border-b py-2">
                        <h2 className="font-bold">product details</h2>
                        <div className='text-gray-500 text-base font-sans'>
                        <p>
                            Fabric Description:	Silk
                        </p>
                        <p>Fabric Colour:	Blue
                        </p>
                        <p>
                            Set Details:	One

                        </p>
                        <p>Top Description of Design Details:	Print

                        </p>
                        <p>
                            Neck:	Collar

                        </p>
                        <p>
                            Sleeve:	Long

                        </p>
                        <p>
                            Hem:	straight
                        </p>
                        <p>
                            Fit Details:	Regular

                        </p>
                        <p>Bottom Design Details:	straight</p>
                        </div>
                    </div>
                    <div className="flex border-b ">
                        <div className="my-4">
                            <ul className="flex">
                                <li className='m-2'>
                                    <a href="#">
                                    <FaFacebookF />
                                    </a>
                                </li>
                                <li className='m-2'>
                                    <a href="#">
                                        <FaGooglePlusG/>
                                    </a>
                                </li>
                                <li className='m-2'>
                                    <a href="#">
                                    <FaTwitter/>
                                    </a>
                                </li>
                                <li className='m-2'>
                                    <a href="#">
                                    <FaInstagram/>
                                    </a>
                                </li>
                                <li className='m-2'>
                                    <a href="#">
                                        <FaRss/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    
                </div>
                
            </div>
            <div className='flex'>
                <ProductCard
                 items={slideToShow}
                 grid={grid}
            />
            </div>
            </div>
            <div className='lg:hidden'>
                <Drawer
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    open={open}
                    key={placement}
                    bodyStyle={{ padding: 0 }}
                >
                    <div className='my-2'>
                        <Button onClick={onClose} className='border-none font-bold text-lg'><IoIosArrowBack /> Back</Button>
                    </div>
                    <ProductSidebar />
                </Drawer>
            </div>
        </div>
    )
}
