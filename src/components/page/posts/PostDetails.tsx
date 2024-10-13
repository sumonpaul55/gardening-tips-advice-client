"use client"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingBlur from "@/components/shared/LoadingBlur";
import { useGetPostByIdQuery } from "@/redux/features/post/postApi"
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from "react-icons/fa";
import PostActivitiy from "./PostActivitiy";
import Image from "next/image"
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { useLocalUser } from "@/context/user.Provider";
import { useState } from "react";
import { usePDF } from 'react-to-pdf';


const PostDetails = ({ id }: { id: string }) => {
    const { data, isLoading } = useGetPostByIdQuery(`${id}`)
    const post = data?.data;
    const { user } = useLocalUser()
    const [copied, setCopied] = useState(false);
    const { toPDF, targetRef } = usePDF({ filename: `${post?.title}.pdf` })



    // handle copy linkg
    const handleCopyLink = () => {
        const postUrl = `${window.location.origin}/post/${id}`; // Generate the full post URL
        navigator.clipboard.writeText(postUrl);
        setCopied(true);
        // Reset copied state after 3 seconds
        setTimeout(() => setCopied(false), 3000);
    };
    if (post?.premium === true && user?.verfied !== true) {
        return <section>
            <div className="md:min-h-[350px] relative">
                <div className="absolute h-full w-full backdrop-blur-sm z-30 flex justify-center items-end">
                    <div className="flex flex-col gap-10">
                        <h3 className="mb-10 text-white bg-secondary p-3 inline-block">This Content is Prmium for verified user</h3>
                    </div>
                </div>
                <div className="relative h-80 w-full overflow-hidden rounded-lg">
                    <img
                        src={post?.category.image}
                        alt={post?.category.category}
                        className="object-cover object-top w-full h-full"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                    >
                        <h1 className="text-white text-xl md:text-3xl font-bold px-3">{post?.title}</h1>
                    </motion.div>
                </div>
            </div>
        </section>
    }
    return (
        <div>
            <h2 className="font-semibold md:text-lg lg:text-3xl my-3 mx-3 text-center mb-10">{post?.title}</h2>
            {
                isLoading ? <LoadingBlur /> :
                    <div className="max-w-[900px] px-3 mx-auto" ref={targetRef}>
                        {/* Category Image and Title */}
                        <div className="relative h-80 w-full overflow-hidden rounded-lg">
                            <img
                                src={post?.category.image}
                                alt={post?.category.category}
                                className="object-cover object-top w-full h-full"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                            >
                                <h1 className="text-white text-xl md:text-3xl font-bold px-3">{post?.title}</h1>
                            </motion.div>
                        </div>

                        <div className="mx-auto shadow mt-10">
                            <motion.div
                                initial={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mx-auto p-3 md:p-6 bg-white shadow-md rounded-lg">
                                {/* Post Content */}
                                <motion.div
                                    initial={{ opacity: 0, translateY: 30 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-8 md:text-lg text-gray-800"
                                    dangerouslySetInnerHTML={{ __html: post?.post }} />
                                {/* User Info */}
                                <div className="flex items-center mt-10 justify-evenly py-5 bg-gray-100 rounded-lg">
                                    <img
                                        src={post?.userId.profilePhoto}
                                        alt={post?.userId.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                                    />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold">{post?.userId.name}</h3>
                                        <p className="text-sm text-gray-500">{post?.userId.address}</p>
                                        <p className="text-sm text-gray-500">{post?.userId.email}</p>
                                    </div>
                                    {post?.userId.verfied ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="ml-auto text-green-500"
                                        >
                                            <span className="font-semibold"> ✅ Verified</span>
                                        </motion.div>
                                    ) : <h4 className="font-semibold text-lg">Not verified</h4>}
                                </div>

                                {/* Social Links */}
                                <div className="flex justify-between items-center flex-col sm:flex-row">
                                    <div className="mt-6 flex flex-col gap-3">
                                        <h2 className="font-semibold text-sm">authors socila links</h2>
                                        <div className="flex gap-5">
                                            {post?.userId?.links?.map((link: any) => {
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
                                                    <motion.a
                                                        key={link.socialName}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-500 hover:text-blue-600"
                                                        whileHover={{ scale: 1.2 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >

                                                        <IconComponent size={24} />
                                                    </motion.a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        {/* Share Button */}
                                        <div className="flex justify-end mt-4 flex-col gap-2">
                                            <motion.button
                                                onClick={handleCopyLink}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600"
                                            >
                                                Share Post
                                            </motion.button>
                                            <button onClick={() => toPDF()} className="bg-secondary py-2 text-white px-2 rounded-md">Download PDF</button>
                                        </div>
                                        {copied && (
                                            <motion.div
                                                initial={{ opacity: 0, translateY: -10 }}
                                                animate={{ opacity: 1, translateY: 0 }}
                                                className="text-green-500 text-sm text-center mt-2">
                                                Link copied to clipboard!
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* post activity */}
                        <div className="p-3 md:p-5 bg-gray-200 mt-5 rounded-lg">
                            <PostActivitiy activity={post?.activity} postId={post?._id} upVotes={post?.upVotes?.length} downVotes={post?.downVotes?.length} />
                        </div>
                        <div className="mt-6">
                            <h2 className="font-semibold md:text-xl">Comments</h2>
                            <Accordion>
                                <AccordionItem key="1" aria-label="View All Comments" title="View All Comments" className="border px-5">
                                    <div>
                                        {
                                            post?.activity?.map((item: any) => (
                                                item?.comment?.length > 0 &&
                                                item?.comment?.map((comment: string, idx: number) => (
                                                    <div key={idx} className="bg-gray-100 rounded-lg p-3 mt-4 flex gap-4">
                                                        <Image src={item?.userId?.profilePhoto} height={200} width={200} alt={item?.userId?.name} className="border p-[1px] size-24 rounded-full" />
                                                        <div className="w-full">
                                                            <h2 className="font-semibold md:text-lg">Name: <span>{item?.userId?.name}</span></h2>
                                                            <div className="p-1 pl-10 bg-gray-50">
                                                                <p className="mt-1 text-lg">{comment}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            )
                                            )
                                        }
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
            }
        </div>
    )
}

export default PostDetails