"use client"
import Image from 'next/image'
import { IMG_API } from '@/hooks/getEnv'
import { Link } from '@/i18n/navigation'
import React, { useContext } from 'react'
import { Context } from '@/context/Context'
import { getCategories } from '@/service/getCategories'
import { HeaderBottomType } from '@/types/HeaderButtomType'

const HeaderPopapCategory = () => {
  const { showCategory } = useContext(Context)
  const { data: categories, isLoading, isError } = getCategories()

  

  return (
    <div className={`${showCategory ? "h-[485px]" : "h-0"} w-full duration-300 overflow-hidden rounded-xl absolute flex shadow-2xl z-50 bg-white top-[102px]`}>
      <div className="max-[1050px]:w-[50%] w-[30%] md:px-[32px] py-[43px] flex flex-col bg-[#EBEFF3]">
        {isLoading || isError ? (
          Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="flex items-center py-2  gap-4">
              <div className="w-8 h-8 bg-red-500 animate-pulse rounded-full" />
              <div className="flex-1 h-4 bg-red-500 animate-pulse rounded" />
            </div>
          ))
        ) : (
          categories?.map((item: HeaderBottomType) => (
            <Link key={item.id} className="py-[12px] flex items-center gap-[15px] pl-[40px] mt-[5px] md:text-[16px] text-[14px] hover:bg-white hover:text-black" href={`/pages/products?category=${item.id}`}>
              <Image className="w-[24px] h-[24px]" src={`${IMG_API}/${item.icon}`} alt="category icon" width={24} height={24} priority />
              <span>{item.name}</span>
            </Link>
          ))
        )}
      </div>
      <div className="max-[1050px]:w-[50%] w-[70%] py-2 px-2 bg-[#ffffff]">
        Бам Бам Бам Бам Бам Бам Бам Бам  
      </div>
    </div>
  )
}

export default HeaderPopapCategory