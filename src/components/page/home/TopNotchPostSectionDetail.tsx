"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tpost } from '@/types';
import Image from 'next/image';
import React from 'react';

const TopNotchPostSectionDetail = ({ post }: { post: Tpost }) => {

    return (
        <div className="border p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold mb-2">{post?.title}</h2>
            <div className="mb-4 line-clamp-6" dangerouslySetInnerHTML={{ __html: post?.post }} />
            <div className="flex items-center mb-4">
                <Image width={300} height={300} src={post?.userId?.profilePhoto} alt={post?.userId?.name} className="w-10 h-10 rounded-full mr-2" />
                <div>
                    <h4 className="font-semibold">{post?.userId?.name}</h4>
                    <p className="text-gray-600 text-sm">{post?.userId?.role}</p>
                </div>
            </div>
            {/* <p className="text-gray-500 text-sm">Posted on: {new Date(createdAt).toLocaleDateString()}</p> */}
            <div className="mt-4">
                <h4 className="font-semibold border-b">Activity</h4>
                {post?.activity?.map((item: any, index: number) => {
                    if (item?.comment < 1) {
                        return
                    }
                    return <div key={index} className="border-b py-2">
                        {/* <p className="font-medium">{item?.name}</p> */}
                        {item?.comment?.slice(0, 4).map((comment: string, idx: number) => (
                            <p key={idx} className="text-gray-700">{comment}</p>
                        ))}
                    </div>
                })}
            </div>
            <div className="mt-4">
                <h4 className="font-semibold">Votes</h4>
                <p>Upvotes: {post?.upVotes.length}</p>
                <p>Downvotes: {post?.downVotes.length}</p>
            </div>
        </div>
    );
};

export default TopNotchPostSectionDetail;
