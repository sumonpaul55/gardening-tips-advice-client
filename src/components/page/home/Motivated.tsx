'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion'; // for animation, optional
import Image from 'next/image';
import inspirationImage from "@/../public/inspiration.jpg"
import Container from '@/components/shared/Container/Container';
const quotes = [
    "Gardening adds years to your life and life to your years.",
    "To plant a garden is to believe in tomorrow.",
    "The love of gardening is a seed once sown that never dies.",
    "In every gardener there is a child who believes in the seed fairy.",
    "Gardens are not made by singing 'Oh, how beautiful,' and sitting in the shade."
];

const QuotesSection: React.FC = () => {
    return (
        <Container className='pb-16'>
            <h2 className="text-4xl font-bold text-green-600 mb-6 m-10">Inspiring Gardening Quotes</h2>
            <div className='flex md:flex-row flex-col items-start gap-3 mt-16'>
                <div className='p-4 border-gray-200 border justify-center h-full' style={{
                    boxShadow: '-20px 30px 15px rgba(0, 0, 0, 0.2)'
                }}>
                    <Image src={inspirationImage} width={300} height={800} alt='Inspiration iamge' className='w-full' />
                </div>
                <div className="md:w-2/3 mx-auto space-y-6 justify-between px-10">
                    {quotes.map((quote, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
                        >
                            <p className="text-lg italic text-gray-700">"{quote}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default QuotesSection;
