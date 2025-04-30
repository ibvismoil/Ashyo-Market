import { HeaderActionType } from '@/types/HeaderCenterType'
import React, { FC } from 'react'

const HeaderAction:FC<HeaderActionType> = ({id, icon, actionCounnt}) => {
  return (
    <div className='relative w-[50px] h-[50px] bg-[#EBEFF3] flex items-center justify-center rounded-[6px] '>
        {icon}
        {actionCounnt != 0 && <span className='absolute flex items-center justify-center right-[-10px] top-[-20px] w-[20px] h-[20px] rounded-[50%] bg-[red] text-[white] font-bold text-[12px]'>{actionCounnt}</span>}
     </div>
  )
}

export default HeaderAction