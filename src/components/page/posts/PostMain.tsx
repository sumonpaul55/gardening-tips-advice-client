import React from 'react'
import PostHero from './PostHerosection';
import Container from '@/components/shared/Container/Container';

const PostMain = () => {
    return (
        <div>
            <PostHero />
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
                    {
                        // data?.data?.map((post: { _id: string; title: string; post: any; userId: any; category: { category: string } }, idx: number) => <PostCardsSection post={post} key={idx} />)
                    }
                </div>
            </Container>
        </div>
    )
}

export default PostMain