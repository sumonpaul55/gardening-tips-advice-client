/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useGetAllPostQuery } from '@/redux/features/post/postApi';
import React from 'react'; // Import the Post component
import EachPopularPost from './EachPopularPost';
import { Tpost } from '@/types';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import Link from 'next/link';

const PopularPosts = () => {
    // Sort posts by upvotes and get the top 3
    const { data, isLoading } = useGetAllPostQuery({});
    const posts = data?.data;
    const upVotesPost = posts?.filter((post: Tpost) => post?.upVotes > post?.downVotes)

    return (
        <>
            <div>
                {
                    isLoading ? <LoadingSpinner /> :
                        <div className="my-8 p-6 lg:px-0 rounded-lg bg-white py-20">
                            <h2 className="text-3xl font-bold text-center mb-6">Popular Posts</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {upVotesPost?.map((post: Tpost) => (
                                    <Link key={post._id} href={`post/${post?._id}`}>
                                        <EachPopularPost post={post} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                }
            </div>
        </>
    );
};

export default PopularPosts;
