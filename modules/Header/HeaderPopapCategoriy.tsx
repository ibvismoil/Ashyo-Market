"use client"
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import React, { useContext } from 'react'
import { Context } from '@/context/Context'
import { IMG_API } from '@/hooks/getEnv'
import { getCategories } from '@/service/getCategories'
import { HeaderBottomType } from '@/types/HeaderButtomType'

const HeaderPopapCategory = () => {
  const { showCategory } = useContext(Context)
  const { data: categories, isLoading, isError } = getCategories()

  return (
    <div className={`${showCategory ? "h-[485px]" : "h-0"} w-full duration-300 overflow-hidden rounded-xl absolute flex shadow-2xl z-50 bg-white top-[102px]`}>
      <div className="w-[30%] flex flex-col py-[43px] px-[32px] bg-[#EBEFF3]">
        {isLoading || isError ? (
          Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="flex items-center py-2  gap-4">
              <div className="w-8 h-8 bg-red-500 animate-pulse rounded-full" />
              <div className="flex-1 h-4 bg-red-500 animate-pulse rounded" />
            </div>
          ))
        ) : (
          categories?.map((item: HeaderBottomType) => (
            <Link className="py-[12px] flex items-center gap-[15px] pl-[40px] mt-[5px] text-[16px] hover:bg-white hover:text-black" key={item.id} href="/">
              <Image className="w-[24px] h-[24px]" src={`${IMG_API}/${item.icon}`} alt="category icon" width={24} height={24} priority />
              <span>{item.name}</span>
            </Link>
          ))
        )}
      </div>
      <div className="w-[70%] bg-[#ffffff]"></div>
    </div>
  )
}

export default HeaderPopapCategory