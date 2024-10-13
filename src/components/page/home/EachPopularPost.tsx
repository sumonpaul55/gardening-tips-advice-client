'use client'
import { Tpost } from '@/types';
import { getFirstImage } from '@/utils/getFirstImage';
import Image from 'next/image';
import React from 'react';

const EachPopularPost = ({ post }: { post: Tpost }) => {
    const image = getFirstImage(post?.post) as string
    const { title, post: content, userId, createdAt, activity, upVotes, downVotes } = post;

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 line-clamp-1">{title}</h2>
            <Image width={400} height={400} src={`${image}`} alt={userId.name} className="w-full" />
            {/* <div className="mb-4" dangerouslySetInnerHTML={{ __html: content }} /> */}
            <div className="flex items-center mb-4">
                <Image width={400} height={400} src={`${userId.profilePhoto}`} alt={userId.name} className="w-10 h-10 rounded-full mr-2" />
                <div>
                    <h4 className="font-semibold">{userId.name}</h4>
                    <p className="text-gray-600 text-sm">{userId.role}</p>
                </div>
            </div>
            <p className="text-gray-500 text-sm">Posted on: {new Date(createdAt).toLocaleDateString()}</p>

            <div className="mt-4">
                <h4 className="font-semibold">Votes</h4>
                <p>Upvotes: {upVotes.length}</p>
                <p>Downvotes: {downVotes.length}</p>
            </div>
        </div>
    );
};

export default EachPopularPost;
