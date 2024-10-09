"use client"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingBlur from "@/components/shared/LoadingBlur";
import { useGetPostByIdQuery } from "@/redux/features/post/postApi"
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from "react-icons/fa";
import PostActivitiy from "./PostActivitiy";
import Image from "next/image"
// interface User {
//     verified: boolean;
//     name: string;
//     email: string;
//     profilePhoto: string;
//     address: string;
//     links: { socialName: string; url: string }[];
// }

// interface Post {
//     _id: string;
//     title: string;
//     post: string;
//     userId: User;
//     category: {
//         category: string;
//         image: string;
//     };
// }

const PostDetails = ({ id }: { id: string }) => {
    const { data, isLoading } = useGetPostByIdQuery(`${id}`)
    const post = data?.data;
    // post?.activity?.map((item: any) => (
    //     console.log(item)
    // ))




    return (
        <div>
            {
                isLoading ? <LoadingBlur /> :
                    <div className="max-w-[900px] px-3 mx-auto">
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
                                    {post?.userId.verified ? (
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
                                <div className="mt-6 flex space-x-4">
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
                            </motion.div>
                        </div>
                        {/* post activity */}
                        <div className="p-3 md:p-5 bg-gray-200 mt-5 rounded-lg">
                            <PostActivitiy activity={post?.activity} postId={post?._id} />
                        </div>
                        <div className="mt-6">
                            <h2 className="font-semibold md:text-xl">Comments</h2>
                            <div>
                                {
                                    post?.activity?.map((item: any) => (
                                        item?.comment?.length &&
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
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default PostDetails