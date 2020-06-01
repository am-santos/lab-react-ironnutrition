import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleInputchange = (event) => {
    console.log('event', event.target.value);
    console.log('state', this.state.search);
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.props.searchMethod(inputValue);
    this.setState({
      [inputName]: inputValue
    });
  };

  render() {
    return (
      <input
        name='search'
        type='text'
        placeholder='Search for your meal'
        value={this.state.search}
        onChange={this.handleInputchange}
      />
    );
  }
}

export default Search;
