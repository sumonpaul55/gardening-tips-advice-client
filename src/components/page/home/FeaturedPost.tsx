/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Container from '@/components/shared/Container/Container'
import { useGetAllPostQuery } from '@/redux/features/post/postApi'
import { Tpost } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedPost = () => {
    const { data } = useGetAllPostQuery({ limit: 4 })



    // Truncate the post content for a brief snippet

    return (
        <Container className='py-16' sectionClass="featured-section py-10">
            {/* <h3 className='mb-8 font-semibold text-xl md:text-2xl lg:text-3xl text-white'>Featured last post</h3> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10'>
                {
                    data?.data?.map((item: Tpost, idx: number) => (
                        <div className="backdrop-blur bg-white bg-opacity-80 py-10 px-6 shadow-lg hover:shadow-sm duration-200 rounded-lg border-gray-200 border font-roboto_slab flex flex-col justify-between" key={idx}>
                            <div className="flex space-x-4">
                                {/* Profile photo and author details */}
                                <Image
                                    width={400}
                                    height={500}
                                    src={item?.userId.profilePhoto}
                                    alt={item?.userId.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold">{item?.userId.name}</h4>
                                    {item?.userId.verified && (
                                        <span className="text-sm text-green-600">Verified</span>
                                    )}
                                    <p className="text-sm text-gray-600">{new Date(item?.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>

                            {/* Post title */}
                            <h2 className="mt-4 text-lg line-clamp-2 md:text-xl font-bold text-gray-800">{item?.title}</h2>

                            {/* Category */}
                            <p className="text-sm text-gray-500 mt-1">Category: {item?.category.category}</p>

                            {/* Post content snippet */}
                            {/* <div className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: item?.post }}></div> */}

                            {/* Link to full post */}
                            <Link
                                href={`/post/${item?._id}`}
                                className="mt-6 inline-block text-blue-600 font-semibold hover:underline"
                            >
                                Read full Post
                            </Link>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default FeaturedPost