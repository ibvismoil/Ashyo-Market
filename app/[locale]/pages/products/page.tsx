'use client'
import './style.css'
import axios from 'axios'
import { Slider } from '@mui/material'
import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import ProductItem from '@/components/Products/ProductItem'
import { useSearchParams, useRouter } from 'next/navigation'

const ProductsPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const category = searchParams.get('category') || ''
  const brand = searchParams.get('brand') || ''
  const min_price = searchParams.get('min_price') || ''
  const max_price = searchParams.get('max_price') || ''
  const page = searchParams.get('page') || '1'
  const limit = '8'

  const queryString = `category_id=${category}&brand_id=${brand}&min_price=${min_price}&max_price=${max_price}&page=${page}&limit=${limit}`

  const { data, isLoading } = useQuery({
    queryKey: ['products', { category, brand, min_price, max_price, page }],
    queryFn: () =>
      axios
        .get(`https://api.ashyo.fullstackdev.uz/products?${queryString}`)
        .then((res) => res.data),
  })
  const handleCategoryChange = (catId: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', catId)
    params.set('page', '1')
    router.push(`/pages/products?${params.toString()}`)
  }

  const handlePriceChange = (min: number, max: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('min_price', String(min))
    params.set('max_price', String(max))
    router.push(`/pages/products?${params.toString()}`)
  }

  const [priceRange, setPriceRange] = useState([Number(min_price) || 0, Number(max_price) || 999999])

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[])
  }

  const handleSliderCommit = () => {
    handlePriceChange(priceRange[0], priceRange[1])
  }

  return (
    <div className='containers'>
      <div className="flex !mt-[70px] gap-[30px]">
        <aside className="min-w-[280px] h-[905px] w-[280px] bg-[#EBEFF3] p-[18px] rounded-[8px] max-[800px]:min-w-[220px] max-[680px]:hidden">
          <h3 className="font-medium text-[16px] leading-[34px] tracking-[0%] font-['Roboto']">Narx <span className="font-normal text-[14px] leading-[34px] tracking-[0%] font-['Roboto']">[ som ]</span></h3>
          <div>
            <div className="flex gap-[4px]">
              <div className='w-full flex flex-col'>
                <span className='text-[12px] text-[#00000066] mb-[6px]'>dan</span>
                <input type="number" value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2" />
              </div>
              <div className='w-full flex flex-col'>
                <span className='text-[12px] text-[#00000066] mb-[6px]'>gacha</span>
                <input type="number" value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full rounded-[5px] bg-[#FFFFFF] text-[14px] p-2" />
              </div>
            </div>
            <Slider value={priceRange} min={0} max={50000} step={100}
              onChange={handleSliderChange}
              onChangeCommitted={handleSliderCommit}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => `uzs ${value}`}
              sx={{ height: 5, my: '26px', '& .MuiSlider-rail': { backgroundColor: '#D1D5DB', height: 3, borderRadius: '9999px', }, '& .MuiSlider-track': { backgroundColor: '#15509E', borderRadius: '9999px', }, '& .MuiSlider-thumb': { width: 20, height: 20, backgroundColor: '#EBEFF3', border: '3px solid #15509E', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', '&:focus, &:hover, &.Mui-active': { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', }, transition: 'background-color 0.3s ease', }, }} />
          </div>

          
            <h3 className="text-[16px] font-medium mt-[20px] mb-[15px]">Бренды</h3>
            <div className="flex flex-wrap gap-[5px]">
              {['Vivo', 'Samsung', 'Apple', 'Apple', 'Nokia', 'Oppo', 'Xoaimi', 'Realmi', 'Huawei'].map((name) => (
                <button className='rounded-[30px] bg-[#FFFFFF] text-[#0A1729] text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]' key={name}>{name}</button>
              ))}
            </div>

            <h3 className="text-[16px] font-medium mt-[20px] mb-[15px]">Tezkor xotira RAM</h3>
            <div className="flex flex-wrap gap-[5px]">
              {['2', '3', '4', '6', '8', '12', '16'].map((name) => (
                <button className='rounded-[30px] bg-[#FFFFFF] text-[#0A1729] text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]' key={name}>{name} GB</button>
              ))}
            </div>

            <h3 className="text-[16px] font-medium mt-[20px] mb-[15px]">Doiymi xotira ROM</h3>
            <div className="flex flex-wrap gap-[5px]">
              {['32', '64', '128', '256', '512'].map((name) => (
                <button className='rounded-[30px] bg-[#FFFFFF] text-[#0A1729] text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]' key={name}>{name} GB</button>
              ))}
            </div>

            <h3 className="text-[16px] font-medium mt-[20px] mb-[15px]">Akkumulyator hajmi</h3>
            <div className="flex flex-wrap gap-[5px]">
              {['3000', '3200', '3600', '4000', '4500', '5000', '6000', '7000'].map((name) => (
                <button className='rounded-[30px] bg-[#FFFFFF] text-[#0A1729] text-[12px] hover:bg-[#134E9B] hover:text-[white] duration-500 cursor-pointer py-[7px] px-[18px]' key={name}>{name} mAh</button>
              ))}
            </div>
        </aside>

        <main className="flex-1">
          {isLoading ? (
            <p>Loading......</p>
          ) : (
            <div className="grid grid-cols-3 gap-5">
              {data?.items && data.items.length > 0 ? (
                data.items.map((item: any) => (
                  <div key={item.id} className="" style={{}}>
                    <ProductItem item={item} />
                  </div>
                ))
              ) : (
                <p>Нет продуктов для отображения</p>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default ProductsPage
