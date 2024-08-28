import Link from 'next/link';
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface BreadcrumbProps {
  pageName:string;
  link?:string;
  lastName?:string;
}
export default function BreadCrump({ pageName, link, lastName }: BreadcrumbProps) {
  return (
    <div className='bg-white'>
      <div className='uppercase p-4 lg:py-10'>
        <div className='flex justify-center items-center uppercase text-xl p-2'>
        {/* {link ? (
            <Link
              href={link}
              className=' text-gray-500 dark:text-gray-400'
            >
              {pageName}
            </Link>
          ) : (
            <span className=' text-gray-500 dark:text-gray-400wa'>
              {pageName}
            </span>
          )} */}
          <p>{pageName}</p>
        </div>
        <div className='flex justify-center items-center uppercase font-semibold'>
          <Link href='/'>
          <p>Home</p>
          </Link>
          <MdKeyboardDoubleArrowRight className='mx-2' />
          <p>{lastName}</p>
        </div>
      </div>
    </div>
  )
}
