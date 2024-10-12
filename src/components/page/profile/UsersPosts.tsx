/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
// import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { Tpost } from '@/types'
import React from 'react'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import NoDataFound from '@/components/shared/NotDataFound'
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import Link from 'next/link'


const UsersPosts = ({ postData, isLoading, }: { postData: Tpost[]; isLoading: boolean | undefined }) => {
    const post = postData    // console.log(data?.data)
    return (
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
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
            }
        </div>
    )
}

export default UsersPosts