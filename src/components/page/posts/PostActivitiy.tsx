import React, { useState } from 'react'
import { motion } from "framer-motion";
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import GTeaxtArea from '@/components/forms/GTextArea';
import GFrom from '@/components/forms/GFrom';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { commetValidationSchema } from '@/validationSchema/validationSchema';
import { Tooltip } from '@nextui-org/react';

const PostActivitiy = () => {
    const [upvotes, setUpvotes] = useState<boolean>();
    const [downvotes, setDownvotes] = useState<boolean>();

    const handleUpvote = () => setUpvotes(true);
    const handleDownvote = () => setDownvotes(true);

    const handleComment: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (
        <div className="flex flex-col space-x-4 mt-10">
            <div className='flex items-center justify-stretch gap-10 mb-10'>
                <Tooltip content="Upvote">
                    <motion.button
                        disabled={upvotes}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center text-green-500 hover:text-green-600 disabled:text-gray-300"
                        onClick={handleUpvote}
                    >
                        <FaThumbsUp className="mr-2" size={50} />
                    </motion.button>
                </Tooltip>
                <Tooltip content="Downvote">
                    <motion.button
                        disabled={downvotes}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center text-red-500 hover:text-red-600 disabled:text-gray-300"
                        onClick={handleDownvote}>
                        <FaThumbsDown className="mr-2" size={50} />
                    </motion.button>
                </Tooltip>
            </div>
            <div className="flex flex-col gap-5">
                {/* Input for typing a comment */}
                <GFrom onSubmit={handleComment} resolver={zodResolver(commetValidationSchema)}>
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