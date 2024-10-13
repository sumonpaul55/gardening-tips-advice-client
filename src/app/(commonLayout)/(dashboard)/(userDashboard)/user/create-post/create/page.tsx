
// import TextEditor from "@/components/EditorMaker/TextEditor"

import dynamic from 'next/dynamic'
// import Editor from "@/components/EditorMaker/Editor"




const PostCreatPage = () => {
    const CreatePost = dynamic(() => import('@/components/page/posts/CreateAPost'), {
        ssr: false
    })
    return (
        <CreatePost />
    )
}

export default PostCreatPage