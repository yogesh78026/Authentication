import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function SearchResults() {
    const { movie } = useParams();
    const [data, setData] = useState();

    const url = `https://imdb-api.com/en/API/Search/k_x6lpdmlu/${movie}`
    useEffect(() => {
        async function fun1() {
            const result = await axios.get(url)
            setData(result.data.results)
            console.log(result);
        }
        fun1();
    }, [url])
    console.log(data);
    return (
        <div className='movieCards'>
            {data?.map((movie) => {
                return (
                    <div className='movieCard'>
                        <Link className='searchLink' to={`/movie/${movie.id}`}>
                            <img src={movie.image} className='searchImg' alt='img' />
                            <h2 className='searchTitle'>{movie.title}</h2>
                        </Link>
                    </div>

                )
            })}

        </div>
    )
}
