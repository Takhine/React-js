import React, {Component} from 'react';

class SearchField extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            searchTerm: '',
        }

    }
    render() {
        return (
                <input 
                    type="search" 
                    name="search" 
                    value=""
                    placeholder="Search Item"
                />
        );
    }
}

export default SearchField;