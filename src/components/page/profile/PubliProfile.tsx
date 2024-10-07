"use client"
import Container from '@/components/shared/Container/Container'
import { useLocalUser } from '@/context/user.Provider'
import { useGetUserByidQuery } from '@/redux/features/auth/auth.api'
import { Button } from '@nextui-org/react'
import moment from 'moment'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const PubliProfile = ({ userId }: { userId: string }) => {
    const { data } = useGetUserByidQuery(userId)
    const { user: localUser } = useLocalUser()
    const userData = data?.data;


    const isFollower = userData?.follower?.some((item: string) => item === localUser?._id)


    console.log(userData)
    if (!userData) {
        redirect("/")
    }
    return (
        <Container>
            <div className='flex flex-col md:flex-row p-5'>
                <div className=''>
                    <Image width={400} height={400} alt={userData?.name} src={userData?.profilePhoto} />
                </div>
                {/* more info */}
                <div className='flex flex-col gap-5 bg-gray-200 flex-1 p-3 md:p-6'>
                    <div className='flex-1'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-sm md:text-lg font-semibold'>Name: {userData?.name}</span>
                            <span className='text-sm md:text-lg font-semibold'>Email: {userData?.email}</span>
                            <span className='text-sm md:text-lg font-semibold'>Role: {userData?.role}</span>
                            <span className='text-sm md:text-lg font-semibold'>Phone: {userData?.phoneNumber}</span>
                            <span className='text-sm md:text-lg font-semibold'>Follower: {userData?.follower?.length}</span>
                            <span className='text-sm md:text-lg font-semibold'>Following: {userData?.following?.length}</span>
                            <span className='text-sm md:text-lg font-semibold'>Joined: {moment(userData?.createdAt).format("MMM Do YY")}</span>
                            <span className='text-sm md:text-lg font-semibold'>Varified: {userData?.verified === true ? "Verified" : "Not verified"}</span>
                        </div>
                    </div>
                    <div>
                        {
                            isFollower ? <Button className='bg-secondary text-white md:px-10'>Unfollow</Button> :
                                <Button className='bg-secondary text-white md:px-10'>Follow</Button>
                        }

                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PubliProfile