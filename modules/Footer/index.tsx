import { FaceBookIcon, InstagramIcon, TelegramIcon, TwitterIcon, YouTubeIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='containers'>
      <div className="mt-[71px] flex justify-between !md:flex-col">
        <div className="mb-[70px]">
          <h3 className='text-[20px] font-bold text-[#000000B2] '>Bizning ijtimoiy tarmoqlarda</h3>
          <div className="flex items-center gap-[10px] mt-[21px] mb-[39.33px]">
            <FaceBookIcon/>
            <YouTubeIcon/>
            <TelegramIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
          </div>
          <h4 className='text-[20px] font-bold text-[#000000B2] mb-[12px]'>Mobil ilovani yuklab oling</h4>
          <div className="flex gap-[12px] mb-[57px]">
            <Image className='w-[188px] h-[66px] ' src={"/images/app.png"} alt='a' width={188} height={66} priority />
            <Image className='w-[204px] h-[66.25px] ' src={"/images/google.png"} alt='g' width={204} height={66.25} priority />
          </div>
          <span className='text-[#00000066] font-normal text-[12px]'></span>
        </div>
        <div className="">
          <h3 className='text-[#000000B2] font-bold text-[20px] ml-[4px] mb-[18px] '></h3>
          <div className="flex-col jus">
            <p className='text-[#000000B2] font-normal text-[16px] '></p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'></p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'></p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'></p>
            <p className='text-[#000000B2] font-normal text-[16px] mt-[12px]'></p>
          </div>
        </div>
        <div className="">
          <h3 className='text-[#000000B2] font-bold text-[20px] ml-[8px] mb-[13px]'></h3>
          <h2 className='text-[#06172D] font-bold text-[24px] mb-[32px]'>+998 (71) 123-45-67</h2>
          <p className='ml-[4px] text-[#000000B2] font-normal text-[16px] mb-[12px]'></p>
          <div className="w-[314px] bg-[#EBEFF3] flex gap-[70px] items-center rounded-[6px] ">
            <span className='text-[#0000004D] text-[12px] font-normal py-[19px] pl-[11px] '></span>
            <Image className='w-[24px] h-[24px]   ' src={"/images/footer.icon.png"} alt='img' width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer