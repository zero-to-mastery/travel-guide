import React from 'react';
import '../styles/search.css'

const SearchBox = ({ search, onSearchChange }) => (
    <div>
        <div className="searchBox pa2">
            <form>
                <input
                    id="userInput" 
                    className = 'search tc bg-lightest-purple'
                    type = 'search'
                    placeholder = 'search countries...'          
                    style = {
                        {
                            display: "block",
                            margin: "auto",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "45px",
                            outline: "none"


                        }
                    }
                    value={search}
                    onChange={(text) => onSearchChange(text)}
                />
            </form>
        </div>
    </div>
);

export default SearchBox;
