"use client"
import { useGetAllPostQuery } from '@/redux/features/post/postApi';
import React from 'react';
import TopNotchPostSectionDetail from './TopNotchPostSectionDetail';
import Container from '@/components/shared/Container/Container';
import { Tpost } from '@/types';

const TopNotchPostSection = () => {
    // Dummy post data
    const { data } = useGetAllPostQuery({ limit: 2 })


    return (
        <section className="py-16">
            <Container>
                <div className="max-w-screen-xl mx-auto text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Today&apos;s Top Notch
                    </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                    {
                        data?.data?.map((item: Tpost, idx: number) => (
                            <TopNotchPostSectionDetail post={item} key={idx} />
                        ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default TopNotchPostSection;
