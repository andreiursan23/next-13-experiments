// In the probable case that third party packages are used, they MUST be used inside CLIENT COMPONENTS, as most of them use states

// One way of doing this is wrapping the third party component inside a client component. Afterwards we can import it in a Server Component and it will work

// Data fetching SHOULD be done in Server Components, but can be done in Client Components, although it is not recommended

// Props can be passed from Server to Client Components, but MUST BE serializable (an object can be serialized to a JSON string by calling the function JSON.stringify()). So values like functions, Dates, etc. cannot be passed directly

// If we fetch data from an API that requires an API_KEY, we can use the 'server-only' package. This will throw an error if we try to import it in a Client Component, therefore not allowing to leak the key

// Context can be used ONLY in Client Components

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>My experiments with Next 13</p>
        </div>
    );
}