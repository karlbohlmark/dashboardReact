import React from 'react';
import Quill from 'react-quill';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';


const modules = {
    toolbar: [
        [
            { font: [ ] },
            { size: [ ] }
        ],
        [
            { align: [ ] }
        ],
        [
            'bold',
            'italic',
            'underline',
            'strike'
        ],
        [
            { color: [ ] },
            { background: [ ] }
        ],
        [
            'blockquote'
        ],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' }
        ],
        [
            'link',
            'image',
            'video'
        ],
        [
            'clean'
        ]
    ]
};

export default function TextEditor(props) {
    return (
        <Quill
            modules={modules}
            {...props}
        />
    );
}
