/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
}

interface PostSection4Props {
    post: Post;
}

const PostSection4: React.FC<PostSection4Props> = ({ post }) => {
    const firstImage = extractFirstImage(post?.post);

    return (
        <Link href={`/post/${post?._id}`}>
            <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                {firstImage && (
                    <img
                        src={firstImage}
                        alt="Post Image"
                        className="w-full h-64 object-cover mb-4 rounded-t-lg"
                    />
                )}
                <h2 className="text-2xl font-bold mb-4">{post?.title}</h2>
                {/* <div
                    className="post-content text-gray-700"
                    dangerouslySetInnerHTML={{ __html: post.post }}
                /> */}
            </div>
        </Link>
    );
};

export default PostSection4;
