"use client"
import React from 'react'
import Link from 'next/link';
import { getCategories } from '@/service/getCategories'
import { HeaderBottomType } from '@/types/HeaderButtomType';

const HeaderBottom = () => {
  const {data:categories, isLoading, isError} = getCategories();
  // console.log(categories)

  return (
<div className="flex items-center justify-between containers gap-5">
  {isLoading ? (
    Array.from({ length: 7 }).map((_, index) => (
      <div key={index} className="w-24 h-5 bg-gray-300 animate-pulse rounded" />
    ))
  ) : isError ? (
    Array.from({ length: 7 }).map((_, index) => (
      <div key={index} className="w-24 h-5 bg-red-500 animate-pulse rounded" />
    ))
  ) : (
    categories.map((item: HeaderBottomType) => (
      <Link key={item.id} href="/" className="text-[#545D6A] text-[16px] hover:text-[#134E9B] duration-300">
        {item.name}
      </Link>
    ))
  )}
</div>

  )
}

export default HeaderBottom