// The reason why all the notes pages show in network, is because they are prefetched. Routes are prefetched as they become visible in the viewport when using the <Link> component

// Prefetching is only working in PRODUCTION

// Prefetching can be disabled by passing prefetch={false} to <Link>

export default function NotesPage() {
    return (
        <div>
            {/* Here the h1 will be replaced by layout */}
            <h1>Notes</h1>
        </div>
    )
}
