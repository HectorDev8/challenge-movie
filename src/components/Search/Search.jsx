import React, { useState } from 'react';
import '/src/components/Search/StyleSearch.css'

export function Search({ movieList }) {
  // Estado para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');
  // Estado para los resultados de la búsqueda
    const [searchResults, setSearchResults] = useState([]);

  // Manejar cambios en el término de búsqueda
    const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Realizar la búsqueda y actualizar los resultados
    if (term.length >= 2) {
        const results = movieList.filter((movie) =>
        movie.nombre.toLowerCase().startsWith(term.toLowerCase())
        );
        setSearchResults(results);
    } else {
        setSearchResults([]);
    }
};

return (
    <div className='container'>
        <h2 className='search-title'>Buscar</h2>
        <div className='search-input-container'>
            <input
                type="text"
                placeholder="Buscar película"
                value={searchTerm}
                onChange={handleSearchChange}
                className='search-input'
            />
        </div>
        <ul className='movie-card'>
            {searchResults.map((movie, index) => (
                <div className='movie-details' key={index}>
                    <h3>{movie.nombre}</h3>
                    <br />
                    Calificación: {movie.calificacion}/100
                    <br />
                    {movie.duracion} horas
                </div>
            ))}
        </ul>
    </div>
);
}

export default Search;

