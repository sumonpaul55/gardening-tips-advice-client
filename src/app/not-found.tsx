/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';


const NotFound = () => {
    const router = useRouter()
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-9xl font-bold text-green-600"
            >
                404
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 text-4xl font-semibold text-gray-900"
            >
                Oops! Page not found.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-2 text-lg text-gray-600"
            >
                The page you&apos;re looking for doesn&apos;t exist.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-6 flex items-center gap-3"
            >
                <Link href="/" className="bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 px-3 py-2">
                    Go Back Home
                </Link>
                <Button className="bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300" onClick={() => router.back()}>Go Back</Button>
            </motion.div>
        </div>
    );
};

export default NotFound;
