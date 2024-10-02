"use client"
import { NextUIProvider } from '@nextui-org/react'
import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const GProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <NextUIProvider>
                <Toaster />
                {children}
            </NextUIProvider>
        </Provider>
    )
}

export default GProvider