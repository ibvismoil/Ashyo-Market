"use client"
import React, { useState } from 'react'
import HeaderAction from '@/components/HeaderAction'
import { HeaderActionType } from '@/types/HeaderCenterType'
import { CompareIcon, LikeIcon, ProfileIcon, ShopIcon } from '@/assets/icons'
import Modal from '@/components/Modal'
import { Auth } from './Auth'

const HeaderCenterActions = () => {
    const [open, setOpen] = useState<boolean>(false)
    const activeList = [
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

    return (
        <>
            {activeList.map((item: HeaderActionType) =>
                item.id === 4 ? (
                    <div key={item.id} onClick={() => setOpen(true)}>
                        <HeaderAction actionCounnt={item.actionCounnt} icon={item.icon} />
                    </div>
                ) : (
                    <HeaderAction key={item.id} actionCounnt={item.actionCounnt} icon={item.icon} />
                )
            )}
            {open && (
                <Modal open={open} setOpen={setOpen}>
                <Auth onClose={() => setOpen(false)} />
              </Modal>                
            )}

        </>
    )
}

export default HeaderCenterActions