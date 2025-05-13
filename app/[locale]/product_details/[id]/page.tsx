"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { IMG_API } from '@/hooks/getEnv';
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl';
import formatPrice from '@/hooks/formatPrice'
import Products from '@/components/Products/Products';
import { getSinglePage } from '@/service/getSinglePage';
import { getVariation } from '@/service/getVariation';
import Skeleton from '@mui/material/Skeleton';
import { CompareIcon, ShopMarketIcon, TimeIcon, TrackOrderIcon, WishlistIcon } from '@/assets/icons';

const SinglePage = () => {
  const { category, id } = useParams<{ category: string; id: string }>()
  const t = useTranslations('ProductsLang')
  const [activeTab, setActiveTab] = useState<'specs' | 'comments'>('specs')
  const { data: singleProduct = {}, isLoading: isProductLoading } = getSinglePage(id)
  const { data: variations = {}, isLoading: isVariationsLoading } = getVariation(id)
  const isLoading = isProductLoading || isVariationsLoading
  const monthlyPayment = singleProduct?.price ? Math.ceil(singleProduct.price / 12) : 0

  if (isLoading) {
    return (
      <div className='containers !mt-[10px]'>
        {/* Breadcrumb Skeleton */}
        <div className='flex mb-[10px] gap-[15px]'>
          <Skeleton variant="text" width={100} sx={{ bgcolor: '#EBEFF3' }} />
          <Skeleton variant="text" width={100} sx={{ bgcolor: '#EBEFF3' }} />
          <Skeleton variant="text" width={150} sx={{ bgcolor: '#EBEFF3' }} />
        </div>
        {/* Title Skeleton */}
        <Skeleton variant="text" width={300} height={48} sx={{ my: '30px', bgcolor: '#EBEFF3' }} />
        <div className='flex'>
          {/* Image Skeleton */}
          <Skeleton
            variant="rectangular"
            width="45%"
            height={430}
            sx={{ borderRadius: '12px', bgcolor: '#EBEFF3' }}
          />
          {/* Details Skeleton */}
          <div className='w-[45%] ml-[32px]'>
            <div className="flex items-center gap-[20px] mt-[31px]">
              <Skeleton variant="text" width={50} sx={{ bgcolor: '#EBEFF3' }} />
              <Skeleton variant="text" width={150} height={40} sx={{ bgcolor: '#EBEFF3' }} />
              <Skeleton variant="text" width={50} sx={{ bgcolor: '#EBEFF3' }} />
            </div>
            <Skeleton
              variant="rectangular"
              width={300}
              height={50}
              sx={{ mt: '36px', mb: '10px', borderRadius: '6px', bgcolor: '#EBEFF3' }}
            />
            <div className="flex gap-[14px] mb-[43px]">
              <Skeleton variant="rectangular" width={150} height={50} sx={{ borderRadius: '6px', bgcolor: '#EBEFF3' }} />
              <Skeleton variant="rectangular" width={150} height={50} sx={{ borderRadius: '6px', bgcolor: '#EBEFF3' }} />
            </div>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex gap-[16px] mt-[20px]">
                <Skeleton variant="rectangular" width={24} height={24} sx={{ bgcolor: '#EBEFF3' }} />
                <Skeleton variant="text" width={200} sx={{ bgcolor: '#EBEFF3' }} />
              </div>
            ))}
          </div>
        </div>
        {/* Variations Skeleton */}
        <div className='mt-[80px]'>
          <div className='flex items-center gap-[85px]'>
            <Skeleton variant="text" width={150} sx={{ bgcolor: '#EBEFF3' }} />
            <Skeleton variant="text" width={100} sx={{ bgcolor: '#EBEFF3' }} />
          </div>
          <div className='w-[45%] mb-[100px]'>
            {[...Array(4)].map((_, index) => (
              <div key={index} className='py-[5px] border-b-[2px] border-dashed flex justify-between'>
                <Skeleton variant="text" width="45%" sx={{ bgcolor: '#EBEFF3' }} />
                <Skeleton variant="text" width="45%" sx={{ bgcolor: '#EBEFF3' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

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
          <h2 className='my-[30px] text-[32px] max-[740px]:text-[16px] font-bold'>{singleProduct.name}</h2>
          <div className='max-[740px]:block flex'>
            <div className='w-[45%] max-[740px]:w-[80%] h-[430px] bg-[#EDEFF3] flex items-center rounded-xl shadow-lg justify-center relative'>
              <Image className='w-[341px] h-[341px] object-contain' src={`${IMG_API}/${singleProduct.image}`} alt='Single image' width={341} height={341} priority />
              <div className='absolute top-[26px] right-[31px] flex gap-[20px]'>
                <button className='cursor-pointer'><CompareIcon /></button>
                <button className='cursor-pointer'><WishlistIcon /></button>
              </div>
            </div>
            <div className='w-[45%] max-[740px]:w-[80%] max-[740px]:ml-0 ml-[32px]'>
              <div className="flex items-center gap-[20px] mt-[31px]">
                <span className='text-[16px] text-[#515D6C] font-normal'>Narxi</span>
                <p className='text-[32px] font-bold text-[#06172D]'>{formatPrice(singleProduct.price)}</p>
                <span className='text-[24px] text-[#06172D] font-semibold'>UZS</span>
              </div>
              <p className='py-[19px] px-[97px] mt-[36px] mb-[10px] text-center bg-[#EBEFF3] text-[#545D6A] text-[16px] font-normal rounded-[6px]'>{singleProduct.nasiya} / {formatPrice(monthlyPayment)}</p>
              <div className="flex gap-[14px] mb-[43px]">
                <button className='bg-[#ffffff] text-[#134E9B] text-[16px] font-normal rounded-[6px] border-[1px] py-[18px] px-[55px]'>Savatga qo‘shish</button>
                <button className='bg-[#134E9B] text-[#ffffff] text-[16px] font-normal rounded-[6px] py-[18px] px-[71px]'>Xarid qilish</button>
              </div>
              <div className="flex gap-[16px]">
                <TrackOrderIcon />
                <p className='text-[16px] font-normal text-[#06172DB2]'>Yetkazib berish O’zbekiston bo’ylab</p>
              </div>
              <div className="flex gap-[16px] mt-[20px]">
                <ShopMarketIcon />
                <p className='text-[16px] font-normal text-[#06172DB2]'>Do’kondi o’zidan olib ketishingiz mumkin</p>
              </div>
              <div className="flex gap-[16px] mt-[20px]">
                <TimeIcon />
                <p className='text-[16px] font-normal text-[#06172DB2]'>Tahminiy yetkazib berish vaqti 1 kundan 3 kungacha......</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[80px]'>
          <div className='flex items-center gap-[85px] cursor-pointer'>
            <strong className={activeTab === 'specs' ? 'text-black' : 'text-gray-500'} onClick={() => setActiveTab('specs')}>
              Telefon xususiyatlar
            </strong>
            <strong className={activeTab === 'comments' ? 'text-black' : 'text-gray-500'} onClick={() => setActiveTab('comments')}>
              Comment
            </strong>
          </div>

          {activeTab === 'specs' && (
            <div className='w-[45%] mb-[50px]'>
              {variations?.options?.map((item: any) => (
                <div
                  key={item.id}
                  className='py-[5px] border-b-[2px] text-[#545D6A] text-[18px] font-mono border-state3400 border-dashed flex justify-between'
                >
                  <div className='w-[50%]'>{item?.name}</div>
                  <div className='w-[50%]'>{item?.value}</div>
                </div>
              ))}
              <div className='py-[5px] text-[#545D6A] text-[18px]'>
                <h1 className='text-[18px] text-black'>Description</h1>
                <div className='font-mono'>{singleProduct.description}</div>
              </div>
              <div className='py-[5px] text-[#545D6A] text-[18px]'>
                <h1 className='text-[18px] text-black'>Xulosa</h1>
                <div className='font-mono'>{singleProduct.summary}</div>
              </div>
            </div>
          )}

          {activeTab === 'comments' && (
            <div className='mb-[50px]'>
              {singleProduct?.comments?.length > 0 ? (
                singleProduct.comments.map((comment: any) => (
                  <div key={comment.id} className='mb-4 p-4 border border-gray-200 rounded-lg'>
                    <span className='mt-5 mb-5'>Users: {comment.user_id}</span>
                    <p className='text-[16px] font-mono text-[#545D6A]'>{comment.text}</p>
                    <p className='text-[12px] text-gray-400 mt-1'>
                      {new Date(comment.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))
              ) : (
                <p className='text-[16px] text-gray-500'>No comment</p>
              )}
            </div>
          )}
        </div>
      </div>
      <Products api='/products' title={t('history')} />
    </>
  )
}

export default SinglePage