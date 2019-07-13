import React,{Component} from 'react';

class SearchedItems extends Component{
    render(){
        return(
            <div>
                <h2>Items</h2>
                <ul>
                {this.props.filteredEquipment.map(equipment => {
                return <li key={equipment.code}>{this.props.renderEquipment(equipment)}</li>
              })}
                </ul>
            </div>
        );
    }
}

export default SearchedItems;