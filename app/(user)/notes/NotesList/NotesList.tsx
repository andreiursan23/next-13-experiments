import Link from "next/link";
import styles from "../Note/Note.module.css";

// === Below is another option to set cache and other props, when fetch is not used ===
// export const dynamic = 'auto',
//     dynamicParams = true,
//     revalidate = 0,
//     fetchCache = 'auto',
//     runtime = 'nodejs',
//     preferredRegion = 'auto'

async function getNotes() {
    // This data will be cached, because the route is not dynamic
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/notes/records',
        // This is similar to getServerSideProps
        { cache: 'no-store' }
    );
    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesList() {
    const notes = await getNotes();

    return (
        <div className={styles.grid}>
            {notes?.map((note) => (
                // <Note key={note.id} note={note} />
                <Link href={`/notes/${note.id}`} key={note.id}>Note: <span>{note.id}</span></Link>
            ))}
        </div>
    )
}