import React from 'react';
import '../styles/search.css'

const SearchBox = (props) => (
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
                            border: "2px solid #a463f2",
                            borderRadius: "30px",
                            height: "45px",
                            outline: "none"


                        }
                    }
                    value={props.search}
                    onChange={(text) => props.onSearchChange(text)}
                />
            </form>
        </div>
    </div>
);

export default SearchBox;
