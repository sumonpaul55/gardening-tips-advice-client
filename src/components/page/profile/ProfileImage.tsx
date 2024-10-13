"use client"
import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api';
import { useAppSelector } from '@/redux/hooks'
import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react'
import { MdVerified } from "react-icons/md";

const ProfileImage = ({ className }: { className?: string }) => {
    const user = useAppSelector(state => state.auth.user);
    const { data, isLoading } = useGetUserByEmailQuery(`${user?.email}`)
    if (isLoading) {
        return <h4>Loading...</h4>
    }
    return (
        <div className='relative w-fit'>
            <Image src={data?.data?.profilePhoto} alt={data?.data?.name} width={400} height={500} className={`${className && className}`} />
            {
                data?.data?.verfied === true ?
                    <Tooltip content="Verified">
                        <span className='absolute right-1 top-2/3 size-9 shadow flex items-center justify-center rounded-full bg-gray-200'>
                            <MdVerified className='text-primary' size={35} />
                        </span>
                    </Tooltip>
                    :
                    null
            }
        </div>

    )
}

export default ProfileImage