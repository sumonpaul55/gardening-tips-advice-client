/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Tpost } from '@/types';
import { getFirstImage } from '@/utils/getFirstImage';
import Image from 'next/image';
import React from 'react';

const EachPopularPost = ({ post }: { post: Tpost }) => {
    const image = getFirstImage(post?.post) as string
    const { title, post: content, userId, createdAt, activity, upVotes, downVotes } = post;

    return (
        <div className="border p-2 rounded-lg shadow-md h-full">
            <Image width={400} height={400} src={`${image}`} alt={userId.name} className="w-full" />

            <h2 className="md:text-lg mt-3 font-bold mb-2 line-clamp-1">{title}</h2>
            <div className="mt-4">
                <h4 className="font-semibold">Votes</h4>
                <p>Upvotes: {upVotes.length}</p>
                <p>Downvotes: {downVotes.length}</p>
            </div>
            {/* <div className="mb-4" dangerouslySetInnerHTML={{ __html: content }} /> */}
            <div className="flex items-center mt-3 border p-1 rounded border-gray-100">
                <Image width={400} height={400} src={`${userId.profilePhoto}`} alt={userId.name} className="w-10 h-10 rounded-full mr-2" />
                <div className=''>
                    <h4 className="">{userId.name}</h4>
                    <div className='flex gap-3 flex-col md:flex-row'>
                        <p className="text-gray-600 text-sm">{userId.role}</p>
                        <p className="text-gray-500 text-sm">Posted on: {new Date(createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachPopularPost;
