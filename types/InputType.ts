import { ChangeEventHandler } from "react"

export interface InputType {
    placeholder:string,
    extraStyle?:string,
    type:"text" | "password" | "number" | " tel",
    onChange?:ChangeEventHandler<HTMLInputElement>,
    value?:string
}