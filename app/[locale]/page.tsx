import Hero from "@/modules/Hero";
import { useTranslations } from "next-intl";
import Brands from "@/modules/Brands/index";
import AirSection from "@/modules/AirSection";
import BrandCategory from "@/modules/BrandsCategory";
import Products from "@/components/Products/Products";

export default function Home() {
      const t = useTranslations('ProductsLang')
  
  return (
    <>     
      <Hero/>
      <Brands/>
      <Products api="/products" title={t('title')}/>
      <Products api="/products" title={t('title')}/>
      <Products api="/products" title={t('title')}/>
      <BrandCategory/>
      <Products api="/products" title={t('akciya')}/>
      <AirSection/>
      <Products api="/products" title={t('history')}/>
    </>
  );
}
