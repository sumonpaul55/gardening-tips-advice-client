/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
// import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { useGetPostByUserIdQuery, } from '@/redux/features/post/postApi'
import { Tpost } from '@/types'
import React from 'react'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import NoDataFound from '@/components/shared/NotDataFound'
import LoadingSpinner from '@/components/shared/LoadingSpinner'


const UsersPosts = ({ userId }: { userId: string }) => {
    // console.log(data?.data)
    const { data, isLoading, } = useGetPostByUserIdQuery(userId)
    const post = data?.data;




    console.log(post)

    return (
        <div>
            <h2 className='font-semibold text-lg md:text-xl my-3'>Your Posts</h2>
            {
                isLoading ? <LoadingSpinner /> : post?.length > 1 ? <NoDataFound /> :
                    <div>
                        <Table>
                            <TableHeader>
                                <TableColumn>NO</TableColumn>
                                <TableColumn>Title</TableColumn>
                                <TableColumn>Up votes</TableColumn>
                                <TableColumn>Down Votes</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {
                                    post?.map((item: Tpost, idx: number) => (
                                        <TableRow key={`${idx}`}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell>{item.title.slice(0, 30)}</TableCell>
                                            <TableCell>
                                                {item?.upVotes?.length}
                                            </TableCell>
                                            <TableCell>{item?.downVotes?.length}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
            }
        </div >
    )
}

export default UsersPosts