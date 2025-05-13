'use client'
import Image from 'next/image'
import Button from '../Button'
import { toast } from 'sonner'
import { IMG_API } from '@/hooks/getEnv'
import { useTranslations } from 'next-intl'
import formatPrice from '@/hooks/formatPrice'
import { useRouter } from '@/i18n/navigation'
import getLikeApiHooks from '@/service/getLike'
import { ProductType } from '@/types/ProductType'
import { useQueryClient } from '@tanstack/react-query'
import React, { FC, useEffect, useState } from 'react'
import { CompareIcon, ShopIcon, WishlistIcon } from '@/assets/icons'

const ProductItem: FC<{ item: ProductType }> = ({ item }) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const t = useTranslations('Products')
  const likeMutation = getLikeApiHooks()
  const [liked, setLiked] = useState(false)

  const monthlyPayment = Math.ceil(item.price / 12)

  useEffect(() => {
    setLiked(item.is_liked || false)
  }, [item.is_liked])

  const handleClick = () => {
    router.push(`/product_details/${item.id}`)
    queryClient.invalidateQueries({ queryKey: ['single_page'] })
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const user = JSON.parse(localStorage.getItem("user") || "null")

    if (!user || !user.id || !item.id) {
      toast.error("Вы не авторизованы")
      return
    }

    likeMutation.mutate(
      {
       productId: Number(item.id),
        userId: Number(user.id)
      },
      {
        onSuccess: (res: any) => {
          setLiked(prev => !prev)
          toast.success(res?.message || (liked ? "Удалено из избранного" : "Добавлено в избранное"))
        },
        onError: () => {
          toast.error("Что-то пошло не так")
        }
      }
    )
  }

  return (
    <>
      <div onClick={handleClick} className="relative product-img-wrapper bg-[#ebeff3] py-[43px] rounded-[6px] w-full flex items-center justify-center mb-[16px]">
        <Image className='md:w-[202px] w-[130px] h-[202px] object-contain' src={`${IMG_API}/${item.image}`} alt={item.name} width={202} height={202} priority/>
        {item.is_aksiya && (
          <span className='absolute font-semibold top-[15px] left-[15px] text-[14px] text-[#E81504] bg-white py-[7px] px-[10px] rounded-[6px]'>
            {t('akciys')}
          </span>
        )}
        <div onClick={handleWishlistToggle} className={`absolute top-[21px] right-[25px] cursor-pointer transition-transform hover:scale-110`}>
          <WishlistIcon className={liked ? 'text-[#F02C96]' : 'text-[#333]'} />
        </div>
      </div>
      <div onClick={handleClick} className="">
        <p className='line-clamp-2 md:text-[16px] text-[12px] text-[#545D6A] mb-[28px]'>{item.description}</p>
        <div className="md:flex justify-between items-end">
          <div onClick={handleClick} className="flex gap-[15px] items-center justify-between md:block md:gap-0">
            <strong className='font-black md:text-[28px] text-[15px] text-[#0A1729] mb-[10px]'>{formatPrice(item.price)} uzs</strong>
            <p className='bg-[#F02C961A] text-[#F02C96] py-[7px] px-[10px] text-[10px] md:text-[15px] rounded-[3px]'>{item.nasiya} / {formatPrice(monthlyPayment)} uzs</p>
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <Button extrStyle='bg-transparent !text-[#545D6A] border-[1px] border-[#EBEFF3] flex w-[52px] h-[52px] !p-0 items-center justify-center' iconPosition='right' icon={<CompareIcon />}/>
            <Button extrStyle='md:!p-0 py-2 md:w-[52px] text-[12px] h-[52px] w-[125px] gap-[10px] flex items-center justify-center' iconPosition='right' title={<span className="block md:hidden">Savatcha</span>} icon={<ShopIcon className='w-[16px] h-[16px]' />}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
