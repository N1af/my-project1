import React from "react";
import './Searchbar.css';

const SearchBar = () => {
    return (
        <div className="Search">
            <input 
                type="text"
                placeholder="Search"
                className="Search-bar"
            /> 
        </div>
    )
}

export default SearchBar;