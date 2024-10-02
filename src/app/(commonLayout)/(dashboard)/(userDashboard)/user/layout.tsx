import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex gap-5'>
            <div>
                sidebar
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout