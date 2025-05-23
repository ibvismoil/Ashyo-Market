"use client";
import "./style.css";
import React from "react";
import Image from "next/image";
import { IMG_API } from "@/hooks/getEnv";
import { getCategories } from "@/service/getCategories";
import { HeaderBottomType } from "@/types/HeaderButtomType";

const BrandCategory = () => {
  const { data: categories } = getCategories();

  return (
    <div className="containers !pb-[101px] brand-category-wrapper">
      {categories.map((item: HeaderBottomType, index: number) => (
        <div key={item.id} className={`brand-category-item item-${index + 1}`}>
          <span className="category-title">{item.name}</span>
          <Image className="category-image object-contain" src={`${IMG_API}/${item.image}`} alt="Category img" width={343} height={254} priority/>
        </div>
      ))}
    </div>
  );
};

export default BrandCategory;