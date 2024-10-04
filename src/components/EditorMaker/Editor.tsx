"use client"
import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-pro-react";

const Editor = ({ }) => {

    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        uploader: {
            url: 'https://xdsoft.net/jodit/finder/?action=fileUpload'
        },
        filebrowser: {
            ajax: {
                url: 'https://xdsoft.net/jodit/finder/'
            },
            height: 580,
        }
    }



    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}// tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => { console.log(newContent) }}
        />
    );
}

export default Editor