import { InputType } from '@/types/InputType'
import React, { FC } from 'react'

const Input:FC<InputType> = ({placeholder, extraStyle, type, onChange, value}) => {
  return (
    <input value={value} onChange={onChange} className={`py-[15px] pl-[20px] bg-[#EBEFF3] rounded-[6px] outline-none    ${extraStyle}`} type={type} placeholder={placeholder}/>
)
}

export default Input