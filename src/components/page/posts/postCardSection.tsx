/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, Divider, Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Function to extract the first image from the post content
const extractFirstImage = (html: string) => {
    const imgTagMatch = html.match(/<img[^>]+src="([^">]+)"/);
    return imgTagMatch ? imgTagMatch[1] : null;
};

// Type for the post prop
interface Post {
    _id: string;
    title: string;
    post: string;
    userId: any;
    category: {
        category: string
    };
}

interface PostSection4Props {
    post: Post;
}

const PostCardsSection: React.FC<PostSection4Props> = ({ post }) => {
    const firstImage = extractFirstImage(post?.post);
    const postOwner = post?.userId;



    // const isFolloew = postOwner?.follower?.find()

    return (
        <div className="border rounded-lg p-3 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full pb-6">
            {firstImage && (
                <Link href={`/post/${post?._id}`} className=''>
                    <Image
                        width={400}
                        height={600}
                        src={firstImage}
                        alt="Post Image"
                        className="w-full h-64 object-cover mb-2 rounded-t-lg"
                    />
                </Link>

            )}
            <div className='flex justify-between gap-3 bg-gray-200 p-2 rounded-lg rounded-t-none'>
                <div className='mb-3 flex justify-between flex-col gap-2'>
                    <h5><b>Author</b>: <strong>{postOwner?.name}</strong></h5>
                    <h5><b>Category</b>: <strong>{post?.category?.category}</strong></h5>
                </div>

                <Tooltip content="View Profile">
                    <Link href={`profile/${postOwner?._id}`}>
                        <Image width={200} height={200} src={`${postOwner?.profilePhoto}`} alt={postOwner?.name} className='size-14 rounded-full' />
                    </Link>
                </Tooltip>
            </div>
            <Divider className="mt-4 mb-2" />
            <Link href={`/post/${post?._id}`} className='flex justify-between items-center'>
                <h2 className="text-base md:text-lg font-bold flex-1">{post?.title}</h2>
                <Button>Read more</Button>
            </Link>


            {/* <div
            className="post-content text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.post }}
        /> */}
        </div>

    );
};

export default PostCardsSection;
