import React, {Component} from 'react';
import './App.css';
import Search from './Recipe/Search.js';
import Header from './Recipe/Heading';
import Panel from './Recipe/Panel';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCheckSquare, faCoffee, faHeart)


class App extends Component {
state={
  input:"",
  dishName:"",
  dishImage:"",
  ingredient1:"",
  ingredient2:"",
  ingredient3:"",
  ingredient4:"",
  ingredient5:"",
  ingredient6:"",
  ingredient7:"",
  ingredient8:"",
  ingredient9:"",
  ingredient10:"",
  ingredient11:"",
  ingredient12:"",
  ingredient13:"",
  ingredient14:"",
  ingredient15:"",
  ingredient16:"",
  ingredient17:"",
  ingredient18:"",
  ingredient19:"",
  ingredient20:"",
  ingredientMeasure1:"",
  ingredientMeasure2:"",
  ingredientMeasure3:"",
  ingredientMeasure4:"",
  ingredientMeasure5:"",
  ingredientMeasure6:"",
  ingredientMeasure7:"",
  ingredientMeasure8:"",
  ingredientMeasure9:"",
  ingredientMeasure10:"",
  ingredientMeasure11:"",
  ingredientMeasure12:"",
  ingredientMeasure13:"",
  ingredientMeasure14:"",
  ingredientMeasure15:"",
  ingredientMeasure16:"",
  ingredientMeasure17:"",
  ingredientMeasure18:"",
  ingredientMeasure19:"",
  ingredientMeasure20:"",
  mealCategory:"",
  mealArea:"",
  mealRecipe:""
}

changeHandler = (event) =>{
    this.setState({
      input : event.target.value
    })
  }

async call(){
  var arr = [];
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + this.state.input;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  this.setState({
    dishName : data.meals[0].strMeal,
    mealRecipe : data.meals[0].strInstructions,
    dishImage : data.meals[0].strMealThumb,
    mealArea : data.meals[0].strArea,
    mealCategory : data.meals[0].strCategory,
    ingredient1:data.meals[0].strIngredient1 + ' ---- ',
    ingredient2:data.meals[0].strIngredient2 + ' ---- ',
    ingredient3:data.meals[0].strIngredient3 + ' ---- ',
    ingredient4:data.meals[0].strIngredient4 + ' ---- ',
    ingredient5:data.meals[0].strIngredient5 + ' ---- ',
    ingredient6:data.meals[0].strIngredient6 + ' ---- ',
    ingredient7:data.meals[0].strIngredient7 + ' ---- ',
    ingredient8:data.meals[0].strIngredient8 + ' ---- ',
    ingredient9:data.meals[0].strIngredient9 + ' ---- ',
    ingredient10:data.meals[0].strIngredient10 + ' ---- ',
    ingredient11:data.meals[0].strIngredient11 + ' ---- ',
    ingredient12:data.meals[0].strIngredient12 + ' ---- ',
    ingredient13:data.meals[0].strIngredient13 + ' ---- ',
    ingredient14:data.meals[0].strIngredient14 + ' ---- ',
    ingredient15:data.meals[0].strIngredient15 + ' ---- ',
    ingredient16:data.meals[0].strIngredient16 + ' ---- ',
    ingredient17:data.meals[0].strIngredient17 + ' ---- ',
    ingredient18:data.meals[0].strIngredient18 + ' ---- ',
    ingredient19:data.meals[0].strIngredient19 + ' ---- ',
    ingredient20:data.meals[0].strIngredient20 + ' ---- ',

    ingredientMeasure1:data.meals[0].strMeasure1,
    ingredientMeasure2:data.meals[0].strMeasure2,
    ingredientMeasure3:data.meals[0].strMeasure3,
    ingredientMeasure4:data.meals[0].strMeasure4,
    ingredientMeasure5:data.meals[0].strMeasure5,
    ingredientMeasure6:data.meals[0].strMeasure6,
    ingredientMeasure7:data.meals[0].strMeasure7,
    ingredientMeasure8:data.meals[0].strMeasure8,
    ingredientMeasure9:data.meals[0].strMeasure9,
    ingredientMeasure10:data.meals[0].strMeasure10,
    ingredientMeasure11:data.meals[0].strMeasure11,
    ingredientMeasure12:data.meals[0].strMeasure12,
    ingredientMeasure13:data.meals[0].strMeasure13,
    ingredientMeasure14:data.meals[0].strMeasure14,
    ingredientMeasure15:data.meals[0].strMeasure15,
    ingredientMeasure16:data.meals[0].strMeasure16,
    ingredientMeasure17:data.meals[0].strMeasure17,
    ingredientMeasure18:data.meals[0].strMeasure18,
    ingredientMeasure19:data.meals[0].strMeasure19,
    ingredientMeasure20:data.meals[0].strMeasure20,
  })


}

render(){
  return(
  <div>
  <Header />
  <Search buttonTitle="Get Ingredients" click = {this.call.bind(this)} change = {this.changeHandler} />
  <Panel heading={this.state.dishName} dishimg={this.state.dishImage} mealarea={this.state.mealArea}
    mealcat={this.state.mealCategory} reci={this.state.mealRecipe}
    i1 = {this.state.ingredient1} i2 = {this.state.ingredient2}
    i3 = {this.state.ingredient3} i4 = {this.state.ingredient4}
    i5 = {this.state.ingredient5} i6 = {this.state.ingredient6}
    i7 = {this.state.ingredient7} i8 = {this.state.ingredient8}
    i9 = {this.state.ingredient9} i10 = {this.state.ingredient10}
    i11 = {this.state.ingredient11} i12 = {this.state.ingredient12}
    i13 = {this.state.ingredient13} i14 = {this.state.ingredient14}
    i15 = {this.state.ingredient15} i16 = {this.state.ingredient16}
    i17 = {this.state.ingredient17} i18 = {this.state.ingredient18}
    i19 = {this.state.ingredient19} i20 = {this.state.ingredient20}

    imeasure1 = {this.state.ingredientMeasure1} imeasure2 = {this.state.ingredientMeasure2}
    imeasure3 = {this.state.ingredientMeasure3} imeasure4 = {this.state.ingredientMeasure4}
    imeasure5 = {this.state.ingredientMeasure5} imeasure6 = {this.state.ingredientMeasure6}
    imeasure7 = {this.state.ingredientMeasure7} imeasure8 = {this.state.ingredientMeasure8}
    imeasure9 = {this.state.ingredientMeasure9} imeasure10 = {this.state.ingredientMeasure10}
    imeasure11 = {this.state.ingredientMeasure11} imeasure12 = {this.state.ingredientMeasure12}
    imeasure13 = {this.state.ingredientMeasure13} imeasure14 = {this.state.ingredientMeasure14}
    imeasure15 = {this.state.ingredientMeasure15} imeasure16 = {this.state.ingredientMeasure16}
    imeasure17 = {this.state.ingredientMeasure17} imeasure18 = {this.state.ingredientMeasure18}
    imeasure19 = {this.state.ingredientMeasure19} imeasure20 = {this.state.ingredientMeasure20}
    ></Panel>
  </div>
);

}
}


export default App;
