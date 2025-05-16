"use client"
import React, { useState } from 'react'
import HeaderAction from '@/components/HeaderAction'
import { HeaderActionType } from '@/types/HeaderCenterType'
import { CompareIcon, LikeIcon, ProfileIcon, ShopIcon } from '@/assets/icons'
import Modal from '@/components/Modal'
import { Auth } from './Auth'
import { useRouter } from 'next/navigation'

const HeaderCenterActions = () => {
  const [openAuth, setOpenAuth] = useState(false)
  const router = useRouter()

  const activeList = [
    {
      id: 1,
      icon: <CompareIcon />,
      actionCounnt: 2,
      url: '/pages/compare'
    },
    {
      id: 2,
      icon: <LikeIcon />,
      actionCounnt: 11,
      url: '/pages/wishlist'
    },
    {
      id: 3,
      icon: <ShopIcon />,
      actionCounnt: 7,
      url: '/pages/order'
    },
    {
      id: 4,
      icon: <ProfileIcon />,
      actionCounnt: 0,
      url: '/pages/profile'
    }
  ]

  return (
    <div className="flex items-center space-x-4">
      {activeList.map((item: HeaderActionType & { url?: string }) =>
        item.id === 4 ? (
          <div key={item.id} onClick={() => setOpenAuth(true)}>
            <HeaderAction actionCounnt={item.actionCounnt} icon={item.icon} />
          </div>
        ) : item.url ? (
          <div key={item.id} onClick={() => router.push(item.url)} className="cursor-pointer">
            <HeaderAction actionCounnt={item.actionCounnt} icon={item.icon} />
          </div>
        ) : (
          <HeaderAction key={item.id} actionCounnt={item.actionCounnt} icon={item.icon} />
        )
      )}

      {openAuth && (
        <Modal open={openAuth} setOpen={setOpenAuth}>
          <Auth onClose={() => setOpenAuth(false)} />
        </Modal>
      )}
    </div>
  )
}

export default HeaderCenterActions
