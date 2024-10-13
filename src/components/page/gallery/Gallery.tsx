"use client"
import { useGetAllPostQuery } from '@/redux/features/post/postApi';
import Image from 'next/image';
import React from 'react';

// Function to extract all image URLs from the HTML string
const extractImagesFromPost = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const images = Array.from(doc.querySelectorAll('img'));
    return images.map((img) => img.src); // Return the image URLs
};


const ImageGallery = () => {
    // Extract images from all posts
    const { data } = useGetAllPostQuery({})
    const allImages = data?.data?.flatMap((postObj: any) => extractImagesFromPost(postObj.post));

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Image Gallery</h2>
            {allImages?.length === 0 ? (
                <p>No images found in the posts.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {allImages?.map((src: string, idx: number) => (
                        <div key={idx} className="p-2 bg-gray-100 rounded-md shadow-md">
                            <Image width={400} height={400} src={`${src}`} alt={`Gallery image ${idx + 1}`} className="w-full h-auto object-cover rounded-md" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
