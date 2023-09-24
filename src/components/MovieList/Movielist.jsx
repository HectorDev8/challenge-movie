import React from 'react';
import './StyleMovielist.css'

function MovieList({ movieList }) {
    const sortedMovies = movieList.slice().sort((a, b) => {
        const durationA = parseFloat(a.duracion);
        const durationB = parseFloat(b.duracion);
    
        return durationB - durationA;
    });
    return (
        <div>
            <h2 className='title'>Lista de Películas</h2>
            <div className="movie-list">
                {sortedMovies.map((movie, index) => (
                <div key={index} className="movie-card">
                    <h3>{movie.nombre}</h3>
                        <div className="movie-details">
                            <p>Calificaciones: {movie.calificacion}/100</p>
                                <p>{movie.duracion} horas</p>
                        </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
