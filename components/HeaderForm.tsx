"use client"
import Input from './Input'
import Link from 'next/link'
import Button from './Button'
import debounce from '@/hooks/debouce'
import { useTranslations } from 'next-intl'
import { Context } from '@/context/Context'
import { instance } from '@/hooks/instance'
import { ArrowDownIcon, SearchIcon } from '@/assets/icons'  
import { HeaderSearchType } from '@/types/HeaderCenterType'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'

const HeaderForm = () => {
    const t = useTranslations("HeaderCenterContent")
    const { setShowCategory, showCategory } = useContext(Context)
    const [searchValue, setSearchValue] = useState<string>("")
    const [searchResult, setSearchResult] = useState<HeaderSearchType[]>([])
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value)
        setIsLoading(true)
        setShowSearch(true)
        if (!e.target.value) {
            setShowSearch(false)
            setIsLoading(false)
        }
    }

    function handleSearchClick(name: string) {
        setSearchValue(name)
        setShowSearch(false)
    }

    const searchWaitingValue = debounce(searchValue, 1000)
    useEffect(() => {
        if (searchWaitingValue) {
            instance().get("/categories/search", { params: { name: searchWaitingValue } }).then(res => {
                setSearchResult(res.data);
                setIsLoading(false)
            })
        }
    }, [searchWaitingValue])

    return (
        <div className="flex items-center gap-2 w-full px-2">
            <Button
                onClick={() => setShowCategory(!showCategory)}
                title={t("category")}
                iconPosition="right"
                icon={<ArrowDownIcon className={`transition-transform duration-300 ${showCategory ? 'rotate-180' : ''}`} />}
                extrStyle="text-white px-4 py-2 rounded-lg text-sm md:text-base md:px-6"
            />

            <div className="relative flex-1">
                <Input value={searchValue} onChange={handleSearch} extraStyle="w-full pr-12 bg-gray-100 border-none rounded-lg text-sm md:text-base" type="text" placeholder={t("placeholder")}/>
                <Button extrStyle="absolute top-0 bottom-0 right-0 !p-0 w-12 h-full p-0 rounded-r-lg flex items-center justify-center" iconPosition="right" icon={<SearchIcon/>}/>
                <ul
                    className={`absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg transition-all duration-300 overflow-hidden z-50 ${
                        showSearch ? (searchResult.length > 2 ? "h-auto overflow-auto py-4" : "h-auto py-4") : "h-0"
                    }`}
                >
                    {isLoading ? (
                        <li className="text-center text-gray-500 py-4">Loading...</li>
                    ) : (
                        showSearch &&
                        searchResult.map((item) => (
                            <li key={item.id} className="border-b last:border-b-0 border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
                                <Link href={`/pages/products?category=${item.id}`} className="block px-6 py-3 text-[#545D6A]" onClick={() => handleSearchClick(item.name)}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default HeaderForm