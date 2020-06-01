import React, { Component } from 'react';
import App from '../App';

class AddMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: '',
      image: ''
    };
  }

  handleInputchange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({
      [inputName]: inputValue
    });
  };

  handleSubmission = (event) => {
    event.preventDefault();
    const { name, calories, image } = this.state;
    this.props.addMeal(name, calories, image);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <input
          name='name'
          type='text'
          placeholder='Meal Name'
          value={this.state.name}
          onChange={this.handleInputchange}
        />
        <input
          name='calories'
          type='number'
          placeholder='Number of Calories'
          value={this.state.calories}
          onChange={this.handleInputchange}
        />
        <input
          name='image'
          type='text'
          placeholder='Image Url'
          value={this.state.image}
          onChange={this.handleInputchange}
        />
        <button>Add Meal</button>
      </form>
    );
  }
}

export default AddMeal;
