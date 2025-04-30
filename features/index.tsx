import Header from '@/modules/Header'
import React, { FC, ReactNode } from 'react'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout