import React from 'react';
import '../styles/search.css'


const SearchBox = ({onSearchChange}) =>  {
        return ( 
            <div className="searchContainer">
            <div className="searchBox">
                <input 
                    className = 'search'
                    type = 'search'
                    placeholder = 'search countries'          
                    onChange = {onSearchChange}
                /> 
            </div>
            </div>
        )
}

export default SearchBox;
