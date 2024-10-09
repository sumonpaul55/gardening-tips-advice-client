/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Input, Select, SelectItem } from '@nextui-org/react';
import React from 'react';


const PostHero: React.FC = () => {

    return (
        <section className="relative bg-gradient-to-r from-green-700 via-indigo-600 to-green-700 py-6 px-6 text-white w-full">
            {/* Particle.js background */}

            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-2">Explore Our Posts</h1>
                <p className="text-lg mb-5">Find insightful articles, filter by category, and access premium content.</p>

                {/* Search Input */}
                <div className="flex justify-center items-center mb-6">
                    <Input
                        type="text"
                        className="w-full max-w-lg p-3 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Search posts..."
                    />
                </div>

                {/* Filter by Category */}
                <div className="flex justify-center items-center mb-6">
                    <Select
                        label="Categories"
                        size='sm'
                        placeholder="Select an Category"
                        className="max-w-xs"
                        onChange={(e: any) => console.log(e.target.value)}>
                        <SelectItem key="1" value="all">
                            All Categories
                        </SelectItem>
                        <SelectItem key="2" value="tech">
                            Tech
                        </SelectItem>
                    </Select>
                </div>

                {/* Premium Content Button */}
                <div className="flex justify-center items-center">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300">
                        Premium Content
                    </button>
                </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-300 rounded-full opacity-50"></div>
        </section>
    );
};

export default PostHero;
