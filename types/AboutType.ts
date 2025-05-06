import { ChangeEventHandler, FC, FocusEventHandler } from "react"

export interface AboutType {
    placeholder?: string,
    type: 'text' | 'password' | 'number' | "tel" | "email",
    extraStyle?: string
    value?: string | number
    name? : string
    onChange?:ChangeEventHandler<HTMLInputElement>
    onFocus?: FocusEventHandler<HTMLInputElement>;  
    onBlur?: FocusEventHandler<HTMLInputElement>; 
}