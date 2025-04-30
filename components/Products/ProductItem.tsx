import React, { FC } from 'react'
import Button from '../Button'
import { IMG_API } from '@/hooks/getEnv'
import { CompareIcon, ShopIcon } from '@/assets/icons'
import { ProductType } from '@/types/ProductType'
import Image from 'next/image'
import formatPrice from '@/hooks/formatPrice'

const ProductItem: FC<{ item: ProductType }> = ({ item }) => {
 return (
    <>
        <div className="product-img-wrapper bg-[#ebeff3] py-[43px] rounded-[6px] w-full flex items-center justify-center mb-[16px]">
            <Image className='w-[202px] h-[202px]' src={`${IMG_API}/${item.image}`} alt={item.name} width={202} height={202} priority />
        </div>
        <div className="">
            <p className='line-clamp-2 text-[16px] text-[#545D6A] mb-[28px]'>{item.description}</p>
        <div className="flex justify-between items-end">
        <div className="">
            <strong className='font-black text-[28px] text-[#0A1729] mb-[10px]'>{formatPrice(item.price)} uzs</strong>
            <p className='bg-[#F02C961A] text-[#F02C96] py-[7px] px-[10px] text-[15px] rounded-[3px]'>6 oy / 1 200 000 uzs</p>
        </div>
        <div className="flex items-center gap-[10px]">
            <Button extrStyle='bg-transparent !text-[#545D6A] border-[1px] border-[#EBEFF3] !p-0 w-[52px] h-[52px] flex items-center justify-center' iconPosition='right' icon={<CompareIcon />} />
            <Button extrStyle='!p-0 w-[52px] h-[52px] flex items-center justify-center' iconPosition='right' icon={<ShopIcon />} />
        </div>
        </div>
        </div>
    </>
    )
}

export default ProductItem