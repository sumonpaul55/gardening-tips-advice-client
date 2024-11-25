/* eslint-disable @next/next/no-img-element */
"use client"
import { useLocalUser } from '@/context/user.Provider'
import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api';
// import { TUser } from '@/redux/features/auth/authSlice';
import React, { } from 'react'
import { useGetPostByUserIdQuery } from '@/redux/features/post/postApi';

const NewsFeedLeft = () => {
    const { user, isLoading } = useLocalUser();
    const { data, } = useGetUserByEmailQuery(`${user?.email}`)
    const { data: posts } = useGetPostByUserIdQuery(`${user?._id}`)
    const loggedInuser = data?.data;
    return (
        <div className='shadow-lg px-3 md:px-5 py-3 rounded-lg bg-gray-100 h-screen min-w-[250px]'>
            <div className='flex flex-col gap-4'>
                <div className=''>
                    {
                        !isLoading &&
                        <div className=''>
                            <img src={`${data?.data?.profilePhoto}`} alt={`${loggedInuser?.name}`} width={300} height={300} className='size-12 rounded-full' />
                            <h4 className='font-semibold mt-3 md:text-lg'>{loggedInuser?.name}</h4>
                            <address>{loggedInuser?.address ? loggedInuser?.address : "Addres"}</address>
                            <div className='mt-8 space-y-3'>
                                <div className="space-y-2">
                                    <div className='flex items-center justify-between border p-2 shadow-inset'>
                                        <h3>Follower</h3>
                                        <p>{loggedInuser?.follower.length}</p>
                                    </div>
                                    <div className='flex items-center justify-between border p-2 shadow-inset'>
                                        <h3>Following</h3>
                                        <p>{loggedInuser?.following.length}</p>
                                    </div>
                                    <div className='flex items-center justify-between border p-2 shadow-inset'>
                                        <h3>Posts</h3>
                                        <p>{posts?.data?.length}</p>
                                    </div>

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