/* eslint-disable @next/next/no-img-element */
"use client"
import { useLocalUser } from '@/context/user.Provider'
import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api';
import { TUser } from '@/redux/features/auth/authSlice';
import React, { } from 'react'

const NewsFeedLeft = () => {
    const { user, isLoading } = useLocalUser();
    const { data, } = useGetUserByEmailQuery(`${user?.email}`)
    const loggedInuser = data?.data
    console.log(loggedInuser)
    return (
        <div className='shadow-lg p-2 rounded-lg bg-gray-100'>
            <div className='flex flex-col gap-4'>
                <div className=''>
                    {
                        !isLoading &&
                        <div className=''>
                            <img src={`${data?.data?.profilePhoto}`} alt={`${loggedInuser?.name}`} width={300} height={300} className='size-12 rounded-full' />
                            <h4 className='font-semibold mt-3 md:text-lg'>{loggedInuser?.name}</h4>
                            <address>{loggedInuser?.address ? loggedInuser?.address : "Addres"}</address>
                            <div className='mt-8 space-y-3'>
                                <div>
                                    <div className='flex items-center justify-between'>
                                        <h3>Follower</h3>
                                        <p>{loggedInuser?.follower.length}</p>
                                    </div>
                                    <div>
                                        {
                                            loggedInuser?.follower?.map((item: TUser, idx: number) => (
                                                <div key={idx}>
                                                    {/* <img src={ } alt="" /> */}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='flex items-center justify-between'>
                                        <h3>Following</h3>
                                        <p>{loggedInuser?.following.length}</p>
                                    </div>
                                </div>
                                <div>
                                    {
                                        loggedInuser?.following?.map((item: TUser, idx: number) => (
                                            <div key={idx}>
                                                {/* <img src={ } alt="" /> */}
                                                dsdds
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default NewsFeedLeft