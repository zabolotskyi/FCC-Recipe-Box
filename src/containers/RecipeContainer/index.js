import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRecipes, selectEditRecipe } from './selectors';
import RecipeItem from './RecipeItem';

class RecipeContainer extends Component {
    render() {
        const { recipeList } = this.props;
        const recipeItems = recipeList.map((recipe, index) => {
            return (
                <RecipeItem ingredients={recipe.ingredients} key={index} position={index} title={recipe.title} />
            );
        });
        return (
            <div className='well'>{recipeItems}</div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    recipeList: selectRecipes(),
    recipeEdit: selectEditRecipe()
});

export default connect(mapStateToProps)(RecipeContainer);