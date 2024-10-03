"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const SideBar = () => {
    const [sideBarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <button className='fixed z-50 md:hidden px-2 m-2 bg-white' onClick={() => setSidebarOpen(!sideBarOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
            </button>
            <div className={`min-h-screen flex gap-3 pt-10 duration-200 w-[300px] flex-col sm:gap-4 fixed h-full md:static bg-slate-600 text-white p-2 ${sideBarOpen ? "-left-[300px] " : "z-40"}`}>
                <Link onClick={() => setSidebarOpen(!sideBarOpen)} className='sm:text-lg font-medium bg-slate-500 bg-opacity-50 p-2 rounded' href="/user/profile">Profile</Link>
                <Link onClick={() => setSidebarOpen(!sideBarOpen)} className='sm:text-lg font-medium bg-slate-500 bg-opacity-50 p-2 rounded' href="/user/create-post">Create Post</Link>
            </div>
        </>
    )
}

export default SideBar