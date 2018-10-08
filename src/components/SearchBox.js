import React from 'react';
import '../styles/search.css'


const SearchBox = ({onSearchChange}) =>  {
        return ( 
            <div className="searchContainer">
            <div className="searchBox pa2 ">
                <input 
                    className = 'search tc bg-lightest-purple'
                    type = 'search'
                    placeholder = 'search countries'          
                              style = {
                        {
                            display: "block",
                            margin: "auto",
                            border: "2px solid #a463f2",
                            borderRadius: "30px",
                            height: "45px",
                            outline: "none"


                        }
                    }
                    onChange = {onSearchChange}
                />
            </div>
            </div>
        )
}

export default SearchBox;
