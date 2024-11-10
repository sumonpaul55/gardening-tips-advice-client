'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useGetCategoryQuery } from '@/redux/features/category/category.api';
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import Link from 'next/link';

// Sample data

const FeaturedCategory = () => {
    const { data, isLoading } = useGetCategoryQuery({})
    const categories = data?.data;
    if (isLoading) {
        <LoadingSpinner />
    }
    return (
        <>{
            isLoading ? <LoadingSpinner /> :
                <div className="my-14 mx-auto max-w-screen-xl py-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-8 font-roboto_slab">Explore Our <span className='text-basePrimary'>Categories</span></h2>

                    </div>

                    <Link href={`/category`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categories?.map((category: { _id: string; image: string; category: string }) => (
                                <motion.div
                                    key={category?._id}
                                    className="relative overflow-hidden rounded-lg shadow-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {
                                        category?.image ? <Image
                                            src={`${category?.image}`}
                                            width={400}
                                            height={400}
                                            alt={category?.category}
                                            className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                        /> :
                                            <Image
                                                src={`https://i.ibb.co.com/sgY14tf/plants.jpg`}
                                                width={400}
                                                height={400}
                                                alt={category?.category}
                                                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                    }
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <h3 className="text-white text-xl font-semibold">{category?.category}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Link>
                </div>
        }

        </>

    );
};

export default FeaturedCategory;
