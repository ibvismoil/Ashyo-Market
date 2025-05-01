"use client"
import 'swiper/css';
import './styles.css'
import React from 'react'
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Image from 'next/image';
import 'swiper/css/effect-fade'; 
import { API, IMG_API } from '@/hooks/getEnv';
import Button from '@/components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BannersType } from '@/types/BannersType';
import { getBanners } from '@/service/getBanners';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'; 

const Hero = () => {
  const { data: banners = [], isError, isLoading } = getBanners();

  return (
    <div className="bg-[#F3F0F0] py-11 mt-[10px]">
      <div className="containers">
        <Swiper pagination={{ clickable: true }} autoplay={{ delay: 5000, disableOnInteraction: false, }} effect="fade" fadeEffect={{ crossFade: true }} modules={[Pagination, Autoplay, EffectFade]} className="mySwiper" >
          {banners.map((item: BannersType, index: number) => (
            <SwiperSlide key={item.id}>
              <div className="relative bg-[#F3F0F0] flex flex-col md:flex-row gap-[15px] items-center justify-between h-[450px]">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-[#1A1D29]">
                    {item.name}
                  </h2>
                  <p className="text-[#545D6A] text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>
                  <Button title="Batafsil" />
                </div>
                <div className={`relative mt-10 md:mt-0 ${index === 2 ? 'w-[650px] h-[650px]' : 'w-[450px] h-[450px]'}`}>
                  <Image src={`${IMG_API}/${item.image}`} alt="Banner Image" fill className="object-contain " priority />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>   
  )
}

export default Hero
