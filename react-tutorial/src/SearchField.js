import React,{Component} from 'react';

class SearchField extends Component{
    render(){
        return(
            <input
                  placeholder="Search Equipment"
                  onChange={this.props.onchange}
                />
        )
    }
}

export default SearchField;