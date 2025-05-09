import React, { FC } from 'react'
import { ButtonType } from '@/types/ButtonType'

const Button: FC<ButtonType> = ({ icon, iconPosition, title, extrStyle, onClick }) => {  
    return (
        <button onClick={onClick} className={`bg-[#134E9B] text-white font-medium rounded-[6px] flex items-center justify-center cursor-pointer hover:opacity-80 duration-300 md:py-[15px] md:px-[25px] md:text-[16px] md:gap-[20px] ${extrStyle}`}>
            {icon && iconPosition == "left" && icon}
            {title}
            {icon && iconPosition == "right" && icon}
        </button>
    )
}

export default Button