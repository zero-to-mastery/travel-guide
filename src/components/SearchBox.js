import React, {
    Component
}
from 'react';

class SearchBox extends Component {
    render() {
        return ( < div className = 'pa2' >
            < input className = 'tc bg-lightest-purple'
            type = 'search'
            placeholder = 'search countries'
            style = {
                {
                    display: "block",
                    margin: "auto",
                    border: "2px solid #a463f2"
                }
            }
            onChange = {
                this.props.searchChange
            }
            /> < /div >
        )
    };
}

export default SearchBox
