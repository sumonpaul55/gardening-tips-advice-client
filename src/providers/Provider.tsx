import ScrollToTop from '@/components/shared/ScrollToTop'
import { NextUIProvider } from '@nextui-org/react'
import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <NextUIProvider>
            <Toaster />
            <ScrollToTop />
            {children}
        </NextUIProvider>
    )
}

export default Provider