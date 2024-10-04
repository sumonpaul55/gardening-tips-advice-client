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

const Editor = () => {
    const router = useRouter()
    const [createPost] = useMakePostMutation()
    const editor = useRef(null)
    const [content, setContent] = useState('');

    const config = {
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
            ...data, post: content
        }
        const res = await createPost(postData) as any
        if (res?.data?.success) {
            toast.success(res?.data?.message, { id: toastId })
            router.push("/post")
        } else {
            toast.error(res?.error?.message || res?.error?.data?.message || "Something went wrong", { id: toastId })
        }
    }


    return (
        <GFrom onSubmit={handleSubmit} resolver={zodResolver(postValidation)}>
            <div>
                <GInput label='Post Title' name="title" clasName='mb-2' />
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Select
                        label="Select an animal"
                        className="max-w-xs"
                    >
                        <SelectItem key="65454">
                            some thing
                        </SelectItem>
                    </Select>

                </div>
            </div>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}// tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            // onChange={newContent => { console.log(newContent) }}
            />
            <Button type='submit' className='mt-4 bg-secondary text-white'>Submit Post</Button>
        </GFrom>
    );
}

export default Editor