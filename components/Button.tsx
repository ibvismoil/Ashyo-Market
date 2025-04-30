import { ButtonType } from '@/types/ButtonType'
import React, { FC } from 'react'

const Button: FC<ButtonType> = ({ icon, iconPosition, title, extrStyle, onClick }) => {  // Generic Type
    return (
        <button onClick={onClick} className={`bg-[#134E9B] text-white font-medium text-[16px] py-[15px] px-[25px] rounded-[6px] flex items-center justify-center gap-[20px] cursor-pointer hover:opacity-80 duration-300   ${extrStyle}`}>
            {icon && iconPosition == "left" && icon}
            {title}
            {icon && iconPosition == "right" && icon}
        </button>
    )
}

export default Button