import React, {Component} from 'react';
import './Panel.css';
import './Search.js';

class Panel extends Component{

  render(){
    return(
      <div className="container">
        <div className="heading">
          <h1>{this.props.heading}</h1>
        </div>
        <div className="discription">
          <p>Category of Meal - {this.props.mealcat}<br/>
          Area of Meal - {this.props.mealarea} </p>
        </div>
        <p className="ingHead">Ingredients</p>
        <div className="ing"> {this.props.i1}  {this.props.imeasure1} <br /> <br />
        {this.props.i2}  {this.props.imeasure2} <br /> <br />
        {this.props.i3}  {this.props.imeasure3} <br /> <br />
        {this.props.i4}  {this.props.imeasure4} <br /> <br />
        {this.props.i5}  {this.props.imeasure5} <br /> <br />
        {this.props.i6}  {this.props.imeasure6} <br /> <br />
        {this.props.i7}  {this.props.imeasure7} <br /> <br />
        {this.props.i8}  {this.props.imeasure8} <br /> <br />
        {this.props.i9}  {this.props.imeasure9} <br /> <br />
        {this.props.i10} {this.props.imeasure10} <br /> <br />
        {this.props.i11} {this.props.imeasure11} <br /> <br />
        {this.props.i12} {this.props.imeasure12} <br /> <br />
        {this.props.i13} {this.props.imeasure13} <br /> <br />
        {this.props.i14} {this.props.imeasure14} <br /> <br />
        {this.props.i15} {this.props.imeasure15} <br /> <br />
        {this.props.i16} {this.props.imeasure16} <br /> <br />
        {this.props.i17} {this.props.imeasure17} <br /> <br />
        {this.props.i18} {this.props.imeasure18} <br /> <br />
        {this.props.i19} {this.props.imeasure19} <br /> <br />
        {this.props.i20} {this.props.imeasure20} <br /> <br />
         </div>
        <img src={this.props.dishimg} width="340px" height="320px" className="image" />
        <p className="recipeHead">Recipe</p>
        <div className="recipeDiscription">{this.props.reci}</div>

      </div>
    );
  }
}
export default Panel;
