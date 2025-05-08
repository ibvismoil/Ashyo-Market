import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeaderForm from '@/components/HeaderForm'
import HeaderCenterActions from './HeaderCenterActions'
import HeaderPopapCategory from './HeaderPopapCategoriy'
import HeaderCenterMobile from './HeaderCenterMobile'

const HeaderCenter = () => {

  return (
    <div className='containers'>
      <div>
        <HeaderCenterMobile />
      </div>
      <div className='hidden sm:block '>
        <div className="flex relative items-center justify-between containers !py-[30px]">
          <div className=''>
            <Link className='flex items-center translate-x-[-6px]' href={'/'}>
              <Image className='w-[48px] h-[48px] scale-[1.5]' src={'/Logo.svg'} alt='Logo' width={48} height={48} priority />
              <span className='translate-x-[-5px] text-[#134E9B] text-[36px] leading-[100%] font-black'>Ashyo</span>
            </Link>
          </div>
          <HeaderForm />
          <HeaderCenterActions />
          <HeaderPopapCategory />
        </div>
      </div>
    </div>
    ) 
}
export default HeaderCenter