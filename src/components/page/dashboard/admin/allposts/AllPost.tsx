/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useLocalUser } from '@/context/user.Provider'
// import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api'
import { useDeletePostMutation, useGetAllPostQuery } from '@/redux/features/post/postApi'
import React from 'react'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { Tpost } from '@/types'
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import NoDataFound from '@/components/shared/NotDataFound'
import Link from 'next/link'
import Swal from "sweetalert2"
const ViewAllPostFromAdmin = () => {
    const [deletePost] = useDeletePostMutation()



    const { user, isLoading } = useLocalUser()
    const { data: postData } = useGetAllPostQuery({})
    // const { data } = useGetUserByEmailQuery(`${user?.email}`)

    const post = postData?.data;
    // console.log(userData)
    const handleDeletePost = (postId: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(postId)
                const res = await deletePost(postId) as any;
                if (res?.data?.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: `${res?.error?.data?.message || "something went wrong"}`,
                        text: "Items not deleted",
                        icon: "error"
                    });
                }
                console.log('red', res,)
            }
        });
    }
    return (
        <>
            {
                isLoading ? <LoadingSpinner /> :
                    <div className='flex-1 md:border-l p-2 md:p-5  bg-gray-300 rounded-lg'>
                        <div>
                            <h2 className='font-semibold text-lg md:text-xl my-3'>Your Posts</h2>
                            {
                                isLoading ? <LoadingSpinner /> : post?.length < 1 ? <NoDataFound /> :
                                    <div>
                                        <Table aria-label="Example static collection table">
                                            <TableHeader>
                                                <TableColumn className=''>NO</TableColumn>
                                                <TableColumn className=''>Title</TableColumn>
                                                <TableColumn className=''>Up votes</TableColumn>
                                                <TableColumn className=''>Down Votes</TableColumn>
                                                <TableColumn className=''>View</TableColumn>
                                                <TableColumn className='text-center'>Actions</TableColumn>

                                            </TableHeader>
                                            <TableBody>
                                                {
                                                    post?.map((item: Tpost, idx: number) => (
                                                        <TableRow key={`${idx}`}>
                                                            <TableCell className='font-semibold'>{idx + 1}</TableCell>
                                                            <TableCell className='font-semibold'>{item.title.slice(0, 30)}</TableCell>
                                                            <TableCell className='md:pl-10'>{item?.upVotes?.length}</TableCell>
                                                            <TableCell className='md:pl-10'>{item?.downVotes?.length}</TableCell>
                                                            <TableCell><Link href={`/post/${item?._id}`} className='bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-300'>View</Link></TableCell>
                                                            <TableCell className='flex justify-center gap-4'>
                                                                <Button onClick={() => handleDeletePost(item?._id)}>Delete</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </div>
                            }
                        </div>
                    </div>
            }

        </>
    )
}

export default ViewAllPostFromAdmin