
import SideBar from '@/components/dashboradLayout/SideBar'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {

    return (
        <div className={`sm:flex bg-slate-300 w-full top-0 left-0`}>
            <SideBar />
            <div className='flex-1 sm:p-3 md:p-5 overflow-y-auto'>
                {children}
            </div>
        </div>

    )
}

export default layout