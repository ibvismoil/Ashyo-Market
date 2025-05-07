import {
  AppStoreIcon,
  ChatIcon,
  FaceBookIcon,
  GooglePLayIocn,
  TelegramIcon,
  TwitterIcon,
  YouTubeIcon
} from '@/assets/icons'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-16 py-8 bg-white border-t border-[#E5E5E5]">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex-1">
          <h3 className="text-[20px] font-bold text-[#000000B2] mb-4">
            Bizning ijtimoiy tarmoqlarda
          </h3>
          <div className="flex items-center gap-[10px] mb-[39px]">
            <FaceBookIcon />
            <YouTubeIcon />
            <TelegramIcon />
            <TwitterIcon />
          </div>

          <h4 className="text-[20px] font-bold text-[#000000B2] mb-3">
            Mobil ilovani yuklab oling
          </h4>
          <div className="flex gap-[12px] mb-[57px]">
            <div className="flex items-center gap-2 px-[30px] py-4 rounded-[10px] bg-[#EBEFF3] w-fit">
              <GooglePLayIocn />
              <span className="font-montserrat font-bold text-[16px] leading-[110%] text-[#0A0A0A]">
                Google Play
              </span>
            </div>
            <div className="flex items-center gap-2 px-[30px] py-4 rounded-[10px] bg-[#EBEFF3] w-fit">
              <AppStoreIcon />
              <span className="font-montserrat font-bold text-[16px] leading-[110%] text-[#0A0A0A]">
                App Store
              </span>
            </div>
          </div>
          
          <span className="text-[#00000066] font-normal text-[12px] block md:hidden">
            © 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-[#000000B2] font-bold text-[20px] mb-[18px]">
            Menyu
          </h3>
          <ul className="text-[#000000B2] font-normal text-[16px] space-y-[12px]">
            <li>Ashyo haqida</li>
            <li>Foydalanish shartlari</li>
            <li>Maxfiylik va hafsizlik siyosati</li>
            <li>Mahsulotlarni va tovarlarni qaytarish siyosati</li>
            <li>Biz bilan aloqa</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-[#000000B2] font-bold text-[20px] mb-[13px]">
            Aloqa
          </h3>
          <h2 className="text-[#06172D] font-bold text-[24px] mb-[32px]">
            +998 (71) 123-45-67
          </h2>
          <div className="hidden md:block">
            <p className="text-[#000000B2] font-normal text-[16px] mb-[12px]">
              Savolingiz bormi?
            </p>
            <div className="flex items-center bg-[#EBEFF3] px-1 rounded-[12px]">
              <input
                type="text"
                placeholder="O’zingiz qiziqtirgan savollarni bering"
                className="bg-transparent outline-none px-[19px] py-[15px] flex-1 text-black font-montserrat text-base placeholder:text-[#9CA3AF]"
              />
              <ChatIcon />
            </div>
          </div>

          <span className="text-[#00000066] font-normal text-[12px] hidden md:block mt-6">
            © 2022 Ashyo ro’hatdan otgan litsenzalangan bu brend.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
