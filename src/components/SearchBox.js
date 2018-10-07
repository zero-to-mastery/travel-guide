import React from 'react';


const SearchBox = ({onSearchChange}) =>  {
        return (
            <div className = 'pa2 '>
                <input
                    className = 'tc bg-lightest-purple'
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
        )
}

export default SearchBox;
