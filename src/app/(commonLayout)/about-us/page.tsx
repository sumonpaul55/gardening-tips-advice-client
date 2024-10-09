/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="bg-white text-gray-800 py-16 px-6">
            <div className="container mx-auto">
                {/* Our Mission */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        At NextLeaf, we aim to create a vibrant community where people can share insightful articles, tips, and advice on various topics like gardening, lifestyle, and technology.
                        We believe in empowering individuals to learn, grow, and connect through shared knowledge.
                    </p>
                </div>

                {/* Our Story */}
                <div className="flex flex-col md:flex-row items-center md:items-start mb-16">
                    <div className="md:w-1/2 p-6">
                        <h3 className="text-3xl font-semibold text-purple-600 mb-4">Our Story</h3>
                        <p className="text-lg mb-6">
                            NextLeaf started as a simple idea: to create a platform where enthusiasts from different walks of life can share their knowledge and help others grow. From humble beginnings in 2023, our platform has grown into a thriving community where members exchange tips, advice, and ideas. Whether you&apos;re passionate about gardening, tech innovations, or lifestyle improvements, NextLeaf is your go-to source for learning and contributing.
                        </p>
                        <p className="text-lg">
                            Today, we&apos;re proud to offer premium content, expert advice, and a space where verified users can share their expertise and help others level up.
                        </p>
                    </div>
                    <div className="md:w-1/2 p-6">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Our Story"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Meet the Team */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-semibold text-green-600 mb-6">Meet the Team</h3>
                    <div className="flex flex-wrap justify-center">
                        {/* Team Member 1 */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member"
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h4 className="text-xl font-bold mb-2">Alex Johnson</h4>
                                <p className="text-sm text-gray-600">Founder & CEO</p>
                                <p className="text-gray-700 mt-3">
                                    Alex is a passionate entrepreneur and web developer who founded NextLeaf with the vision of creating a community-driven platform for knowledge sharing.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member"
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h4 className="text-xl font-bold mb-2">Samantha Brown</h4>
                                <p className="text-sm text-gray-600">UI/UX Designer</p>
                                <p className="text-gray-700 mt-3">
                                    Samantha is a talented UI/UX designer responsible for creating the sleek, user-friendly interface that powers the NextLeaf experience.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member"
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h4 className="text-xl font-bold mb-2">Michael Lee</h4>
                                <p className="text-sm text-gray-600">Backend Developer</p>
                                <p className="text-gray-700 mt-3">
                                    Michael ensures that everything runs smoothly behind the scenes, developing the APIs and backend architecture that support NextLeaf&apos;s functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-blue-500 mb-4">Join Us Today!</h3>
                    <p className="text-lg max-w-xl mx-auto mb-8">
                        Whether you&apos;re here to share knowledge or learn from others, we welcome you to become part of the NextLeaf community. Share your thoughts, connect with others, and explore a world of tips and advice.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
