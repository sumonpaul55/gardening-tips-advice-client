'use client'
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion'; // for animation, optional

const quotes = [
    "Gardening adds years to your life and life to your years.",
    "To plant a garden is to believe in tomorrow.",
    "The love of gardening is a seed once sown that never dies.",
    "In every gardener there is a child who believes in the seed fairy.",
    "Gardens are not made by singing 'Oh, how beautiful,' and sitting in the shade."
];

const QuotesSection: React.FC = () => {
    return (
        <section className="py-10 bg-green-50 text-center">
            <h2 className="text-4xl font-bold text-green-600 mb-6">Inspiring Gardening Quotes</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {quotes.map((quote, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="bg-white p-6 rounded-lg shadow-lg"
                    >
                        <p className="text-lg italic text-gray-700">"{quote}"</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default QuotesSection;
