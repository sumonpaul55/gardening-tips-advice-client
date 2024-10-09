/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-pro-react";
import GFrom from '../forms/GFrom';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import GInput from '../forms/GInput';
import { Button, Select, SelectItem } from '@nextui-org/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { postValidation } from '@/validationSchema/validationSchema';
import { useMakePostMutation } from '@/redux/features/post/postApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import CreateCategory from '../modals/CreateCategoryModal';
import { useGetCategoryQuery } from '@/redux/features/category/category.api';
import { useLocalUser } from '@/context/user.Provider';

const Editor = () => {
    const router = useRouter()
    const [createPost] = useMakePostMutation()
    const editor = useRef(null)
    const [content, setContent] = useState('');
    const { data, isLoading } = useGetCategoryQuery(undefined)
    const [category, setCategory] = useState()
    const { user } = useLocalUser()
    const categories = data?.data;



    const config = {
        loadExternalConfig: false,
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        uploader: {
            url: 'https://xdsoft.net/jodit/finder/?action=fileUpload'
        },
        filebrowser: {
            ajax: {
                url: 'https://xdsoft.net/jodit/finder/'
            },
            height: 450,
        }
    }

    const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Creating...")
        const postData = {
            ...data, post: content, category, userId: user?._id
        }
        console.log(postData)
        const res = await createPost(postData) as any
        if (res?.data?.success) {
            toast.success(res?.data?.message, { id: toastId })
            router.push("/post")
        } else {
            toast.error(res?.error?.message || res?.error?.data?.message || "Something went wrong", { id: toastId })
        }
    }

    return (
        <div className='pb-10 px-2 md:px-0'>
            <GFrom onSubmit={handleSubmit} resolver={zodResolver(postValidation)}>
                <GInput label='Post Title' name="title" clasName='mb-2' />
                <div className='flex md:gap-10 w-full justify-start gap-4 mb-6 mt-4'>
                    <div className="flex min-w-[120px] md:min-w-[500px] flex-wrap md:flex-nowrap gap-4">
                        <Select isDisabled={isLoading}
                            label="Select an animal"
                            size='sm'
                            className="max-w-xs"
                            onChange={(e: any) => setCategory(e.target.value)}>
                            {
                                categories?.map((category: { category: string; image: string; _id: string }) => (
                                    <SelectItem key={category?._id} value={category?._id}>
                                        {category?.category}
                                    </SelectItem>
                                ))
                            }
                        </Select>
                    </div>
                    <CreateCategory />
                </div>
                <JoditEditor
                    className='min-h-[600px]'
                    ref={editor}
                    value={content}
                    config={config}// tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                // onChange={newContent => { console.log(newContent) }}
                />
                <Button type='submit' className='mt-4 bg-secondary text-white'>Submit Post</Button>
            </GFrom>
        </div>
    );
}

export default Editor