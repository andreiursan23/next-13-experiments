import { PageProps } from "./page"

export default function Head({ params: { searchTerm } }: PageProps) {
    return (
        <>
            <title>{searchTerm}</title>
        </>
    )
}