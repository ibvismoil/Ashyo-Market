import React, { FC } from 'react'
import { InputType } from '@/types/InputType'

const Input:FC<InputType> = ({placeholder, extraStyle, type, onChange, value}) => {
  return (
    <input value={value} onChange={onChange} className={`md:py-[15px] pl-[20px] bg-[#EBEFF3] rounded-[6px] outline-none ${extraStyle}`} type={type} placeholder={placeholder}/>
)
}

export default Input