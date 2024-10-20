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
                        <Link href={`/post/${posts._id}`}>
                            <div className="my-8 p-6 rounded-lg bg-white py-20">
                                <h2 className="text-3xl font-bold text-center mb-6">Popular Posts</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
                                    {upVotesPost?.map((post: Tpost) => (
                                        <EachPopularPost key={post._id} post={post} />
                                    ))}
                                </div>
                            </div>
                        </Link>
                }
            </div>
        </>
    );
};

export default PopularPosts;
