"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { PiSmileySadLight } from "react-icons/pi";
import BreadCrump from "@/components/BreadCrump";
import Container from "@/components/Container";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishList, selectedWishList, selectWishCount } from '@/redux/slices/wishSlice';
const Wishlist = () => {

  const dispatch = useDispatch()
  const wishList = useSelector(selectedWishList)
  const wishCount = useSelector(selectWishCount)

  const handleWishListRemove = async (itemId: any) => {
      dispatch(removeWishList(itemId))
      toast.error("Item removed from cart!");
  }
  return (
    <div className="text-gray-700 bg-gray-100 pb-6">
        <div className='flex justify-center items-center py-5'>
            <p className='text-3xl'>{wishCount}</p>
        </div>
      <BreadCrump pageName='wishlist' lastName='wishlist' />
      {wishList.length === 0 ? (
        <div className='flex justify-center items-center py-5'>
         <div>
         <h2 className='text-center text-3xl py-3'>Ah!!</h2>
         <div className='flex justify-between items-center gap-2'>
         <p className='text-2xl'>Your Wishlist is Empty</p>
          <p ><PiSmileySadLight className='text-3xl'/></p>
         </div>
         
         </div>
        </div>
       
      ) : (
        <Container>
          <div className="bg-gray-100 w-full flex justify-center pt-6 text-gray-700">
            <div className="w-full">
              <div className="flex flex-col">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="text-sm font-normal uppercase">
                      <th className="pl-4 sm:pl-0 px-4 sm:px-2 py-3 text-left sm:text-center">Image</th>
                      <th className="px-6 py-3 text-right sm:text-center">Product Name</th>
                      <th className="px-6 py-3 text-center hidden sm:table-cell">Price</th>
                      <th className="px-6 py-3 text-center hidden sm:table-cell">Availability</th>
                      <th className="px-6 py-3 text-left hidden sm:table-cell">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishList?.map((item: any) => (
                      <tr key={item.id} className="border-b-2">
                        <td className="pl-4 sm:pl-0 px-2 py-4 text-center sm:align-top">
                          <Link href="#">
                            <Image
                              src={`${item.image}`}
                              alt="cart"
                              width={80}
                              height={100}
                              className="sm:mx-auto"
                            />
                          </Link>
                        </td>
                        {/* Mobile View: Product Name and Details */}
                        <td className="py-4 sm:hidden">
                          <div className="text-right md:text-right sm:text-right pr-6">
                            <h2 className="font-medium ">{item.name}</h2>
                            <div className="mt-2 flex justify-end items-center sm:items-center sm:text-right gap-4">
                              <p className="text-gray-500 mt-2 ml-12">{item.availability}</p>
                              <p className="text-blue-500 mt-2 ml-4">{item.price}</p>
                              <button
                                className="text-gray-500 text-xl ml-4"
                              >
                                <IoMdClose onClick={() => handleWishListRemove(item.id)} />
                                <MdOutlineShoppingCart />
                              </button>
                            </div>
                          </div>
                        </td>
                        {/* Desktop View: Product Name */}
                        <td className="hidden sm:table-cell px-6 py-4 text-center">
                          <Link href="#" className="font-medium text-gray-400">{item.name}</Link>
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4 text-center">
                          <h2>{item.price}</h2>
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4 text-center">
                          <h2>{item.availability}</h2>
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4 text-center">
                          <button
                            className="flex justify-center items-center text-gray-600 text-2xl font-medium"
                          >
                            <IoMdClose className="mr-1" onClick={() => handleWishListRemove(item.id)} />
                            <MdOutlineShoppingCart />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end gap-4 mt-4 px-4 sm:px-0">
                  <Link href="/shopping">
                    <button className="bg-blue-400 text-white text-sm py-4 px-4 sm:px-6 lg:px-10 hover:bg-black duration-300">
                      Continue Shopping
                    </button>
                  </Link>
                  <Link href="/checkout">
                    <button className="bg-blue-400 text-white text-sm py-4 px-4 sm:px-6 lg:px-10 hover:bg-black duration-300">
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Wishlist;
