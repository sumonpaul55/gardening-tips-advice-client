"use client"
import NoDataFound from '@/components/shared/NotDataFound';
import { useGetAllPostQuery } from '@/redux/features/post/postApi'
import React from 'react'
import PostCardsSection from '../posts/postCardSection';
import { Tpost } from '@/types';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import Container from '@/components/shared/Container/Container';

const PostsSectionHome = () => {
    const { data, isLoading } = useGetAllPostQuery({ limit: 6 });
    const post = data?.data;
    return (
        <div className='py-16 bg-gray-100'>
            <Container>
                <h3 className="mb-8 font-semibold text-xl md:text-2xl lg:text-3xl">Recent Published Posts</h3>
                {
                    isLoading ? <LoadingSpinner /> :
                        post?.length ? <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8'>
                            {
                                post?.map((item: Tpost, idx: number) => (
                                    <PostCardsSection post={item} key={idx} />
                                ))
                            }
                        </div> :
                            <NoDataFound />
                }
            </Container>
        </div>
    )
}

export default PostsSectionHome