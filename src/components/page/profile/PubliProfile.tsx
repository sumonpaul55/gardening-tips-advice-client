/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Container from '@/components/shared/Container/Container'
import { useLocalUser } from '@/context/user.Provider'
import { useFollowUnfolowMutation, useGetUserByidQuery } from '@/redux/features/auth/auth.api'
import { useGetPostByUserIdQuery, } from '@/redux/features/post/postApi'
import { Button } from '@nextui-org/react'
import moment from 'moment'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from "next/link"

const PubliProfile = ({ userId }: { userId: string }) => {
    const { data: userDatadb, isLoading } = useGetUserByidQuery(userId)
    const [followUnfollow] = useFollowUnfolowMutation()
    const { user: localUser } = useLocalUser()
    const userData = userDatadb?.data;
    const { data: post } = useGetPostByUserIdQuery(`${localUser?._id}`)
    const isFollower = userData?.follower?.some((item: any) => item?.email === localUser?.email)
    const [friedsent, setFriendsent] = useState(false)

    if (!isLoading && !userData) {
        redirect("/")
    }

    const handleFollowUnfollow = async () => {
        const info = { email: localUser?.email, userId: userData?._id }
        const res = await followUnfollow(info) as any
        if (res?.data?.success) {
            toast.success(res?.data?.message)
        } else {
            toast.error(res?.error?.data?.message)
        }
    }
    const handleFriendRequest = () => {
        setFriendsent(!friedsent)
    }
    return (
        <Container>
            <div className='flex flex-col md:flex-row md:p-5'>
                <div className=''>
                    <Image width={400} height={400} alt={userData?.name} src={userData?.profilePhoto} />
                </div>
                {/* more info */}
                <div className='flex bg-gray-200 flex-1 p-3 md:p-6 justify-between'>
                    <div className='flex flex-col gap-5 font-roboto_slab'>
                        <div className='flex-1'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-sm md:text-lg font-medium'>Name: {userData?.name}</span>
                                <span className='text-sm md:text-lg font-medium'>Email: {userData?.email}</span>
                                <span className='text-sm md:text-lg font-medium'>Role: {userData?.role}</span>
                                <span className='text-sm md:text-lg font-medium'>Phone: {userData?.phoneNumber}</span>
                                <span className='text-sm md:text-lg font-medium'>Follower: {userData?.follower?.length}</span>
                                <span className='text-sm md:text-lg font-medium'>Following: {userData?.following?.length}</span>
                                <span className='text-sm md:text-lg font-medium'>Joined: {moment(userData?.createdAt).format("MMM Do YY")}</span>
                                <span className='text-sm md:text-lg font-medium'>Varified: {userData?.verified === true ? "Verified" : "Not verified"}</span>
                            </div>
                        </div>
                        <div>
                            {
                                !isLoading && localUser?.email !== userData?.email ?
                                    <div className='flex items-center gap-3'>
                                        <Button className={`${isFollower ? "bg-pink-600" : "bg-secondary"}  text-white md:px-10`} onClick={handleFollowUnfollow}> {
                                            isFollower ? "Unfollow" :
                                                "Follow"}
                                        </Button>
                                        <Button className={`${friedsent ? "bg-pink-600" : "bg-secondary"}  text-white md:px-10`} onClick={handleFriendRequest}> {
                                            friedsent ? "Remove friend" :
                                                "Add Friend"}
                                        </Button>
                                    </div>
                                    :
                                    <h3 className='md:text-lg font-semibold font-roboto_slab'>Your Total Post {post?.data?.length}</h3>
                            }
                        </div>
                    </div>
                    {/* Social Links */}
                    <div className="mt-6 flex flex-col gap-3 md:gap-8">
                        {userData?.links?.map((link: any) => {
                            let IconComponent;
                            switch (link.socialName) {
                                case "Facebook":

                                    IconComponent = FaFacebookF;
                                    break;
                                case "Youtube":
                                    IconComponent = FaYoutube;
                                    break;
                                case "Twitter":
                                    IconComponent = FaTwitter;
                                    break;
                                case "Instagram":
                                    IconComponent = FaInstagram;
                                    break;
                                case "Pinterest":
                                    IconComponent = FaPinterest;
                                    break;
                                case "Linkedin":
                                    IconComponent = FaLinkedin;
                                    break;
                                default:
                                    return null;
                            }

                            return (
                                <Link href={link.url} key={link.socialName} target="_blank" rel="noopener noreferrer">
                                    <motion.div
                                        className="text-gray-500 hover:text-blue-600"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <IconComponent size={24} />
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PubliProfile