import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { deleteRecipe, editRecipe } from '../actions';
import { selectRecipes } from '../selectors';
import RecipeIngredient from '../RecipeIngredient';

class RecipeItem extends Component {

    handleDelete = () => {
        this.props.deleteRecipeAction(this.props.position);
    }

    handleEdit = () => {
        this.props.editRecipeAction({});
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
                    <Button onClick={this.handleEdit}>Edit</Button>
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
    editRecipeAction: editRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);