"use client";
import React, { useState, useEffect } from "react";
import { Image } from "antd";
import Link from "next/link";
import Container from "@/components/Container";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GrPowerCycle } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { addToWishList } from "@/redux/slices/wishSlice";
import { toast } from "react-toastify";

// interface ItemsProps{
//   items:object;
// }

const ProductCard = ({ items, grid, gridView }: any) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const handleTouch = () => {
    setHoveredIndex(hoveredIndex !== null ? null : hoveredIndex);
  };
  const slideToShow = items;

  const dispatch = useDispatch()

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product))
  }

  const handleWishList = (item:any)=>{
    dispatch(addToWishList(item));
    toast.success('Added to Wish list successfully!');
  }
  
  return (

    <div className="">
      <div className="flex justify-between items-center pl-4 h-12 relative bg-gray-300">
        <h2 className="text-xl text-black font-medium ">
          Related Products
        </h2>
      </div>
      {gridView ? (
        <>
          {slideToShow?.map((img: any, index: any) => (
            <div key={index} className={`grid grid-cols-5 gap-2 p-2 bg-white my-3`}>
              <div
                className={`shadow-sm relative group}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={handleTouch}
              >

                <div className="relative overflow-hidden w-full aspect-w-1 aspect-h-1">
                  <Link href="#">
                    <Image
                      src={
                        hoveredIndex === index
                          ? `${img.image}`
                          : `${img.image2}`
                      }
                      alt="product"
                      width={200}
                      height={200}
                      preview={false}
                      className="transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </Link>
                </div>
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
              <div className="col-span-4 justify-items-start ml-4 p-3 text-gray-700">
                <ul className="rating-star flex justify-start text-yellow-500 space-x-1">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <li key={i}>
                        <FaStar />
                      </li>
                    ))}
                </ul>
                <p className="font-sans text-sm mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <p className="font-bold">Realme Note 7</p>
                <p className="text-xs mt-3">
                  <span className="text-gray-400 line-through">{`$` + `${img.price}`}</span>
                  <span className="ml-4 font-semibold">{`$` + `${img.discounted}`}</span>
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${grid} gap-2 lg:p-2 py-2`}>
          {slideToShow?.map((img: any, index: any) => (
            <div
              key={index}
              className={`shadow-2xl relative group bg-white ${grid ? '' : 'max-w-80'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={handleTouch}
            >
              <div className="relative overflow-hidden ">
                <div className="flex justify-center items-center relative overflow-hidden w-full aspect-w-1 aspect-h-1 pt-4 h-36 lg:h-72">
                  <Link href="#">
                    <Image
                      src={
                        hoveredIndex === index
                          ? `${img.image}`
                          : `${img.image2}`
                      }
                      alt="product"
                      preview={false}
                      className="transform transition-transform duration-500 ease-in-out group-hover:scale-105 w-full sm:w-64 md:w-72 lg:w-80 h-auto object-cover"
                    />
                  </Link>
                </div>
                {/* Icon Section */}
                <div
                  className={`absolute bottom-0 right-0 flex flex-col space-y-2 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <div className="flex flex-col items-center justify-center bg-gray-50 border border-gray-300 divide-y">
                    <button
                      onClick={()=>handleWishList(img)}
                      aria-label="Add to Wishlist"
                      className="hover:bg-green-600 text-gray-500 hover:text-white duration-300 px-4 py-4"
                    >
                      <FaRegHeart />
                    </button>
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
              <button className="py-2 w-full bottom-0 flex items-center justify-center text-lg font-semibold text-white bg-red-500 hover:bg-red-200 duration-300 rounded-sm truncate" onClick={() => handleAddToCart(img)}>
                Add to Cart
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

