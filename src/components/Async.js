import React, { useState, useEffect } from 'react';

async function fetchData(query) {
    try {
        let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=nmPEyYNgfvZnjDk3dhLJ82P7QROqrMAq&q=${query}&limit=25&offset=0&rating=r&lang=en`);
        const res = await response.json();
        
        res.data.map(data => {
            return data.images.preview.mp4;
        });   
    } catch(err){}
}

export default function Async() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    
    const onSubmit = (event) => {
        event.preventDefault();
        setQuery(search);
        console.log(search);
    }

    useEffect(() => {
        if (query !== '') {
            fetchData().then(setResults);
        }
    }, [query]);

    return (
        <>
        <h1>Async React Hooks</h1>

        <form onSubmit={onSubmit}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for Gifs!"/>
            <button type="submit">Search</button>
        </form>

        {results.map(item => (<video autoPlay loop key={item} src ={item}/>))}
            
        </>
    )
}
