"use client"
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { useGetPostByUserIdQuery } from '@/redux/features/post/postApi'
import React from 'react'

const UsersPosts = ({ userId }: { userId: string }) => {
    // const { data } = useGetVotesSummeryQuery(undefined)
    // console.log(data?.data)
    const { data, isLoading, } = useGetPostByUserIdQuery(userId)
    const post = data?.data;
    console.log(post)

    return (
        <div>
            {
                isLoading ? <LoadingSpinner /> :
                    <div>

                    </div>
            }
        </div>
    )
}

export default UsersPosts