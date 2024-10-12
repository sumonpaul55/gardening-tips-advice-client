"use client"
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { useGetAllPostQuery } from '@/redux/features/post/postApi'
import { Tpost } from '@/types'
import React from 'react'
import PostDetails from '../posts/PostDetails'

const NewsFeed = () => {
    const { data, isLoading } = useGetAllPostQuery({})

    return (
        <div className='max-w-[900px] mx-auto'>
            {
                isLoading ? <LoadingSpinner />
                    :
                    data?.data?.map((item: Tpost, idx: number) => (
                        <div key={idx} className='mt-5'>
                            <PostDetails id={item?._id} />
                        </div>
                    ))
            }
        </div>
    )
}

export default NewsFeed