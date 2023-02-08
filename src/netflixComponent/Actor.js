import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Actor() {
    const { actorId } = useParams();
    const [data, setData] = useState();
    const url = `https://imdb-api.com/en/API/Name/k_x6lpdmlu/${actorId}`;

    useEffect(() => {

        async function fun1() {
            const response = await axios.get(url);
            console.log(response);
            setData(response.data);
        }
        fun1()
    }, [url])
    return (
        <div>
            <div className='actorCircle'>
                <img src={data?.image} alt='actorimg' />
            </div>
            <div className='actorDetails'>
                <h1>{data?.name}</h1>
                <h5>{data?.roll}</h5>
                <p>{data?.summary}</p>
                <h2>{data?.awards}</h2>
            </div>
            <div className='actorMovies'>
                {
                    data?.knownFor?.map((movie) => (
                        <div className='actorCard'>
                            <Link to={`/movies/${movie.id}`}>
                                <img src={movie.image} alt='actorcard' />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Actor