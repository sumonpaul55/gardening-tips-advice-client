/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';

const PostSection4 = ({ post }: any) => {

    // Load first 4 posts
    // useEffect(() => {
    //     if (posts && posts.length > 0) {
    //         setDisplayedPosts(posts.slice(0, 4)); // show first 4 posts
    //     }
    // }, [posts]);

    return (

        <div className="border rounded-lg p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
            <div
                className="post-content text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.post }}
            />
            {post?.post}
        </div>
    );
};

export default PostSection4;
