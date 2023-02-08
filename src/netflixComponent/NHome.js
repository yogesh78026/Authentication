import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function Home() {
    const [search, setSearch] = useState();
    console.log(search);
    return (
        <div className='homeBg'>
            <div className='home'>
                <h1> Search for your favourite movies and tv shows!</h1>
                <input value={search} onChange={(event) => setSearch(event.target.value)} type='text' placeholder='Search Movies, Tv shows and more.... ' />
                <button type='submit'>
                    <Link to={`/search/${search}`}>search</Link>
                </button>
            </div>

        </div>
    )
}

export default Home