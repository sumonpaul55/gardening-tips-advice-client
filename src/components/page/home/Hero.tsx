"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="relative bg-green-100 min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 opacity-50"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center px-6"
            >
                <h1 className="text-5xl font-bold text-green-900">
                    Welcome to GardenGurus
                </h1>
                <p className="mt-4 text-lg text-green-800">
                    Nurture your garden with expert tips and advice from the community.
                </p>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-8"
                >
                    <Link
                        href="/post"
                        className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
                    >
                        Explore Tips
                    </Link>
                </motion.div>
            </motion.div>

            <motion.img
                src="banner.jpg" // Add a beautiful plant or garden image here
                alt="Garden"
                className="absolute bottom-0 right-0 w-1/2 opacity-80 h-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            />
        </div>
    );
};

export default HeroSection;
