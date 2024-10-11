// import TextEditor from "@/components/EditorMaker/TextEditor"
import UsersAllPost from '@/components/page/dashboard/user/UsersAllPosts'
import dynamic from 'next/dynamic'
// import Editor from "@/components/EditorMaker/Editor"




const CreatePost = () => {
    const CreatePost = dynamic(() => import('@/components/modals/CreatePostModal'), {
        ssr: false
    })
    return (
        <div>
            <div className='flex justify-between items-center bg-secondary text-white px-2 rounded-md'>
                <h1 className="text-lg md:text-2xl font-semibold mb-2 text-center md:text-left mt-3">Post</h1>
                <CreatePost />
            </div>
            <div className='border bg-gray-500 rounded-lg mt-3'>
                <UsersAllPost />
            </div>
        </div>
    )
}

export default CreatePost