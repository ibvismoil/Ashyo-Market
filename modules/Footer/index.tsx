import { AppStoreIcon, ChatIcon, FaceBookIcon, GooglePLayIocn, TelegramIcon, TwitterIcon, YouTubeIcon } from '@/assets/icons'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='containers'>
      <div className="mt-[71px] flex justify-between !md:flex-col">
        <div className="mb-[70px]">
          <h3 className='text-[20px] font-bold text-[#000000B2] '>Bizning ijtimoiy tarmoqlarda</h3>
          <div className="flex items-center gap-[10px] mt-[21px] mb-[39.33px]">
            <FaceBookIcon />
            <YouTubeIcon />
            <TelegramIcon />
            <TwitterIcon />
          </div>
          <h4 className='text-[20px] font-bold text-[#000000B2] mb-[12px]'>Mobil ilovani yuklab oling</h4>
          <div className="flex gap-[12px] mb-[57px]">
            <div className="flex items-center gap-2 px-[30px] py-4 rounded-[10px] bg-[#EBEFF3] w-fit">
              <GooglePLayIocn />
              <h1 className="font-montserrat font-bold text-[16px] leading-[110%] text-[#0A0A0A]">
                Google Play
              </h1>
            </div>
            <div className="flex items-center gap-2 px-[30px] py-4 rounded-[10px] bg-[#EBEFF3] w-fit">
              <AppStoreIcon />
              <h1 className="font-montserrat font-bold text-[16px] leading-[110%] text-[#0A0A0A]">
                App Store
              </h1>
            </div>
          </div>
          <span className='text-[#00000066] font-normal text-[12px]'>© 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.</span>
        </div>
        <div className="">
          <h3 className='text-[#000000B2] font-bold text-[20px] ml-[4px] mb-[18px]'>Menyu</h3>
          <div className="">
            <p className='text-[#000000B2] font-normal text-[16px] '>Ashyo haqida</p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'>Foydalanish shartlari</p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'>Maxfiylik va hafsizlik siyosati</p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'>Mahsulotlarni va tovarlarni qaytarish siyosati</p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'>Biz bilan aloqa</p>
          </div>
        </div>
        <div className="">
          <h3 className='text-[#000000B2] font-bold text-[20px] ml-[8px] mb-[13px]'>Aloqa</h3>
          <h2 className='text-[#06172D] font-bold text-[24px] mb-[32px]'>+998 (71) 123-45-67</h2>
          <p className='ml-[4px] text-[#000000B2] font-normal text-[16px] mb-[12px]'>Savolingiz bormi?</p>
          <div className="flex items-center bg-[#EBEFF3] px-1 rounded-[12px] w-full">
            <input type="text" placeholder="O’zingiz qiziqtirgan savollarni bering"
              className="bg-transparent outline-none px-[19px] py-[15px] flex-1 text-black font-montserrat text-base placeholder:text-[#9CA3AF]"/>
            <ChatIcon/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer