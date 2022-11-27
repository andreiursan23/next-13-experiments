'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchPage() {
    const [search, setSearch] = useState('');
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/search/${search}`);
    }

    return (
        <form onSubmit={handleSearch}>
            {/* onSubmit={e => handleSearch} --- THIS WILL GET THE EVENT TYPESCRIPT TYPE */}
            <input 
                type="text"
                value={search}
                placeholder="Enter search term"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
                Search
            </button>
        </form>
    )
}