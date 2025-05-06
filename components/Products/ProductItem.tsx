import Image from 'next/image'
import Button from '../Button'
import React, { FC } from 'react'
import { IMG_API } from '@/hooks/getEnv'
import { useTranslations } from 'next-intl'
import formatPrice from '@/hooks/formatPrice'
import { useRouter } from '@/i18n/navigation'
import { ProductType } from '@/types/ProductType'
import { useQueryClient } from '@tanstack/react-query'
import { CompareIcon, ShopIcon, WishlistIcon } from '@/assets/icons'

const ProductItem: FC<{ item: ProductType }> = ({ item }) => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const t = useTranslations('Products')
    const monthlyPayment = Math.ceil(item.price / 12)

    function handlClick(){
        router.push(`/${item.id}`)
        queryClient.invalidateQueries({queryKey:['single_page']})
    }
 return (
    <>
        <div onClick={() => handlClick()} className="relative product-img-wrapper bg-[#ebeff3] py-[43px] rounded-[6px] w-full flex items-center justify-center mb-[16px]">
            <Image className='w-[202px] h-[202px] object-contain' src={`${IMG_API}/${item.image}`} alt={item.name} width={202} height={202} priority />
                {item.is_aksiya && <span className='absolute font-semibold top-[15px] left-[15px] text-[14px] text-[#E81504] bg-white py-[7px] px-[10px] rounded-[6px]'>{t('akciys')}</span>}
            <div className='absolute top-[21px] right-[25px]'><WishlistIcon/></div>
        </div>
        <div onClick={() => handlClick()} className="">
            <p className='line-clamp-2 text-[16px] text-[#545D6A] mb-[28px]'>{item.description}</p>
        <div className="flex justify-between items-end">
        <div onClick={() => handlClick()} className="">
            <strong className='font-black text-[28px] text-[#0A1729] mb-[10px]'>{formatPrice(item.price)} uzs</strong>
            <p className='bg-[#F02C961A] text-[#F02C96] py-[7px] px-[10px] text-[15px] rounded-[3px]'>{item.nasiya} / {formatPrice(monthlyPayment)} uzs</p>
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