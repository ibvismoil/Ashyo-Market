"use client"
import { IMG_API } from '@/hooks/getEnv'
import { getCategories } from '@/service/getCategories'
import { HeaderBottomType } from '@/types/HeaderButtomType'
import Image from 'next/image'
import React from 'react'
import "./style.css"

const BrandCategory = () => {
    const { data: categories } = getCategories()
    // console.log(categories);
    
    return (
    <div className="containers !pb-[101px] brand-category-wrapper">
            {categories.map((item: HeaderBottomType, index: number) => (
        <div key={item.id} className={`brand-category-item item-${index + 1}`}>
      <span className="category-title">{item.name}</span>
      <Image className="category-image" src={`${IMG_API}/${item.image}`} alt="Category img" width={343} height={254} priority/>
        </div>
      ))}
    </div>
    )
}

export default BrandCategory