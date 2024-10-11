"use client"
import { useLocalUser } from '@/context/user.Provider'
import { useGetUserByEmailQuery } from '@/redux/features/auth/auth.api'
import { useGetPostByUserIdQuery } from '@/redux/features/post/postApi'
import React from 'react'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { Tpost } from '@/types'
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import NoDataFound from '@/components/shared/NotDataFound'
import Link from 'next/link'
import dynamic from 'next/dynamic'


const UsersAllPost = () => {

    const EditPostModal = dynamic(() => import("@/components/modals/PostEditModal"), {
        ssr: false
    })


    const { user, isLoading } = useLocalUser()
    const { data: postData } = useGetPostByUserIdQuery(`${user?._id}`)
    const { data } = useGetUserByEmailQuery(`${user?.email}`)
    const userData = data?.data;
    const post = postData?.data;
    console.log(userData)

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
                                                                <div>
                                                                    <EditPostModal post={item} />
                                                                </div>
                                                                <Button>Delete</Button>
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

export default UsersAllPost