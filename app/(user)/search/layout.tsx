import { ReactNode } from 'react';
import Search from './Search/Search';

export default function SearchLayout({
    children,
} : {
    children: ReactNode
}) {
    return (
        <main>
            <div>
                <h1>Search</h1>
            </div>

            <div>
                <Search />

                <div>{children}</div>
            </div>
        </main>
    )
}