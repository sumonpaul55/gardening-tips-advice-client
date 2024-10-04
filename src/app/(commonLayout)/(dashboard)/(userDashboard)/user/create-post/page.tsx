// import TextEditor from "@/components/EditorMaker/TextEditor"
import dynamic from 'next/dynamic'
// import Editor from "@/components/EditorMaker/Editor"




const CreatePost = () => {
    const Editor = dynamic(() => import('@/components/EditorMaker/Editor'), {
        ssr: false
    })
    return (
        <div>
            <h1 className="text-lg md:text-2xl font-semibold mb-2">Create Post</h1>
            <Editor />
        </div>
    )
}

export default CreatePost