import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { deleteRecipe, startEditRecipe } from '../actions';
import { selectRecipes } from '../selectors';
import RecipeIngredient from '../RecipeIngredient';

class RecipeItem extends Component {

    handleDelete = () => {
        this.props.deleteRecipeAction(this.props.position);
    }

    handleStartEdit = () => {
        this.props.startEditRecipeAction(this.props.position);
    }

    renderIngredientsList = () => {
        const { ingredients } = this.props;
        return ingredients.map((ingredient, index) => <RecipeIngredient key={index} name={ingredient} />);
    }

    render() {
        const { recipes, position } = this.props;
        return (
            <div>
                <h5 className='text-center'>Ingredients</h5>
                <hr className="hr" />
                <ul className='list-group'>
                    {this.renderIngredientsList()}
                </ul>
                <ButtonToolbar>  
                    <Button bsStyle='danger' onClick={this.handleDelete}>Delete</Button>
                    <Button onClick={this.handleStartEdit}>Edit</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    recipes: selectRecipes()
});

const mapDispatchToProps = {
    deleteRecipeAction: deleteRecipe,
    startEditRecipeAction: startEditRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);