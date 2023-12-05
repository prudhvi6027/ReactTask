
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "all",
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  handleTypeSelect = (eventKey, event) => {
    this.setState({ type: eventKey });
  };

  filterItem = (item) => {
    const nameMatchesSearch = item.name.toLowerCase().search(this.state.search) !== -1;
    const typeMatchesFilter = this.state.type === "all" || item.type.toLowerCase() === this.state.type.toLowerCase();
    return nameMatchesSearch && typeMatchesFilter;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <div className="filter-options">
          <Dropdown onSelect={this.handleTypeSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Type: {this.state.type}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="all">All</Dropdown.Item>
              <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
              <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <input type="text" placeholder="Search" onChange={this.onSearch} />
        </div>
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
