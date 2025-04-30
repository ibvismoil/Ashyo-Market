import { CompareIcon, LikeIcon, ProfileIcon, ShopIcon } from '@/assets/icons'
import HeaderAction from '@/components/HeaderAction'
import { HeaderActionType } from '@/types/HeaderCenterType'
import React from 'react'

const HeaderCenterActions = () => {
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
        <div className='flex gap-[15px]'>
            {activeList.map((item:HeaderActionType) => <HeaderAction key={item.id} actionCounnt={item.actionCounnt} icon={item.icon} />)}
        </div>
    )
}

export default HeaderCenterActions