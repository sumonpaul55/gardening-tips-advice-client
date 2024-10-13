"use client"
import { useDeleteUserMutation, useGetAllUserQuery, useMakeUserAdminMutation } from '@/redux/features/auth/auth.api'
import React from 'react'
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import Link from 'next/link';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

const AllUserTable = () => {
    const [deleteUser] = useDeleteUserMutation()
    const [promotDemote] = useMakeUserAdminMutation()
    const { data } = useGetAllUserQuery({})
    const users = data?.data;


    const handleDelete = (id: string) => {
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
                const res = await deleteUser(id)
                if (res?.data?.success) {
                    toast.success(res?.data?.message)
                } else {
                    toast.error("Something went wrong")
                }
            }
        });
    }

    // handle user role
    const handleUser = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to promot or demote this user",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Do it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await promotDemote(id) as any
                if (res?.data?.success) {
                    toast.success(res?.data?.message)
                } else {
                    toast.error(res?.error?.data?.message || res?.error?.message || "Something went wrong")
                }
            }
        });
    }
    return (
        <Table
            aria-label="User table">
            <TableHeader>
                <TableColumn>NO</TableColumn>
                <TableColumn>Name</TableColumn>
                <TableColumn>Role</TableColumn>
                <TableColumn>Total Posts</TableColumn>
                <TableColumn>Verified</TableColumn>
                <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
                {users?.map((user: any, idx: number) => (
                    <TableRow key={user._id}>
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell className='font-roboto_slab md:text-lg'>{user.name}</TableCell>
                        <TableCell className=''><span className={`${user?.role === "ADMIN" ? "bg-pink-600" : "bg-green-600"} text-center min-w-14 block text-white p-1 rounded`}>{user.role}</span></TableCell>
                        <TableCell>{user.totalPosts}</TableCell>

                        <TableCell className=''><span className={`${user?.verified === true ? "bg-pink-600" : "bg-green-600"} text-center min-w-14 block text-white p-1 rounded`}>{user.verified ? "Yes" : "No"}</span></TableCell>

                        <TableCell>
                            <div className="flex gap-2">
                                <Button onClick={() => handleDelete(user._id)}>
                                    Delete
                                </Button>
                                <Button onClick={() => handleUser(user?._id)} color="primary">
                                    {user?.role === "ADMIN" ? "Make User" : "Make Admin"}
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
// Example delete handler
const handleDelete = (userId: string) => {
    // Add your delete logic here, e.g., calling an API
    console.log("Delete user with ID:", userId);
};

export default AllUserTable