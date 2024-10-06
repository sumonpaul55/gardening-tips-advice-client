"use client"
import { useGetVotesSummeryQuery } from '@/redux/features/post/postApi'
import React from 'react'

const UsersPosts = () => {
    const { data } = useGetVotesSummeryQuery(undefined)
    console.log(data?.data)
    return (
        <div>UsersPosts</div>
    )
}

export default UsersPosts