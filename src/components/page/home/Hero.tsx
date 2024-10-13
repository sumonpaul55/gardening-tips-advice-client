"use client"
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white ">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-[80vh] py-20">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold text-center mb-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Cultivate Your Garden
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl text-center mb-8 max-w-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Discover expert tips and guides to help you grow your dream garden.
                    Whether you&apos;re a beginner or a seasoned gardener, we&apos;ve got you covered!
                </motion.p>
                <motion.button
                    className="bg-white text-green-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-100 transition duration-300"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    Explore Now
                </motion.button>
            </div>
        </div>
    );
};

export default HeroSection;
