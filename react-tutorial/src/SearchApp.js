import React, { Component } from "react";

import SearchField from './SearchField';
import SearchedItems from './SearchedItems';

import equipmentList from "./data/equipment.json";

class SearchApp extends Component {
  state = {
    search: ""
  };

  renderEquipment = equipment => {
    return (
      <div>
        <p>{equipment.name}</p>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredEquipment = equipmentList.filter(equipment => {
      return equipment.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div>
            <SearchField
                onchange={this.onchange}
            />               
            <SearchedItems
                filteredEquipment={filteredEquipment}
                renderEquipment={this.renderEquipment}
            />
      </div>
    );
  }
}

export default SearchApp;
