import NotesList from "./NotesList/NotesList";
import CreateNote from "./CreateNote/CreateNote";

// Layout components are Server Components by default, but can be set as Client Components
// The root layout (from app root folder) CANNOT be a Client Component
// Can also FETCH data, if needed
export default function NotesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <CreateNote />
        <div style={{display: 'flex'}}>
            {/* TypeScript ignore is needed here, because below component is a Promise, triggering a warning */}
            {/* @ts-ignore */}
            <NotesList />
            {/* Children rendered here are coming from dynamic [id] path, and can be populated with a page, another nested layout, loading UI, or error UI during rendering */}
            <div>{children}</div>
        </div>
    </div>
  )
}
