import { ReactNode } from "react"

const Container = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <section>
            <div className={`${className} container mx-auto px-3 md:px-0`}>
                {children}
            </div>
        </section>
    )
}

export default Container