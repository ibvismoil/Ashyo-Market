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
    const [ShowSearch, setShowSearch] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function hendleSearch(e: ChangeEvent<HTMLInputElement>) {
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

    const searchWatingValue = debounce(searchValue, 1000)
    useEffect(() => {
        if (searchWatingValue) {
            instance().get("/categories/search", { params: { name: searchWatingValue } }).then(res => {
                setSearchResult(res.data);
                setIsLoading(false)
            })
        }
    }, [searchWatingValue])

    return (
        <div className='flex items-center gap-[10px]'>
            <Button onClick={() => setShowCategory(!showCategory)} title={t("category")}
                iconPosition='right'
                icon={<ArrowDownIcon className={`transition-transform duration-300 ${showCategory ? 'rotate-180' : ''}`} />}/>
            <div className="w-[518px] relative ">
                <Input value={searchValue} onChange={hendleSearch} extraStyle='w-full' type='text' placeholder={t("placeholder")} />
                <Button extrStyle='absolute top-0 bottom-0 right-0 !w-[58px] h-[100%] !p-0' iconPosition='right' icon={<SearchIcon />} />
                <ul className={`absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg transition-all duration-300 overflow-hidden z-50 ${ShowSearch ? (searchResult.length > 2 ? "h-auto overflow-auto py-4" : "h-auto py-4") : "h-0"
                    }`}>
                    {isLoading ? (
                        <li className="text-center text-gray-500 py-4">Loading...</li>
                    ) : (
                        ShowSearch &&
                        searchResult.map((item) => (
                            <li key={item.id} className="border-b last:border-b-0 border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
                                <Link href={"/"} className="block px-6 py-3 text-[#545D6A]" onClick={() => handleSearchClick(item.name)}>{item.name} </Link>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default HeaderForm