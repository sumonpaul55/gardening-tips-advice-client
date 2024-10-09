"use client"
import LoadingSpinner from '@/components/shared/LoadingSpinner'
import { useGetPostByUserIdQuery } from '@/redux/features/post/postApi'
import { Tpost } from '@/types'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React from 'react'

const UsersPosts = ({ userId }: { userId: string }) => {
    // const { data } = useGetVotesSummeryQuery(undefined)
    // console.log(data?.data)
    const { data, isLoading, } = useGetPostByUserIdQuery(userId)
    const post = data?.data;
    console.log(post)

    return (
        <div>
            {
                isLoading ? <LoadingSpinner /> :
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
                                            <TableCell>{item?.activity?.map(item => item.votes)}</TableCell>
                                            <TableCell>{item.title.slice(0, 30)}</TableCell>
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