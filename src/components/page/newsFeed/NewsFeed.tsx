/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useGetAllPostQuery, useGetTotalPostDocumentQuery } from '@/redux/features/post/postApi';
import { Tpost } from '@/types';
import React, { useState, useEffect } from 'react';
import PostDetails from '../posts/PostDetails';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '@nextui-org/react';

const NewsFeed = () => {
    const [limit, setLimit] = useState<number>(1); // Start by loading 1 post
    const { data, isLoading, isFetching } = useGetAllPostQuery({ limit });
    const { ref: inViewRef, inView } = useInView();
    const { data: totalPost } = useGetTotalPostDocumentQuery({})
    const [allPostsLoaded, setAllPostsLoaded] = useState<boolean>(false);

    // When inView changes (user scrolls to the bottom), increment the limit to load another post
    useEffect(() => {
        if (inView && !allPostsLoaded && !isFetching) {
            if (data?.data?.length === totalPost?.data) {
                setAllPostsLoaded(true); // All posts have been loaded
            } else {
                setLimit((prevLimit) => prevLimit + 1); // Increase the limit to load the next post
            }
        }
    }, [inView, isFetching, data, allPostsLoaded]);

    return (
        <div className='max-w-[900px] mx-auto'>
            {isLoading ? (
                <ContentLoading />
            ) : (
                <>
                    {data?.data?.map((item: Tpost, idx: number) => (
                        <div key={idx} className='mt-5'>
                            <PostDetails id={item?._id} />
                        </div>
                    ))}
                    {!allPostsLoaded && (
                        <div ref={inViewRef}>
                            {isFetching ? <ContentLoading /> : <h3>Loading more posts...</h3>}
                        </div>
                    )}
                    {allPostsLoaded && <h3 className="text-center mt-5 font-bold md:text-lg py-5 rounded-lg mx-4">No more posts available</h3>}

                </>
            )}
        </div>
    );
};

export default NewsFeed;


export const ContentLoading = () => {
    return <div className='flex text-center justify-center max-h-[400px] items-center mt-16'>
        <Spinner
            size="lg"
            className="text-blue-500"
            aria-label="Loading"
        />
    </div>
}