export type PageProps = {
    params: {
        searchTerm: string;
    }
}

type SearchResult = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            snippet: string;
        }
    ]
}

const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );

    // This is only to test the error component
    // The error will only show in production
    // throw new Error('Hopa, n-am primit niciun raspuns :(');

    const data = await res.json();
    return data;
}

export default async function SearchResults({ params: { searchTerm } }: PageProps) {
    const searchResults: SearchResult = await search(searchTerm)

    return (
        <div>
            <p>You searched for: "{searchTerm.split('%').join(' ')}"</p>

            <ol>
                {searchResults.organic_results.map(result => (
                    <li key={result.position}>
                        <p><strong>{result.title}</strong></p>
                        <p>{result.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}