"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { IMG_API } from '@/hooks/getEnv';
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl';
import formatPrice from '@/hooks/formatPrice'
import Products from '@/components/Products/Products';
import { getVariation } from '@/service/getVariation';
import { getSinglePage } from '@/service/getSinglePage';
import { CompareIcon, ShopMarketIcon, TimeIcon, TrackOrderIcon, WishlistIcon } from '@/assets/icons';

const SinglePage = () => {
  const { category, id } = useParams<{ category: string; id: string }>()
  const t = useTranslations('ProductsLang')
  const { data: singleProduct = {} } = getSinglePage(id)
  const { data: variations = {} } = getVariation(id)
  console.log(variations);
  const monthlyPayment = singleProduct?.price ? Math.ceil(singleProduct.price / 12) : 0

  return (
    <>
      <div className='containers !mt-[10px]'>
        <div className='flex mb-[10px] gap-[15px]'>
          <Link className='text-[15px] text-[#B6BABF] gap-[15px] flex' href={"/"}>
            <span>Bosh sahifa</span>
            <span>/</span>
          </Link>
          <Link className='text-[15px] text-[#B6BABF] gap-[15px] flex' href={`/pages/products?category=${singleProduct?.category?.id}`}>
            <span>{singleProduct?.category?.name}</span>
            <span>/</span>
          </Link>
          <Link className='text-[15px] text-[#B6BABF]' href={"/"}>{singleProduct.name}</Link>
        </div>
        <div>
          <h2 className='my-[30px] text-[32px] font-bold'>{singleProduct.name}</h2>
          <div className='flex'>
            <div className='w-[45%] h-[430px] bg-[#EDEFF3] flex items-center rounded-xl shadow-lg justify-center relative'>
              <Image className='w-[341px] h-[341px] object-contain' src={`${IMG_API}/${singleProduct.image}`} alt='Single image' width={341} height={341} priority />
              <div className='absolute top-[26px] right-[31px] flex gap-[20px]'>
                <button className='cursor-pointer'><CompareIcon /></button>
                <button className='cursor-pointer'><WishlistIcon /></button>
              </div>
            </div>
            <div className='w-[45%] ml-[32px]'>
              <div className="flex items-center gap-[20px] mt-[31px]">
                <span className='text-[16px] text-[#515D6C] font-normal'>Narxi</span>
                <p className='text-[32px] font-bold text-[#06172D]'>{ formatPrice(singleProduct.price) }</p>
                <span className='text-[24px] text-[#06172D] font-semibold'>UZS</span>
              </div>
              <p className='py-[19px] px-[97px] mt-[36px] mb-[10px] text-center bg-[#EBEFF3] text-[#545D6A] text-[16px] font-normal rounded-[6px]'>{singleProduct.nasiya} / {formatPrice(monthlyPayment)}</p>
              <div className="flex gap-[14px] mb-[43px]">
                <button className='bg-[#ffffff] text-[#134E9B] text-[16px] font-normal rounded-[6px] border-[1px]  py-[18px] px-[55px] '>Savatga qo‘shish</button>
                <button className='bg-[#134E9B] text-[#ffffff] text-[16px] font-normal rounded-[6px] py-[18px] px-[71px]'>Xarid qilish</button>
              </div>
              <div className="flex gap-[16px]">
                <TrackOrderIcon/>
                <p className='text-[16px] font-normal text-[#06172DB2]'>Yetkazib berish O’zbekiston bo’ylab</p>
              </div>
              <div className="flex gap-[16px] mt-[20px]">
                <ShopMarketIcon/>
                <p className='text-[16px] font-normal text-[#06172DB2]'>Do’kondi o’zidan olib ketishingiz mumkin</p>
              </div>
              <div className="flex gap-[16px] mt-[20px]">
                <TimeIcon/>
                <p className='text-[16px] font-normal text-[#06172DB2]'>Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[80px]'>
          <div className='flex items-center gap-[85px]'>
            <strong>Telefon xususiyatlar</strong>
            <strong>Mijoslar </strong>
          </div>
          <div className='w-[45%] mb-[100px]'>
            {variations?.options?.map((item: any) => (
              <div key={item.id} className='py-[5px] border-b-[2px] text-[#545D6A] text-[18px] border-state3400 border-dashed flex justify-between'>
                <div className='w-[50%]'>{variations.name}</div>
                <div className='w-[50%]'>{item?.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Products api='/products' title={t('history')} />
    </>
  )
}

export default SinglePage