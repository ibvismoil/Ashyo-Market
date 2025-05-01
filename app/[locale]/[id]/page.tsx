"use client"
import { CompareIcon, WishlistIcon } from '@/assets/icons';
import { IMG_API } from '@/hooks/getEnv';
import { getSinglePage } from '@/service/getSinglePage';
import formatPrice from '@/hooks/formatPrice'
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'
import { getVariation } from '@/service/getVariation';
import Products from '@/components/Products/Products';
import { useTranslations } from 'next-intl';

const SinglePage = () => {    
    const params:{id:string} = useParams()
    const t = useTranslations('ProductsLang')
    const {data:singleProduct} = getSinglePage(params.id)
    const {data:variations} = getVariation(params.id)
    console.log(variations);
    
  return (
   <>
    <div className='containers !mt-[10px]'>
      <div className='flex mb-[10px] gap-[15px]'>
        <Link className='text-[15px] text-[#B6BABF] gap-[15px] flex' href={"/"}>
            <span>Bosh sahifa</span>
            <span>/</span>
        </Link>
        <Link className='text-[15px] text-[#B6BABF] gap-[15px] flex' href={"/"}>
            <span>Smartfonlar</span>
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
                    <button className='cursor-pointer'><CompareIcon/></button>
                    <button className='cursor-pointer'><WishlistIcon/></button>
                </div>
            </div>
            <div className='45%'>
                <h2>{formatPrice(singleProduct.price)}</h2>
            </div>
        </div>
      </div>
      <div className='mt-[80px]'>
        <div className='flex items-center gap-[85px]'>
            <strong>Telefon xususiyatlar</strong>
            <strong>Mijoslar </strong>
        </div>
        <div className='w-[45%] mb-[100px]'>
          {variations?.options?.map((item:any) => (
              <div key={item.id} className='py-[5px] border-b-[2px] text-[#545D6A] text-[18px] border-state3400 border-dashed flex justify-between'>
                  <div className='w-[50%]'>{variations.name}</div>
                  <div className='w-[50%]'>{item?.value}</div>
              </div>
          ))}
        </div>
      </div>
    </div>
    <Products api='/products' title={t('history')}/>
    </>
  )
}

export default SinglePage
