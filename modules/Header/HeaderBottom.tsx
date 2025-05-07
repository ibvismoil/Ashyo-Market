"use client";
import HeaderForm from "@/components/HeaderForm";
import { useRouter } from "@/i18n/navigation";
import { getCategories } from "@/service/getCategories";
import { HeaderBottomType } from "@/types/HeaderButtomType";
import { useSearchParams } from "next/navigation";
import React from "react";

function HeaderBottom() {
  const { data: categories, isLoading, isError } = getCategories();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleGoCategory = (id: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", String(id));
    router.push(`/pages/products?${params.toString()}`);
  };

  return (
    <>
      <div className="containers max-xl:hidden flex justify-between items-center text-[#545D6A] gap-4 flex-wrap">
        {isLoading && (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="w-[100px] h-[18px] rounded bg-gray-300 animate-pulse" />
          ))
        )}{isError && (
          <div className="w-[100px] h-[18px] rounded bg-red-500 animate-pulse"></div>
        )}{!isLoading && !isError && categories?.map((category: HeaderBottomType) => (
          <p key={category.id} onClick={() => handleGoCategory(category.id)} className="cursor-pointer hover:text-[#134E9B] transition-colors duration-300">
            {category.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default HeaderBottom;
