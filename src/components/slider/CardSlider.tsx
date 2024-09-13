"use client";
import React, { useState, useEffect } from "react";
import { Image } from "antd";
import Link from "next/link";
import Container from "@/components/Container";
import Slider from "react-slick";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
const CardSlider = ({ items }: any) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleTouch = () => {
    setHoveredIndex(hoveredIndex !== null ? null : hoveredIndex);
  };
  const slideToShow = items;
  const getSlideSettings = (length: number) => {
    return {
      dotos: false,
      arrows: false,
      infinite: length > 1,
      slidesToShow: length < 5 ? length : 5,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: length > 1,
            slidesToShow: length < 4 ? length : 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: length > 1,
            slidesToShow: length < 3 ? length : 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: length > 1,
            slidesToShow: length < 2 ? length : 2,
            slidesToScroll: 1,
          }
        },
      ]
    }
  }
  const settings = getSlideSettings(slideToShow.length)

  function firstWord(a) {
    let x = a.indexOf(' ');
    return a.substr(0, x)
  }

  const dispatch = useDispatch()

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product))
  }
  console.log(firstWord('see and stop'), "test")
  return (
    <div className="">
      <div className="flex justify-between items-center pl-4 h-12 relative bg-gray-300">
        <h2 className="text-xl text-black font-medium ">
          Related Products
        </h2>
      </div>

      <div className={`m-2 p-2`}>
        <Slider {...settings}>
          {slideToShow?.map((img: any, index: any) => (
            //   <div
            //   key={index}
            //   className={`shadow-2xl relative group max-w-80 aspect-w-1 aspect-h-1`}  // Aspect ratio added here
            //   onMouseEnter={() => setHoveredIndex(index)}
            //   onMouseLeave={() => setHoveredIndex(null)}
            //   onTouchStart={handleTouch}
            // >
            //   <div className="relative overflow-hidden w-full h-full">
            //         <Link href="#">
            //           <Image
            //             src={
            //               hoveredIndex === index
            //                 ? `${img.image}`
            //                 : `${img.image2}`
            //             }
            //             alt="product"
            //             width={300}
            //             height={300}
            //             className="img-fluid w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105 "
            //           />
            //         </Link>

            //         {/* Icon Section */}
            //         <div
            //           className={`absolute bottom-0 right-0 flex flex-col space-y-2 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
            //             }`}
            //         >
            //           <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-300 divide-y">
            //             <Link
            //               href="javascript:void(0)"
            //               aria-label="Add to Wishlist"
            //               className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
            //             >
            //               <FaRegHeart />
            //             </Link>
            //             <Link
            //               href="javascript:void(0)"
            //               aria-label="Quick View"
            //               className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
            //             >
            //               <IoEyeOutline />
            //             </Link>
            //             <Link
            //               href="javascript:void(0)"
            //               aria-label="User"
            //               className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
            //             >
            //               <GrPowerCycle />
            //             </Link>
            //           </div>
            //         </div>
            //       </div>
            //       <div className="product-detail text-center mt-4">
            //         <ul className="rating-star flex justify-center text-yellow-500 space-x-1">
            //           {Array(5)
            //             .fill("")
            //             .map((_, i) => (
            //               <li key={i}>
            //                 <FaStar />
            //               </li>
            //             ))}
            //         </ul>
            //         <Link href="#" className="block mt-2 px-2">
            //           <h6 className="text-xs font-extrabold truncate">
            //             {img.name}
            //           </h6>
            //         </Link>
            //         <span className="detail-price block text-xs text-red-500 font-bold mt-1 mb-3">
            //           {img.price}
            //           <span className="line-through text-gray-500 ml-2">
            //             {img.discounted}
            //           </span>
            //         </span>
            //       </div>
            //       <button className="py-2 w-full bottom-0 flex items-center justify-center text-lg font-semibold text-white bg-red-500 hover:bg-red-200 duration-300 rounded-sm truncate" onClick={()=>handleAddToCart(img)}>
            //         Add to Cart
            //       </button>
            //     </div>
            <div
              key={index}
              className={`shadow-2xl relative group`}  // Removed max-w-80 to allow full width
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={handleTouch}
            >
              {/* Aspect Ratio Wrapper */}
              <div className="flex justify-center relative overflow-hidden w-full aspect-w-1 aspect-h-1">
                <Image
                  src={hoveredIndex === index ? img.image : img.image2}
                  alt="product"
                  width={200}
                  height={200}
                  className="transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                  preview={false}  // Set to false if you don't want to enable the image preview feature
                />
              </div>

              {/* Icon Section */}
              <div
                className={`absolute bottom-0 right-0 flex flex-col space-y-2 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-300 divide-y">
                  <Link
                    href="javascript:void(0)"
                    aria-label="Add to Wishlist"
                    className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
                  >
                    <FaRegHeart />
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    aria-label="Quick View"
                    className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
                  >
                    <IoEyeOutline />
                  </Link>
                  <Link
                    href="javascript:void(0)"
                    aria-label="User"
                    className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
                  >
                    <GrPowerCycle />
                  </Link>
                </div>
              </div>

              {/* Product Details */}
              <div className="product-detail text-center mt-4">
                <ul className="rating-star flex justify-center text-yellow-500 space-x-1">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <li key={i}>
                        <FaStar />
                      </li>
                    ))}
                </ul>
                <Link href="#" className="block mt-2 px-2">
                  <h6 className="text-xs font-extrabold truncate">{img.name}</h6>
                </Link>
                <span className="detail-price block text-xs text-red-500 font-bold mt-1 mb-3">
                  {img.price}
                  <span className="line-through text-gray-500 ml-2">{img.discounted}</span>
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                className="py-2 w-full bottom-0 flex items-center justify-center text-lg font-semibold text-white bg-red-500 hover:bg-red-200 duration-300 rounded-sm truncate"
                onClick={() => handleAddToCart(img)}
              >
                Add to Cart
              </button>
            </div>

          ))}
        </Slider>
      </div>

    </div>

  );
};

export default CardSlider;

