"use client"
import { motion } from "framer-motion";
import React from "react";

const loaderVariants = {
    animate: {
        rotate: [0, 360],
        transition: {
            duration: 1,
            ease: "linear",
            repeat: Infinity,
        },
    },
};

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <motion.div
                className="w-16 h-16 border-4 border-dashed border-blue-500 rounded-full"
                variants={loaderVariants}
                animate="animate"
            />
        </div>
    );
};

export default Loading;
