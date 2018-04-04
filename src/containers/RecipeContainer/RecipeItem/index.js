import React, { Component } from 'react';
import RecipeIngredient from '../RecipeIngredient';
import Button from '../../../components/Button';

export default class RecipeItem extends Component {
    render() {
        const { ingredients, key, title } = this.props;
        const ingredientsList = ingredients.map((ingredient, index) => {
            return (
                <RecipeIngredient key={index} name={ingredient} />
            );
        });
        return (
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h4 className='panel-title'>
                        <a data-toggle='collapse' href={`#collapse${key}`}>{title}</a>
                    </h4>
                </div>
                <div id={`collapse${key}`} className='panel-collapse collapse'>
                    <h5 className='text-center'>Ingredients</h5>
                    <hr className="hr" />
                    <ul className='list-group'>
                        {ingredientsList}
                    </ul>
                    <div className='buttons'>
                        <Button className='btn btn-danger' onClick={this.handleDelete} />
                        <Button className='btn btn-default' label='Edit' title='Edit recipe' recipeTitle={title} recipeIngredients={ingredients} recipeAction='Edit recipe' />
                    </div>
                </div>
            </div>
        );
    }
}