"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";

// interface ItemsProps{
//   items:object;
// }

const ProductCard = ({ items, grid, gridView }: any) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleTouch = () => {
    setHoveredIndex(hoveredIndex !== null ? null : hoveredIndex);
  };
  const slideToShow = items;

  return (

    <div className="">
      <div className="flex justify-between items-center pl-4 h-12 relative">
        <h2 className="text-xl text-black font-medium">
          Related Products
        </h2>
      </div>
      {gridView ? (
        <>
          {slideToShow?.map((img: any, index: any) => (
            <div key={index} className={`grid grid-cols-5 gap-2 p-2`}>
              <div
                className={`shadow-2xl relative group max-w-72}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={handleTouch}
              >
                <div className="relative overflow-hidden">
                  <Link href="#">
                    <Image
                      src={
                        hoveredIndex === index
                          ? `${img.image}`
                          : `${img.image2}`
                      }
                      alt="product"
                      width={100}
                      height={100}
                      className="img-fluid w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105 "
                    />
                  </Link>

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
                </div>

              </div>
              <div className="col-span-4 justify-items-start">
                <ul className="rating-star flex justify-start text-yellow-500 space-x-1">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <li key={i}>
                        <FaStar />
                      </li>
                    ))}
                </ul>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <p className="font-bold">Realme Note 7</p>
                <p>
                  <span className="m-2">60</span>
                  <span>50</span>
                </p>
              </div>
            </div>
          ))}
        </>
      )
        : (
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${grid} gap-2 p-2`}>
            {slideToShow?.map((img: any, index: any) => (
              <div
                key={index}
                className={`shadow-2xl relative group ${grid ? '' : 'max-w-80'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={handleTouch}
              >
                <div className="relative overflow-hidden ">
                  <Link href="#">
                    <Image
                      src={
                        hoveredIndex === index
                          ? `${img.image}`
                          : `${img.image2}`
                      }
                      alt="product"
                      width={300}
                      height={300}
                      className="img-fluid w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105 "
                    />
                  </Link>

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
                </div>
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
                    <h6 className="text-xs font-extrabold truncate">
                      {img.name}
                    </h6>
                  </Link>
                  <span className="detail-price block text-xs text-red-500 font-bold mt-1 mb-3">
                    {img.price}
                    <span className="line-through text-gray-500 ml-2">
                      {img.discounted}
                    </span>
                  </span>
                </div>
                <button className="py-2 w-full bottom-0 flex items-center justify-center text-lg font-semibold text-white bg-red-500 hover:bg-red-200 duration-300 rounded-sm truncate">
                  <Link href={`/cartmain`}>Add to Cart</Link>
                </button>
              </div>
            ))}
          </div>
        )
      }
    </div>

  );
};

export default ProductCard;

