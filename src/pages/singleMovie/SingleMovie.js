import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '../../hooks';

const SingleMovies = () =>{
    const query = useQuery();
    return(
        <div>
            <h1>{query.get('Title')}</h1>
            <img src={query.get('Poster')} />
            <Link to="/">voltar</Link>
        </div>
    );
}

export default SingleMovies;