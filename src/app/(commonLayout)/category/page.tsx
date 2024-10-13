'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import PostCardsSection from '@/components/page/posts/postCardSection';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { useGetAllPostQuery } from '@/redux/features/post/postApi'
import { Tpost } from '@/types';
import React from 'react'

const CategoryPost = ({ params }: any) => {
    const { data, isLoading } = useGetAllPostQuery({ category: params?.categoryName })
    const post = data?.data;
    return (
        <main className='bg-white py-10'>
            {
                isLoading ? <LoadingSpinner /> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            post?.map((item: Tpost, idx: number) => (
                                <PostCardsSection post={item} key={idx} />
                            ))
                        }
                    </div>
            }
        </main>
    )
}

export default CategoryPost