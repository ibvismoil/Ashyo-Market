import { ReactNode } from "react";

export interface HeaderActionType {
    id?:number,
    icon:ReactNode,
    actionCounnt:number
}
export interface HeaderSearchType{
    id:number;
    name:string;
    image:string;
    icon: string;
    parentCategoryId:number | null;
    createAT:string;
    updatedAt:string;
}