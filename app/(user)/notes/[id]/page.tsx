import styles from '../Note/Note.module.css';
import { notFound } from 'next/navigation';

async function getNote(noteId: string) {
    // Being a dynamic route, it won't automatically cache    
    const res = await fetch(

        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
        {
            // But we can setup the caching behavior, regenerating the page every 10 seconds
            next: { revalidate: 10 },
            // Also called ISG aka Incremental Site Generation
        }
    );
    const data = await res.json();
    return data;
}

export default async function NotePage({ params: { id } }: any) {
    const note = await getNote(id);

    if (!note.id) {
        notFound();
    }

    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    )
}

// this is similar to getStaticProps in old version, SSG aka Static-Site Generation
// all the existing notes will be pre-loaded for instant load time

// if we don't have this, they will be server side generated and then rendered, as Server Components
export async function generateStaticParams() {
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/notes/records',
    );
    const data = await res.json();

    return data.items.map((note: any) => ({
        id: note.id.toString(),
    }))
}