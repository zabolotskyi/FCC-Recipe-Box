import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { deleteRecipe, selectRecipe } from '../actions';
import RecipeIngredient from '../RecipeIngredient';

class RecipeItem extends Component {

    handleDelete = () => {
        this.props.deleteRecipeAction(this.props.position);
    }

    handleSelect = () => {
        this.props.selectRecipeAction(this.props.position);
    }

    renderIngredientsList = () => {
        const { ingredients } = this.props;
        return ingredients.map((ingredient, index) => <RecipeIngredient key={index} name={ingredient} />);
    }

    render() {
        return (
            <div>
                <h5 className='text-center'>Ingredients</h5>
                <hr className="hr" />
                <ul className='list-group'>
                    {this.renderIngredientsList()}
                </ul>
                <ButtonToolbar>  
                    <Button bsStyle='danger' onClick={this.handleDelete}>Delete</Button>
                    <Button onClick={this.handleSelect}>Edit</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = {
    deleteRecipeAction: deleteRecipe,
    selectRecipeAction: selectRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);