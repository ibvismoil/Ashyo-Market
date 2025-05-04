"use client"
import "./style.css"
import React from 'react'
import Image from 'next/image'
import { IMG_API } from '@/hooks/getEnv'
import { getBrands } from '@/service/getBrands'
import { BrandsType } from '@/types/BrandsType'

const Brands = () => {
  const { data: brands } = getBrands()

  return (
    <div className="containers brands-wrapper grid">
      {brands.map((item: BrandsType) => (
        <div key={item.id} className="brands-iteam">
          {item.image == null ? <span>{item.name}</span> : <Image className='w-[206px] h-[73px] object-contain' src={`${IMG_API}/${item.image}`} alt={item.name} width={206} height={73} priority />}
        </div>
      ))}
    </div>
  )
}

export default Brands