import { NextUIProvider } from '@nextui-org/react'
import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <NextUIProvider>
            <Toaster />
            {children}
        </NextUIProvider>
    )
}

export default Provider