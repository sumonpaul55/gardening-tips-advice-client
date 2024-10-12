/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import PostHero from './PostHerosection';
import Container from '@/components/shared/Container/Container';
import { useGetAllPostQuery } from '@/redux/features/post/postApi';
import PostCardsSection from './postCardSection';
import { useDebounce } from '@/hooks/useDebouce';

const PostMain = () => {
    const [srcValue, setSearchTerm] = useState<string>("")
    const [category, setCategory] = useState<string>("")
    const [premium, setPremium] = useState<boolean>(false)
    const searchTerm = useDebounce(srcValue, 1000)

    const { data } = useGetAllPostQuery({ searchTerm, category, premium })

    console.log(category)
    return (
        <div className=''>
            <PostHero setCategory={setCategory} setSearchTerm={setSearchTerm} setPremium={setPremium} srcValue={srcValue} category={category} />
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
                    {
                        data?.data?.map((post: { _id: string; title: string; post: any; userId: any; category: { category: string } }, idx: number) => <PostCardsSection post={post} key={idx} />)
                    }
                </div>
            </Container>
        </div>
    )
}

export default PostMain