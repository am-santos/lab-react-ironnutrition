import React, { Component } from 'react';
import './App.scss';
import MealBox from './components/MealBox';
import AddMeal from './components/AddMeal';
import Search from './components/Search';

import meals from './meals';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMeals: [...meals],
      renderMeals: [...meals],
      todaysMeals: [],
      showForm: false,
      search: ''
    };
  }

  search = (search) => {
    const meals = [...this.state.allMeals];
    const charToSearch = String(search.toLowerCase());
    const renderList = meals.filter((meal) => {
      return meal.name.toLowerCase().split(charToSearch).length > 1;
    });
    this.setState({
      renderMeals: renderList
    });
    console.log('renderMeals', this.state.renderMeals);
  };

  addNewMeal = (name, calories, image) => {
    const newMeal = { name, calories, image };
    // Add this new meal to the list on App.jsx
    // Change the value of showForm in App.jsx
    const allMeals = [...this.state.allMeals, newMeal];
    this.setState({
      allMeals: allMeals,
      renderMeals: allMeals,
      showForm: false
    });
  };

  showForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  addTodaysFood = (newMeal) => {
    let todayMeals = [...this.state.todaysMeals];
    // If newMeal exists, add newmeal.quantity to previous quantity
    if (todayMeals.filter((meal) => meal.name === newMeal.name).length) {
      let tempQuantity;
      // todayMeals.map((meal) => { return (meal.name === newMeal.name) ? (Number(meal.quantity) + newMeal.quantity)
      todayMeals.map((meal) => {
        if (meal.name === newMeal.name) {
          tempQuantity = Number(meal.quantity) + Number(newMeal.quantity);
        } else {
          tempQuantity = meal.quantity;
        }
        return (meal.quantity = tempQuantity);
        // meal.name === newMeal.name ? {quantity: (Number(meal.quantity) + newMeal.quantity)}
      });
    } else {
      // else, add meal to the array
      todayMeals = [...this.state.todaysMeals, newMeal];
    }
    // todayMeals = [...this.state.todaysMeals, newMeal];
    this.setState({
      todaysMeals: todayMeals
    });
  };

  render() {
    const renderMeals = [...this.state.renderMeals];
    const renderTodaysMeals = [...this.state.todaysMeals];
    return (
      <div className='App'>
        <div className='all-meals'>
          <h1>IronNutrition</h1>
          {(this.state.showForm && <AddMeal addMeal={this.addNewMeal} />) || (
            <button onClick={this.showForm}>Add Meal</button>
          )}
          <Search list={this.state.allMeals} searchMethod={this.search} />
          {renderMeals.map((meal) => (
            <div key={meal.image}>
              <MealBox
                name={meal.name}
                calories={meal.calories}
                image={meal.image}
                quantity={meal.quantity}
                addTodaysFood={this.addTodaysFood}
              />
            </div>
          ))}
        </div>
        <div className='todays-food'>
          <h3>Today's Food</h3>
          <ul>
            {renderTodaysMeals.map((meal) => (
              <li key={meal.image}>
                {meal.quantity} {meal.name} = {meal.calories} cal{' '}
              </li>
            ))}
          </ul>
          <p>
            Total:{' '}
            {renderTodaysMeals.reduce(
              (acc, meal) => acc + Number(meal.calories) * meal.quantity,
              0
            )}{' '}
            cal
          </p>
        </div>
      </div>
    );
  }
}

export default App;
