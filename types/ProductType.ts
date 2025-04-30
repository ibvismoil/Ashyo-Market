import { HeaderCategoriesType } from "./HeaderButtomType";

export interface ProductType {
    id: number;
    name: string;
    is_liked: boolean;
    category_id: string;
    description: string;
    nasiya: string;
    summary: string;
    price: number;
    rating: number;
    is_aksiya: boolean;
    brand_id: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    comments: any;
    like: any;
    category: HeaderCategoriesType;
    product_item: any;
}