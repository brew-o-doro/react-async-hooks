import React, { useState, useEffect } from 'react';

function useGiphy(query) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=nmPEyYNgfvZnjDk3dhLJ82P7QROqrMAq&q=${query}&limit=25&offset=0&rating=r&lang=en`);
                const res = await response.json();
                
                setResults(
                    res.data.map(data => {
                        return data.images.preview.mp4;
                    })
                )
            } catch(err){}
        }
        if (query !== '') {
            fetchData();
        }
    }, [query]);

    return results;
}

export default function Async() {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const results = useGiphy(query); 

    const onSubmit = (event) => {
        event.preventDefault();
        setQuery(search);
    }

   

    return (
        <>
        <container>
        <h1>Async React Hooks</h1>

        <form onSubmit={onSubmit} className="form">
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for Gifs!"/>
            <button type="submit">Search</button>
        </form>
        </container>
        <br />
        {results.map(item => (<video autoPlay loop key={item} src ={item}/>))}
            
        </>
    )
}
