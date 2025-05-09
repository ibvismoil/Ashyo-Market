"use client"
import 'swiper/css';
import './styles.css'
import React from 'react'
import 'swiper/css/autoplay';
import Link from 'next/link';
import 'swiper/css/pagination';
import Image from 'next/image';
import 'swiper/css/effect-fade';
import { API, IMG_API } from '@/hooks/getEnv';
import Button from '@/components/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BannersType } from '@/types/BannersType';
import { getBanners } from '@/service/getBanners';
import Skeleton from '@mui/material/Skeleton';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Hero = () => {
  const { data: banners = [], isError, isLoading } = getBanners();

  if (isLoading) {
    return (
      <div className="bg-[#F3F0F0] py-6 sm:py-11">
        <div className="containers px-4 sm:px-6">
          <div className="flex flex-col items-center h-[300px] sm:h-[450px] justify-center">
            <Skeleton variant="text" width="80%" height={48} sx={{ mb: 2, bgcolor: '#EDEFF3' }} />
            <Skeleton variant="text" width="60%" height={24} sx={{ mb: 4, bgcolor: '#EDEFF3' }} />
            <Skeleton variant="rectangular" width={150} height={40} sx={{ borderRadius: '6px', mb: 4, bgcolor: '#EDEFF3' }} />
            <Skeleton variant="rectangular" width="100%" height={200} sx={{ borderRadius: '8px', bgcolor: '#EDEFF3' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F0F0] mt-[10px] py-6 sm:py-11">
      <div className="containers px-4 sm:px-6">
        <Swiper pagination={{ clickable: true }} autoplay={{ delay: 5000, disableOnInteraction: false }} effect="fade" fadeEffect={{ crossFade: true }} modules={[Pagination, Autoplay, EffectFade]} className="mySwiper">
          {banners.map((item: BannersType, index: number) => (
            <SwiperSlide key={item.id}>
              <div className="relative flex flex-col items-center md:flex-row md:items-center justify-between h-[300px] sm:h-[450px] gap-4">
                <div className="max-w-md text-center md:text-left order-1">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 sm:mb-6 text-[#1A1D29]">
                    {item.name}
                  </h2>
                  <p className="text-[#545D6A] text-base sm:text-lg leading-relaxed mb-4 sm:mb-8">
                    {item.description}
                  </p>
                  <Link href={`/product_details/${item.id}`}>
                    <Button extrStyle='text-[12px] py-[12px] px-[18px]' title="Batafsil" />
                  </Link>
                </div>
                <div className={`relative order-2 ${
                    index === 2 ? 'w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px]' : 'w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]'
                  }`}>
                  <Image src={`${IMG_API}/${item.image}`} alt="Banner Image" fill className="object-contain" priority/>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero