"use client"
import './styles.css'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, ChangeEvent, useContext, useEffect } from 'react'
import { MenuIcon, } from 'lucide-react'
import Modal from '@/components/Modal'
import { Auth } from './Auth'
import { useTranslations } from 'next-intl'
import { Context } from '@/context/Context'
import { instance } from '@/hooks/instance'
import debounce from '@/hooks/debouce'
import { HeaderSearchType, HeaderActionType } from '@/types/HeaderCenterType'
import HeaderAction from '@/components/HeaderAction'
import { ArrowDownIcon, CompareIcon, LikeIcon, ProfileIcon, SearchIcon, ShopIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Input from '@/components/Input'
import HeaderPopapCategory from './HeaderPopapCategoriy'

const HeaderCenterMobile = () => {
    const t = useTranslations("HeaderCenterContent")
    const { setShowCategory, showCategory } = useContext(Context)
    const [searchValue, setSearchValue] = useState<string>("")
    const [searchResult, setSearchResult] = useState<HeaderSearchType[]>([])
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const [openAuth, setOpenAuth] = useState(false)

    const activeList: HeaderActionType[] = [
        {
            id: 1,
            icon: <CompareIcon />,
            actionCounnt: 2
        },
        {
            id: 2,
            icon: <LikeIcon />,
            actionCounnt: 11
        },
        {
            id: 3,
            icon: <ShopIcon />,
            actionCounnt: 7
        },
        {
            id: 4,
            icon: <ProfileIcon />,
            actionCounnt: 0
        }
    ]

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
        <div className='relux'>
            <div className="flex flex-col w-full px-2">
                <div className="flex items-center justify-between w-full mb-2">
                    <Link className="flex items-center translate-x-[-6px]" href={'/'}>
                        <Image className="w-[34px] h-[34px] scale-[1.5]" src={'/Logo.svg'} alt="Logo" width={34} height={34} priority/>
                        <span className="translate-x-[-5px] text-[#134E9B] font-black text-[27.74px]">
                            Ashyo
                        </span>
                    </Link>
                  <p className="text-center font-semibold text-[14px]">
                    +998 (71) 123-45-67
                 </p>
                 <button onClick={() => setOpenSidebar(true)}>
                      <MenuIcon className="w-6 h-6 text-gray-600" />
                 </button>
            </div>

            <div className="flex items-center gap-2 w-full">
                  <Button onClick={() => setShowCategory(!showCategory)} title={t("category")}
                    iconPosition="right"
                    icon={<ArrowDownIcon className={`w-[5px] h-[9px] transition-transform duration-300 ${showCategory ? 'rotate-180' : ''}`} />}
                    extrStyle="text-[12px] py-[12px] px-[18px] gap-[10px]"/>
            <div className="relative flex-1">
                    <Input value={searchValue} onChange={handleSearch} extraStyle="w-full pr-12 py-[12px] border-none text-sm" type="text" placeholder={t("placeholder")}/>
                    <Button extrStyle="absolute top-0 bottom-0 right-0 !py-[12px] !px-[18px] rounded-r-lg flex items-center justify-center" iconPosition="right" icon={<SearchIcon   />}/>
                <ul className={`absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg transition-all duration-300 overflow-hidden z-50 ${showSearch ? (searchResult.length > 2 ? "h-auto overflow-auto py-4" : "h-auto py-4") : "h-0"}`}>
                    {isLoading ? (
                        <li className="text-center text-gray-500 py-4">Loading...</li>
                    ) : (
                        showSearch &&
                        searchResult.map((item) => (
                        <li key={item.id} className="border-b last:border-b-0 border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
                            <Link href={"/"} className="block px-6 py-3 text-[#545D6A]" onClick={() => handleSearchClick(item.name)}>
                                {item.name}
                            </Link>
                        </li>
                      ))
                    )}
                </ul>
           </div>
        </div>
        <HeaderPopapCategory />
        <div className={`fixed top-0 right-0 h-full w-64 bg-white/85 shadow-lg transform transition-transform duration-300 ease-in-out z-50 backdrop-blur-sm ${openSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                 <div className="flex justify-end p-4">
                   <button onClick={() => setOpenSidebar(false)} className="text-gray-600">
                       ✕
                   </button>
                </div>
                <div className="flex flex-col text-center space-y-4 p-4">
                    {activeList.map((item: HeaderActionType) =>
                      item.id === 4 ? (
                        <div key={item.id} onClick={() => { setOpenAuth(true); setOpenSidebar(false); }}>
                             <HeaderAction actionCounnt={item.actionCounnt} icon={item.icon} />
                        </div>
                       ) : (
                        <HeaderAction key={item.id} actionCounnt={item.actionCounnt} icon={item.icon} />
                       )
                    )}
               </div>
            </div>

             {openSidebar && (
                 <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setOpenSidebar(false)}/>
              )}
              {openAuth && (
                <Modal open={openAuth} setOpen={setOpenAuth}>
                    <Auth onClose={() => setOpenAuth(false)} />
                </Modal>
             )}
         </div>
     </div>
   )
}

export default HeaderCenterMobile