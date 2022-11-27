'use client';
// This will instruct next that this is a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async() => {
        await fetch(
            'http://127.0.0.1:8090/api/collections/notes/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    content,
                })
            }
        )

        setTitle('');
        setContent('');

        // This is needed because notes page will not show the new added note
        
        // router.refresh();
        // See why the refresh is done automatically
    }

    return (
        <form onSubmit={create}>
            <h3>Create a new Note</h3>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea 
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">
                Create note
            </button>
        </form>
    )
}