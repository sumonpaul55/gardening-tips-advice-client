"use client"
import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api'
import { redirect } from 'next/navigation'
import React, { } from 'react'
import moment from "moment"
import EditUser from '@/components/modals/EditProfileModal'
import ProfileImage from './ProfileImage'
import { Button } from '@nextui-org/react'
import UsersPosts from './UsersPosts'
import Link from 'next/link'
import { useLocalUser } from '@/context/user.Provider'
const ProfilePage = () => {
    const { user } = useLocalUser()
    const { data, isLoading } = useGetUserByEmailQuery(`${user?.email}`)
    const userData = data?.data;
    // const { email, profilePhoto, name, verified, role, phoneNumber, createdAt, follower, following } = userData;

    if (!isLoading && !user) {
        return redirect("/")
    } else if (!user?.email) {
        return null
    }
    return (
        <>
            <div className='mt-4 flex flex-col md:flex-row gap-8 min-h-screen font-roboto_slab bg-slate-100'>
                <div className='md:w-[30%] bg-slate-100 px-2 lg:px-5 pt-4 rounded-md relative'>
                    <div className='flex flex-col'>
                        <div className=''>
                            <ProfileImage className='md:size-[250px] size-[150px] object-bottom rounded-full border-2 p-2 shadow-lg' />
                            <EditUser />
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
                                <div className='flex items-center flex-wrap justify-between'>
                                    <span className='text-sm md:text-lg font-semibold'>Varified: {userData?.verified === true ? "Verified" : "Not verified"}</span>
                                    {
                                        userData?.verified !== true && <Button className='h-fit w-fit py-1 rounded-sm font-semibold bg-secondary text-white disabled:bg-gray-400' isDisabled={true}>Verify</Button>
                                    }
                                    <span className='text-sm md:text-lg font-semibold mt-3'>Address: {(userData?.address)}</span>
                                </div>

                            </div>
                        </div>
                        <div>
                            <h4 className='md:text-lg'>Socila links</h4>
                            <div className='grid grid-cols-2 gap-5 md:grid-cols-3 mt-5'>
                                {
                                    userData?.links?.map((item: { url: string; socialName: string }, idx: number) => {
                                        return <Link key={idx} href={item?.url} target='_blank' className='p-3 bg-secondary text-white rounded-lg'>{item?.socialName}</Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-slate-100 rounded-md md:border-l p-2 md:p-5'>
                    <UsersPosts />
                </div>
            </div>
        </>
    )
}

export default ProfilePage