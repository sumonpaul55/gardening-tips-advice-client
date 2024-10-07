import PostDetails from '@/components/page/posts/PostDetails'
import React from 'react'

const PostDPages = ({ params }: { params: { id: string } }) => {
    return (
        <main className='bg-white py-10 md:min-h-screen'>
            <div className="Container">
                <PostDetails id={params?.id} />
            </div>
        </main>
    )
}

export default PostDPages