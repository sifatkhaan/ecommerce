'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/components/Card";
import CardSlider from "@/components/slider/CardSlider";

export default function Home() {
  const [grid, setGrid] = useState(5);
  const [category, setCategory] = useState('');

  let book = {
    title: "Tiny Habits",
    author: "BJ Fogg",
    isCheckedOut: false
  }
  
  console.log(book.isCheckedOut, 'book up') 
  let backup = book
  
  book.isCheckedOut = true
  
  console.log(backup === book, 'book')  // true!
  console.log(backup.isCheckedOut, 'back up') 
  console.log(book.isCheckedOut, 'book up') 
  function minimum(array) {
    const newArray = [...array].sort()
   
    return newArray[0]
  }
  
  const items = [7, 1, 9, 4];
  const min = minimum(items);
  console.log(min)
  console.log(items)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settingss = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const serviceImage = [
    {
      image: "/assets/images/farm/logo/shipping_car.png",
      service: "Free Shipping"
    },
    {
      image: "/assets/images/farm/logo/shipping_car.png",
      service: "Festival Discount"
    },
    {
      image: "/assets/images/farm/logo/shipping_car.png",
      service: "Free Shipping"
    },
    {
      image: "/assets/images/farm/logo/shipping_car.png",
      service: "Festival Discount"
    },
    {
      image: "/assets/images/farm/logo/shipping_car.png",
      service: "Free Shipping"
    },
    {
      image: "/assets/images/farm/logo/shipping_car.png",
      service: "Festival Discount"
    },

  ]

  //items
  const slideToShow = [
    {
      id: 1,
      image: '/assets/images/farm/collection/1.jpg',
      image2: '/assets/images/farm/collection/1.jpg',
      name: 'Tomato Hybrid Vegetable Seeds',
      price: 70,
      discounted: 60,
      brand: 'zara',
      colors: 'white',
      size: 'small',
      category: 'organic'
    },
    {
      id: 2,
      image: '/assets/images/product/headPhone.jpeg',
      image2: '/assets/images/product/multiImage.jpeg',
      name: 'Tomato Hybrid Vegetable Seeds',
      price: 72,
      discounted: 65,
      brand: 'nike',
      colors: 'brown',
      size: 'large',
      category: 'vegetables'
    },
    {
      id: 3,
      image: 'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2: 'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name: 'Tomato Hybrid Vegetable Seeds',
      price: 75,
      discounted: 68,
      brand: 'adidas',
      colors: 'red',
      size: 'medium',
      category: 'fish'
    },
    {
      id: 4,
      image: 'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2: 'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name: 'Tomato Hybrid Vegetable Seeds',
      price: 80,
      discounted: 70,
      brand: 'lotto',
      colors: 'teal',
      size: 'xl',
      category: 'fruits'
    },
    {
      id: 5,
      image: 'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/8.jpg',
      image2: 'https://themes.pixelstrap.com/bigdeal/assets/images/farming/product/3.jpg',
      name: 'Tomato Hybrid Vegetable Seeds',
      price: 83,
      discounted: 75,
      brand: 'puma',
      colors: 'pink',
      size: 'xxl',
     category: 'fruits'
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
      size:'medium',
      category: 'organic'
    },
  ]

  const handleCategoryChange = (category:any)=>{
    setCategory(category)
  }
  const filterCategory = slideToShow.filter((item:any)=>{
    if (!category) {
      return true;
    }
    return item?.category?.toLowerCase() === category?.toLowerCase();
  })
  return (
    <div className="bg-slate-200 h-auto">
      <section className="farming-slide home-slide h-auto" style={{ background: 'url(/assets/images/farm/bg.jpg) no-repeat center center/cover', position: "relative" }}>
        <Slider {...settings}>

          <div className="slide-1 no-arrow">
            <div>
              <div className="flex">
                <div className="flex justify-center items-center w-full lg:w-1/2">
                  <div className="row">
                    <div className=" p-0">
                      <div className="p-6">
                        <div className="text-center">
                          <h3 className="uppercase text-xl font-bold text-green-700 lg:text-2xl">organic product</h3>
                          <h2 className="text-4xl lg:text-7xl font-bold text-orange-600 lg:text-black my-1">Bigdeal Farm</h2>
                          <h4 className="uppercase text-green-700 lg:text-2xl font-bold lg:my-4 mb-1">Best Quality product</h4>
                          
                           <Link href="/shop">
                           <button className="p-1.5 px-3 rounded-full bg-green-600 lg:p-2 lg:px-5 lg:hover:bg-black">Shop Now</button>
                           </Link>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:justify-center lg:items-center hidden lg:block" >
                  <img src="/assets/images/farm/1.png" className="" alt="furniture" />

                </div>
              </div>
            </div>
          </div>
          <div className="slide-1 no-arrow">
            <div>
              <div className="flex">
                <div className="flex justify-center items-center w-full lg:w-1/2">
                  <div className="row">
                    <div className=" p-0">
                      <div className="p-6">
                        <div className="text-center">
                          <h3 className="uppercase text-xl font-bold text-green-700 lg:text-2xl">organic product</h3>
                          <h2 className="text-4xl lg:text-7xl font-bold text-orange-600 lg:text-black my-1">Bigdeal Farm</h2>
                          <h4 className="uppercase text-green-700 lg:text-2xl font-bold lg:my-4 mb-1">Best Quality product</h4>
                          <Link href="/shop" className="text-white">
                            <button className="p-1.5 px-3 rounded-full bg-green-600 lg:p-2 lg:px-5 hover:bg-black">Shop Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 lg:justify-center lg:items-center hidden lg:block" >
                  <img src="/assets/images/farm/1.png" className="" alt="furniture" />

                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <section className="m-2">

        <div className=" slider-container sm:mx-auto md:mx-auto lg:mx-10">
          <Slider {...settingss}>
            {serviceImage &&
              serviceImage.map((image, i) => (
                <div
                  key={i}
                  className={`
          ${i > 0 ? 'hidden lg:block' : 'block'}
           bg-white hover:bg-green-600 text-gray-500 hover:text-white lg:hover:text-white rounded-sm mx-2 p-3`}
                >
                  <div className="col-12 pr-0">
                    <div className="services-slide6 no-arrow">
                      <div className="flex justify-center items-center">
                        <div className="services-box pr-1">
                          <Image src={`${image.image}`} height={60} width={60} alt="" />
                        </div>
                        <div className="font-semibold">
                          {image.service}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
          </Slider>
        </div>
      </section>
      <section className="m-2">
        <div className="grid lg:grid-cols-3 lg:mx-10 overflow-hidden">
          <div className="">
            <div className="">
              <div className="flex justify-center lg:items-start items-center relative h-60 lg:h-[650px] w-full overflow-hidden image-container">
                <Image
                  src="/assets/images/farm/collection/1.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full transform transition-transform duration-500 hover:scale-110"
                  alt="banner"
                />
                <div className="absolute p-4 bg-opacity-75 text-center">
                  <h3 className="text-green-600 lg:text-xl lg:font-semibold">Modern Farm</h3>
                  <h4 className="text-orange-600 uppercase font-semibold">Up to 50% off</h4>
                 <Link href="/shop"> <button className="text-white p-1 px-3 rounded-full bg-green-600 lg:px-4 hover:bg-black">Shop Now</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-rows-2 my-1 lg:my-0">
            <div className="mx-1">
              <div className="flex justify-center lg:justify-end items-center relative h-60 lg:h-80 w-full overflow-hidden">
                <Image
                  src="/assets/images/farm/collection/2.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full transform transition-transform duration-500 hover:scale-110"
                  alt="banner"
                />
                <div className="absolute p-4 bg-opacity-75 text-center">
                  <h3 className="text-green-600 lg:text-xl lg:font-semibold">Smart Farming</h3>
                  <h4 className="text-orange-600 uppercase font-semibold">Up to 50% off</h4>
                  <Link href="/shop"><button className=" text-white p-1 px-3 rounded-full  bg-green-600 lg:px-4 hover:bg-black">Shop Now</button></Link>
                </div>
              </div>
            </div>
            <div className="m-1">
              <div className="flex justify-center lg:justify-end items-center relative h-60 lg:h-80 w-full overflow-hidden">
                <Image
                  src="/assets/images/farm/collection/3.jpg"
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full transform transition-transform duration-500 hover:scale-110"
                  alt="banner"
                />
                <div className="absolute p-4 bg-opacity-75 text-center">
                  <h3 className="text-green-600 lg:text-xl lg:font-semibold">Urban Farming</h3>
                  <h4 className="text-orange-600 uppercase font-semibold">Up to 50% off</h4>
                  <Link href={`/shop`}><button className=" text-white p-1 px-3 rounded-full bg-green-600 lg:px-4  hover:bg-black">Shop Now</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative">
              <div className="flex justify-center items-center lg:items-start  relative h-60 md:h-[550px] lg:h-[650px] w-full overflow-hidden">
                <Image
                  src="/assets/images/farm/collection/4.jpg"
                  layout="fill"
                  // height={100}
                  // width={100}
                  objectFit="cover"
                  className="w-full h-full transform transition-transform duration-500 hover:scale-110"
                  alt="banner"
                />
                <div className="absolute p-4 bg-opacity-75 text-center">
                  <h3 className="text-green-600 lg:text-xl lg:font-semibold">Organic Farm</h3>
                  <h4 className="text-orange-600 uppercase font-semibold">Up to 50% off</h4>
                  <Link href={`/shop`}><button className=" bg-green-600 text-white p-1.5 px-3 lg:px-4 rounded-full  hover:bg-black" >Shop Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center h-12 lg:h-16 p-2">
          <div className="flex justify-center items-center uppercase lg:font-bold font-semibold text-sm lg:text-base gap-1 lg:gap-3 border-t">
            <div className="text-gray-600 py-2 lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2 border-transparent hover:text-green-600 hover:border-green-600 cursor-pointer" onClick={()=> handleCategoryChange('')}>All</div>
            <div className="text-gray-600 py-2 lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2 border-transparent hover:text-green-600 hover:border-green-600 cursor-pointer" onClick={()=> handleCategoryChange('organic')}>Organic</div>
            <div className="text-gray-600 py-2 lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2 border-transparent hover:text-green-600 hover:border-green-600 cursor-pointer" onClick={()=> handleCategoryChange('vegetables')}>Vegetable</div>
            <div className="text-gray-600 py-2 lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2 border-transparent hover:text-green-600 hover:border-green-600 cursor-pointer" onClick={()=> handleCategoryChange('fish')}>Fish</div>
            <div className="text-gray-600 py-2 lg:px-4 md:px-2 px-0.5 text-center lg:border-t-4 borger-t-2 border-transparent hover:text-green-600 hover:border-green-600 cursor-pointer" onClick={()=> handleCategoryChange('fruits')}>Fruits</div>
          </div>
        </div>
      </section>

      <section className="m-2">
        <div className="lg:mx-10">
          <CardSlider
            items={filterCategory}
            grid={grid}
          />
        </div>
      </section>

      <section className="m-2">
        <div className="h-auto lg:mx-10 relative">
          <div className="">
            <div className="relative">
              <div className="flex justify-center items-center relative lg:justify-start h-60 lg:h-[500px] w-full">
                <Image
                  src="/assets/images/farm/banner/1.jpg"
                  layout="fill"
                  // height={100}
                  // width={100}
                  objectFit="cover"
                  className="w-full h-full"
                  alt="banner"
                />
                <div className="absolute p-3 bg-opacity-75 text-center lg:px-32 ">
                  <h4 className=" text-orange-600  text-xl lg:text-2xl capitalize lg:font-semibold">summer sale 20% off</h4>
                  <h2 className="font-extrabold text-green-600 uppercase text-3xl lg:text-7xl lg:py-4">organic farm</h2>
                  <h3 className="text-white font-bold py-2 lg:text-2xl lg:text-gray-500">Fresh Product</h3>
                  <Link href={`/shop`}><button className="bg-green-600 text-white p-1.5 px-4 lg:px-8 lg:p-3 lg:hover:bg-black rounded-full m-2 hover:bg-black">Shop Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
