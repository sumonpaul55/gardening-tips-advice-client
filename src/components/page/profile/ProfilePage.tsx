/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client"
import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api'
import React, { } from 'react'
import moment from "moment"
import EditUser from '@/components/modals/EditProfileModal'
import ProfileImage from './ProfileImage'
import { Button, Divider, Tooltip } from '@nextui-org/react'
import UsersPosts from './UsersPosts'
import Link from 'next/link'
import { useLocalUser } from '@/context/user.Provider'
import { FaCheck, } from 'react-icons/fa'
import { ImNotification } from "react-icons/im";
import { useGetPostByUserIdQuery } from '@/redux/features/post/postApi'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { Tpost } from '@/types'

const ProfilePage = () => {
    const { user, isLoading } = useLocalUser()
    const { data: postData } = useGetPostByUserIdQuery(`${user?._id}`)
    const { data } = useGetUserByEmailQuery(`${user?.email}`)
    const userData = data?.data;
    const post = postData?.data;

    const isUpVotesTrue = post?.some((item: Tpost) => item.upVotes > item?.downVotes)


    return (
        <>
            {
                isLoading ? <LoadingSpinner /> :
                    <div className='mt-4 flex flex-col md:flex-row gap-8 min-h-screen font-roboto_slab bg-slate-100 pb-10'>
                        <div className='md:w-[30%] bg-slate-100 px-2 lg:px-5 pt-4 rounded-md relative'>
                            <div className='flex flex-col'>
                                <div className=''>
                                    <ProfileImage className='md:size-[250px] size-[150px] object-bottom rounded-full border-2 p-2 shadow-lg' />
                                    <EditUser />
                                </div>
                                {/* more info */}
                                <div className='p-3 md:p-6'>
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-sm md:text-lg font-medium'>Name: {userData?.name}</span>
                                        <span className='text-sm md:text-lg font-medium'>Email: {userData?.email}</span>
                                        <span className='text-sm md:text-lg font-medium'>Role: {userData?.role}</span>
                                        <span className='text-sm md:text-lg font-medium'>Phone: {userData?.phoneNumber}</span>
                                        <span className='text-sm md:text-lg font-medium'>Follower: {userData?.follower?.length}</span>
                                        <span className='text-sm md:text-lg font-medium'>Following: {userData?.following?.length}</span>
                                        <span className='text-sm md:text-lg font-semibold'>Joined: {moment(userData?.createdAt).format("MMM Do YY")}</span>
                                        <div className='flex items-center flex-wrap justify-between'>
                                            <span className='text-sm md:text-lg font-semibold flex gap-3'>Varified: {userData?.verified === true ? <div className='flex items-center gap-1'>
                                                <span className='border p-[5px] rounded-full bg-secondary text-white block'><FaCheck size={13} /></span>
                                                <h3>Varified</h3>
                                            </div> : "Not verified"}</span>
                                            {
                                                userData?.verified !== true &&
                                                <div className='flex gap-3 items-center'>
                                                    <Button className='h-fit w-fit py-1 rounded-sm font-semibold bg-secondary text-white disabled:bg-gray-400' isDisabled={!isUpVotesTrue}>Verify</Button>
                                                    <Tooltip content="Required minimum 1 Up Votes in your post">
                                                        {!isUpVotesTrue &&
                                                            <span>
                                                                <ImNotification size={20} />
                                                            </span>
                                                        }
                                                    </Tooltip>
                                                </div>
                                            }
                                            <span className='text-sm md:text-lg font-medium mt-3'>Address: {(userData?.address)}</span>
                                        </div>

                                    </div>
                                </div>
                                <Divider className='mb-3' />
                                <div>
                                    <h4 className='md:text-lg font-semibold'>Socila links</h4>
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
                            <UsersPosts postData={post} isLoading={isLoading} />
                        </div>
                    </div>
            }

        </>
    )
}

export default ProfilePage