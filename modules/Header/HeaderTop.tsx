'use client'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { LocationIcon } from '@/assets/icons'
import React, { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import { usePathname, useRouter } from '@/i18n/navigation'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function HeaderTop() {
    const t = useTranslations('HeaderTopContent')
    const router = useRouter()
    const pathname = usePathname()

    const [lang, setLang] = useState<'uz' | 'ru' | 'en'>('uz')

    const changeLang = (value: string) => {
        setLang(value as 'uz' | 'ru' | 'en')
        setCookie('NEXT_LOCALE', value)
        router.push(pathname, { locale: value })
    }

    useEffect(() => {
        const locale = getCookie('NEXT_LOCALE') as string
        if (locale === 'uz' || locale === 'ru' || locale === 'en') {
            setLang(locale)
        }
    }, [])

    return (
        <div className="bg-[#EBEFF3] py-[11px]">
            <div className="containers flex items-center justify-between">
                <nav className="flex items-center gap-7">
                    <Link href="/location" className="flex items-center gap-[13px] text-sm font-normal leading-[130%] text-[#545D6A] hover:text-[#134E9B]">
                        <LocationIcon />
                        <span>{t('location')}</span>
                    </Link>
                    <Link href="/about" className="text-sm font-normal leading-[130%] text-[#545D6A] hover:text-[#134E9B]">
                        {t('about')}
                    </Link>
                    <Link href="/products" className="text-sm font-normal leading-[130%] text-[#545D6A] hover:text-[#134E9B]">
                        {t('products')}
                    </Link>
                    <Link href="/contact" className="text-sm font-normal leading-[130%] text-[#545D6A] hover:text-[#134E9B]">
                        {t('contact')}
                    </Link>
                </nav>
                <div className="flex items-center gap-[25px]">
                    <Link href="tel:+998711234567" className="text-sm font-semibold leading-[130%] text-[#545D6A]">
                        +998 (71) 123-45-67
                    </Link>
                    <Select onValueChange={changeLang} value={lang}>
                        <SelectTrigger className="w-[70px] flex items-center border-none justify-between text-[#545D6A] text-sm">
                            <SelectValue defaultValue={lang} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className='rounded-[5px] bg-[#ffffff]'>
                                <SelectItem className='cursor-pointer' value="uz">Uz</SelectItem>
                                <SelectItem className='cursor-pointer' value="ru">Ru</SelectItem>
                                <SelectItem className='cursor-pointer' value="en">En</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop