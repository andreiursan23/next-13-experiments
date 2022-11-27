import styles from './Note.module.css';
import Link from "next/link";

export function Note(props: any) {
    const { note } = props;
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`} className={styles.note}>
            <h2>{title}</h2>
            <h5>{content}</h5>
            <p>{created}</p>
        </Link>
    )
}