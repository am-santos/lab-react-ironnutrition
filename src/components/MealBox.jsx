import React, { Component } from 'react';

// WITHOUT BOOTSTRAP

import './MealBox.css';
class MealBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: ''
    };
  }

  handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({
      [inputName]: inputValue
    });
  };

  handleInputSubmission = (event) => {
    event.preventDefault();
    const quantity = this.state.quantity;
    const { name, calories, image } = this.props;
    const meal = { quantity, name, calories, image };
    this.props.addTodaysFood(meal);
  };

  render() {
    return (
      <div className='meal-box'>
        <img src={this.props.image} alt={this.props.name} />
        <div>
          <h5> {this.props.name} </h5>
          <small>{this.props.calories}</small>
        </div>
        <form onSubmit={this.handleInputSubmission}>
          <input
            name='quantity'
            type='number'
            min='0'
            value={this.quantity}
            placeholder='0'
            onChange={this.handleInputChange}
          />
          <button>+</button>
        </form>
      </div>
    );
  }
}

// WITH BOOTSTRAP
//
// import './MealBox.css';
// const MealBox = (props) => {
//   return (
//     <div className='meal-box'>
//       <img src={props.image} alt={props.name} />
//       <div>
//         <h5> {props.name} </h5>
//         <small>{props.calories}</small>
//       </div>
//       <form action=''>
//         <input type='number' value={props.quantity} />
//         <button>+</button>
//       </form>
//     </div>
//   );
// };

export default MealBox;
