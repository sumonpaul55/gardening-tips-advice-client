"use client"
import { NextUIProvider } from '@nextui-org/react'
import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { UserProvider } from '@/context/user.Provider'

const GProvider = ({ children }: { children: ReactNode }) => {
    return (
        <UserProvider>
            <Provider store={store}>
                <NextUIProvider>
                    <Toaster />
                    {children}
                </NextUIProvider>
            </Provider>
        </UserProvider>
    )
}

export default GProvider