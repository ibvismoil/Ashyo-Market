'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { LinkIcon, PtintIcon } from '@/assets/icons'

export default function AboutUsPage() {
  const t = useTranslations('AboutUs')

  const navContent = [
    {
      title: t('about'),
      desc: "Ashyo 2022 yilda Toshkent shahrida tashkil etilgan."
    },
    {
      title: t('installment'),
      desc: "Ashyoda barcha elektronika maishiy texnikalar uchun oylik to‘lov rejasi"
    },
    {
      title: t('payment'),
      desc: "Siz uchun qulay usulda to‘lang do‘konda, Click, Payme orqali."
    },
    {
      title: t('delivery'),
      desc: "Ashyoda tovarlarni yetkazib berish shartlari."
    },
    {
      title: t('warranty'),
      desc: "Ashyo onlayn do‘konining kafolati va qaytarilishi haqida hamma narsani bilib oling"
    },
    {
      title: t('help'),
      desc: "Tushunmagan narsalaringiz bo‘lsa savollaringizni bering"
    }
  ]

  return (
    <div className='containers'>
      <div className='flex gap-5 !mt-[20px]'>
        <Link className='text-[15px] text-[#B6BABF] gap-[15px] flex' href={"/"}>
          <span>Bosh sahifa</span>
          <span>/</span>
        </Link>
        <Link className='text-[15px] text-[#B6BABF]' href={"/"}>
          <span>Ashyo haqida</span>
        </Link>
      </div>
      <div className="flex flex-col gap-6 px-4 sm:flex-row !mt-[42px] !mb-6">
        <aside className="w-full sm:max-w-[374x] bg-[#EBEFF3] p-4 rounded-lg">
          <ul className="space-y-6 text-sm text-black font-medium">
            {navContent.map((item, index) => (
              <li key={index} className='h-[150px] pl-[36px] py-[50px]'>
                <h3 className="hover:text-[#134E9B] block text-[18px] font-bold">{item.title}</h3>
                <p className="text-[#6B7280] font-normal text-[14px] mt-1">{item.desc}</p>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex-1">
          <h1 className="text-[20px] font-semibold text-[#1F2937] mb-5">{t('about')}</h1>
          <div className="bg-[#7161EF] rounded-xl py-8 px-6 text-white w-[776px] h-[300px] justify-center text-center mb-6">
            <h1 className='font-black text-[150px]'>Ashyo</h1>
          </div>
          <div className="space-y-8 font-(Roboto) w-[742px] text-[#515D6C] text-[18px] font-normal leading-relaxed">
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
            <p>{t('paragraph3')}</p>
            <p>{t('paragraph4')}</p>
          </div>
          <div className="mt-[30px]">
            <div className="flex gap-4 text-[#3D4754]">
              <span><PtintIcon/></span>
              <span><LinkIcon/></span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
