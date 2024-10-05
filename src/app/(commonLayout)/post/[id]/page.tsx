import React from 'react'

const PostDetails = ({ params }: { params: { id: string } }) => {

    return (
        <main>
            <div className="Container">
                {params.id}
            </div>
        </main>
    )
}

export default PostDetails