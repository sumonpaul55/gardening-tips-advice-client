"use client"
import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api'
import { useAppSelector } from '@/redux/hooks'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { } from 'react'
import moment from "moment"
const ProfilePage = () => {
    const user = useAppSelector(state => state.auth.user)
    const { data, isLoading } = useGetUserByEmailQuery(`${user?.email}`)
    const userData = data?.data;
    // const { email, profilePhoto, name, verified, role, phoneNumber, createdAt, follower, following } = userData;
    console.log(data?.data)
    console.log(user)
    if (!isLoading && !user) {
        return redirect("/")
    } else if (!user?.email) {
        return null
    }
    return (
        <>
            <div className='mt-4 flex flex-col md:flex-row gap-8 min-h-screen font-roboto_slab bg-slate-100'>
                <div className='md:w-[30%] bg-slate-200 px-2 lg:px-7 pt-4 rounded-md'>
                    <div className='flex flex-col'>
                        <div className=''>
                            <Image src={userData?.profilePhoto} alt={userData?.name} width={400} height={500} className='md:size-[250px] size-[150px] object-bottom rounded-full border-2 p-2 shadow-lg' />
                        </div>
                        {/* more info */}
                        <div className='p-3 md:p-6'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-sm md:text-lg font-semibold'>Name: {userData?.name}</span>
                                <span className='text-sm md:text-lg font-semibold'>Email: {userData?.email}</span>
                                <span className='text-sm md:text-lg font-semibold'>Role: {userData?.role}</span>
                                <span className='text-sm md:text-lg font-semibold'>Phone: {userData?.phoneNumber}</span>
                                <span className='text-sm md:text-lg font-semibold'>Follower: {userData?.follower?.length}</span>
                                <span className='text-sm md:text-lg font-semibold'>Following: {userData?.following?.length}</span>
                                <span className='text-sm md:text-lg font-semibold'>Joined: {moment(userData?.createdAt).format("MMM Do YY")}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-slate-200 rounded-md'></div>
            </div>
        </>
    )
}

export default ProfilePage