import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import GTeaxtArea from '@/components/forms/GTextArea';
import GFrom from '@/components/forms/GFrom';
import { FieldValues, SubmitHandler } from 'react-hook-form';

const PostActivitiy = () => {
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);

    const handleUpvote = () => setUpvotes(upvotes + 1);
    const handleDownvote = () => setDownvotes(downvotes + 1);

    const handleComment: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (
        <div className="flex flex-col space-x-4 mt-10">
            <div className='flex items-center justify-stretch gap-10 mb-10'>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center text-green-500 hover:text-green-600"
                    onClick={handleUpvote}
                >
                    <FaThumbsUp className="mr-2" size={50} />
                    <span>{upvotes}</span>
                </motion.button>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center text-red-500 hover:text-red-600"
                    onClick={handleDownvote}>
                    <FaThumbsDown className="mr-2" size={50} />
                    <span>{downvotes}</span>
                </motion.button>
            </div>
            <div className="flex flex-col gap-5">
                {/* Input for typing a comment */}
                <GFrom onSubmit={handleComment}>
                    <GTeaxtArea
                        type="text"
                        className="flex-grow border rounded-l-md p-2 w-full text-gray-700 focus:outline-none"
                        placeholder="Write a comment..."
                        label='Comment'
                        name='comment'
                    />

                    {/* Button to submit the comment */}
                    <motion.button
                        type='submit'
                        whileTap={{ scale: 0.95 }} // Adds a tap animation
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full mt-5"
                    // onClick={handleAddComment} // Adds the comment to the list
                    >
                        Comment
                    </motion.button>
                </GFrom>
            </div>
        </div>
    )
}

export default PostActivitiy