/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetAllPostQuery } from '@/redux/features/post/postApi';
import React from 'react';
import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';
// Function to extract all image URLs from the HTML string
const extractImagesFromPost = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const images = Array.from(doc.querySelectorAll('img'));

    // Return the image URLs with width and height for the Gallery component
    return images.map((img) => ({
        src: img.src,
        width: img.width || 400, // Use img.width or default to 4
        height: img.height || 300 // Use img.height or default to 3
    }));
};

const ImageGallery = () => {
    const { data } = useGetAllPostQuery({});

    // Extract images from posts
    const allImages = data?.data?.flatMap((postObj: any) => extractImagesFromPost(postObj.post)) || [];
    const onInit = () => {
        // console.log('lightGallery has been initialized');
    };
    // Function to handle opening lightbox

    return (
        <div>
            <LightGallery
                onInit={onInit}
                elementClassNames='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'
                speed={500}
                plugins={[lgThumbnail, lgZoom]}>
                {
                    allImages?.length > 0 &&
                    allImages?.map((item: { height: number; src: string; width: number }, idx: number) => <Image className='w-full object-cover object-center cursor-pointer' key={idx} src={`${item?.src}`} width={item.width} height={item.height} alt='image' />)
                }
            </LightGallery>
        </div>
    );
};

export default ImageGallery;
