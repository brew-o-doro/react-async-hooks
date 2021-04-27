import React, { useState } from 'react';


export default function Async() {
    const [search, setSearch] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(search);
    }

    return (
        <>
        <h1>Async React Hooks</h1>

        <form onSubmit={onSubmit}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for Gifs!"/>
            <button type="submit">Search</button>

        </form>
            
        </>
    )
}
