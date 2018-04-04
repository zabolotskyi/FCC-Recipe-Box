import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { deleteRecipe, editRecipe } from '../actions';
import { selectRecipes, selectEditRecipe } from '../selectors';
import RecipeIngredient from '../RecipeIngredient';

class RecipeItem extends Component {

    handleDelete = () => {
        this.props.deleteRecipeAction(this.props.recipes, this.props.position);
    }

    render() {
        const { ingredients, recipe, recipes, position } = this.props;
        const ingredientsList = ingredients.map((ingredient, index) => {
            return (
                <RecipeIngredient key={index} name={ingredient} />
            );
        });
        return (
            <div>
                <h5 className='text-center'>Ingredients</h5>
                <hr className="hr" />
                <ul className='list-group'>
                    {ingredientsList}
                </ul>
                <ButtonToolbar>  
                    <Button bsStyle='danger' onClick={this.handleDelete}>Delete</Button>
                    <Button>Edit</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    recipes: selectRecipes(),
    recipe: selectEditRecipe()
});

const mapDispatchToProps = {
    deleteRecipeAction: deleteRecipe,
    editRecipeAction: editRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);