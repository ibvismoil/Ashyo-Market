export interface HeaderBottomType {
    createdAt: string,
    icon: string,
    id: number,
    image: string,
    name: string,
    parentCategoryId: null | number,
    subCategories:HeaderBottomType[],
    updataAt:string
}