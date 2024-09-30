import React, { useState } from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log('Buscando:', query);
    };

    return (
        <div className="search-container">
            <div className="search-input-container">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="O que você procura?"
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </div>
    );
};

export default SearchBar;