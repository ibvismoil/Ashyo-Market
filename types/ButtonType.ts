import { MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
    icon?:ReactNode,
    iconPosition?:"left" | "right", // Literal Types 
    title?:ReactNode,
    extrStyle?:string
    onClick?: MouseEventHandler<HTMLButtonElement>
}