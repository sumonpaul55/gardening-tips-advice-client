"use client"
import { useGetPostByUserIdQuery } from '@/redux/features/post/postApi'
import React from 'react'

const UsersPosts = ({ userId }: { userId: string }) => {
    // const { data } = useGetVotesSummeryQuery(undefined)
    // console.log(data?.data)
    const { data, isLoading, } = useGetPostByUserIdQuery(userId)
    console.log(data)

    return (
        <div>UsersPosts</div>
    )
}

export default UsersPosts