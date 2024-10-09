import React from 'react';

const PostHero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16 px-6 text-white">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6">Explore Our Posts</h1>
                <p className="text-lg mb-8">Find insightful articles, filter by category, and access premium content.</p>

                {/* Search Input */}
                <div className="flex justify-center items-center mb-6">
                    <input
                        type="text"
                        className="w-full max-w-lg p-3 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Search posts..."
                    />
                </div>

                {/* Filter by Category */}
                <div className="flex justify-center items-center mb-6">
                    <select
                        className="w-full max-w-xs p-3 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        defaultValue="all"
                    >
                        <option value="all">All Categories</option>
                        <option value="tech">Tech</option>
                        <option value="health">Health</option>
                        <option value="business">Business</option>
                        <option value="lifestyle">Lifestyle</option>
                    </select>
                </div>

                {/* Premium Content Button */}
                <div className="flex justify-center items-center">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300">
                        Access Premium Content
                    </button>
                </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-400 rounded-full opacity-50"></div>
        </section>
    );
};

export default PostHero;
