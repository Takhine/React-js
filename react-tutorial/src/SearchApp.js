import React, { Component } from 'react';
import SearchField from './SearchField';
class SearchApp extends Component {
	state = {
		items: [
            {
                _id:1,
                title:'Item 1',
                description:'This is item 1',
            },
            {
                _id:1,
                title:'Item 1',
                description:'This is item 1',
            },
            {
                _id:1,
                title:'Item 1',
                description:'This is item 1',
            },
        ],
    };
    

    render() {
  	    const {characters} = this.state;

  	// Now, we're going to pass the data through to the child component (Table) with properties,
  	//  kind of how you might pass data through using data- attributes.
  	// We can call the property whatever we want, as long as it's not a reserved keyword,
  	// so I'll go with characterData. The data I'm passing through is the characters variable,
  	// and I'll put curly braces around it as it's a JavaScript expression.
        return (
            <div className="container">
            <h2>Search and Filter</h2>
            <SearchField/>
            </div>
        )
    }
}

export default SearchApp;