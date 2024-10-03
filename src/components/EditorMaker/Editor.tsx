/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const TextEditor = () => {
    const editor = useRef(null);

    // Configuration for the Jodit Editor
    const config = {
        uploader: {
            insertImageAsBase64URI: false, // Set to false to avoid base64 encoding
            url: '/api/upload-image', // Your image upload API endpoint
            method: 'POST', // HTTP method for the upload
            headers: {
                'Authorization': 'Bearer your-token', // Optional: If you need to send authentication headers
            },
            filesVariableName: 'files', // The name of the form field that contains the image
            isSuccess: function (resp: { success: any; }) {
                return resp.success; // Define the success response condition
            },
            process: function (resp: { files: any[]; path: any; baseurl: any; error: any; }) {
                return {
                    files: resp.files.map((file) => file.url), // Map the uploaded file URLs to the image URL field
                    path: resp.path,
                    baseurl: resp.baseurl,
                    error: resp.error,
                };
            },
        },
        buttons: ['bold', 'italic', 'underline', 'image'], // Buttons including image upload
        height: 400, // Height of the editor
        uploaderInsertImageAsBase64URI: false, // Disable base64 image uploads
    };

    return (
        <div>
            <JoditEditor
                ref={editor}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onChange={(newContent) => {
                    console.log(newContent);
                }}
            />
        </div>
    );
};

export default TextEditor;
