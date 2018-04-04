import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Panel } from 'react-bootstrap';
import { selectRecipes, selectEditRecipe } from './selectors';
import RecipeItem from './RecipeItem';

class RecipeContainer extends Component {
    render() {
        const { recipeList } = this.props;
        const recipeItems = recipeList.map((recipe, index) => {
            return (
                <Panel bsStyle='success' key={index} >
                    <Panel.Heading>
                        <Panel.Title componentClass='h4' toggle>{recipe.title}</Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <RecipeItem ingredients={recipe.ingredients} position={index} />
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
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