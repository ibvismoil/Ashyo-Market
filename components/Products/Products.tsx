"use client"
import React, { FC } from 'react';
import 'swiper/css';
import "./style.css";
import 'swiper/css/pagination';
import ProductItem from './ProductItem';
import { Navigation } from 'swiper/modules';
import { ProductType } from '@/types/ProductType';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getProducts } from '@/service/getPraducts';

const Products: FC<{ title: string, api: string }> = ({ title, api }) => {
  const { data: products, isLoading } = getProducts(api)

  return (
    <div className="products pb-[80px] ">
      <div className="containers !mb-[50px]">
        <h2 className='text-[#000000] text-[32px] font-bold leading-[130%]'>{title}</h2>
      </div>
      <Swiper slidesPerView={"auto"} spaceBetween={30} pagination={{ clickable: true }} modules={[Navigation]} className="mySwiper">
        {isLoading ? (
          Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="w-24 h-5 bg-gray-300 animate-pulse rounded" />
          ))
        ) : (
          products.map((item: ProductType, index: number) => (
            <SwiperSlide key={item.id} className="swiper-slide animate-dice" style={{ animationDelay: `${index * 150}ms` }}>
              <ProductItem item={item} />
            </SwiperSlide>
          ))
        )}
      </Swiper>

    </div>
  )
}

export default Products