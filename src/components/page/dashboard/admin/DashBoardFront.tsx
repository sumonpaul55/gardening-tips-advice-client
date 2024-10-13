"use client"
import { useLocalUser } from '@/context/user.Provider'
import { useGetAllUserQuery, useGetUserByEmailQuery } from '@/redux/features/auth/auth.api'
import { useGetTotalPostDocumentQuery } from '@/redux/features/post/postApi'
import React from 'react'

const DashBoardFront = () => {
    const { data: users } = useGetAllUserQuery({})
    const { data: totalPost } = useGetTotalPostDocumentQuery({})
    const { user } = useLocalUser();
    const { data } = useGetUserByEmailQuery(`${user?.email}`)
    const remoteUser = data?.data;

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12 px-3 md:px-6'>
                {<h2 className='md:text-lg font-semibold text-center'>Total User - {users?.data?.length}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Total Post - {totalPost?.data}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Total Follower - {remoteUser?.follower?.length}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Total Folloing - {remoteUser?.following?.length}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Votes Items - {remoteUser?.upVotesItem?.length}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Verified - {remoteUser?.verfied ? "Verified" : "No"}</h2>}
            </div>
        </div>
    )
}

export default DashBoardFront