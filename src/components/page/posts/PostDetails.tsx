"use client"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingBlur from "@/components/shared/LoadingBlur";
import { useGetPostByIdQuery } from "@/redux/features/post/postApi"
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaPinterest, FaLinkedin } from "react-icons/fa";

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

    return (
        <div>
            {
                isLoading ? <LoadingBlur /> :

                    <div className="max-w-[700px] mx-auto shadow">
                        <motion.div
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg"
                        >
                            {/* Category Image and Title */}
                            <div className="relative h-64 w-full overflow-hidden rounded-lg">
                                <img
                                    src={post?.category.image}
                                    alt={post?.category.category}
                                    className="object-cover w-full h-full"
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                                >
                                    <h1 className="text-white text-3xl font-bold px-3">{post?.title}</h1>
                                </motion.div>
                            </div>

                            {/* Post Content */}
                            <motion.div
                                initial={{ opacity: 0, translateY: 30 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 text-lg text-gray-800"
                                dangerouslySetInnerHTML={{ __html: post }}
                            />

                            {/* User Info */}
                            <div className="flex items-center mt-10">
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
                                        ✅ Verified
                                    </motion.div>
                                ) : "Not verified"}
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
            }
        </div>
    )
}

export default PostDetails