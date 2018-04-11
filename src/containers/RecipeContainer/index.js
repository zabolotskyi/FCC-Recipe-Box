import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Panel } from 'react-bootstrap';
import { selectRecipes } from './selectors';
import RecipeItem from './RecipeItem';

class RecipeContainer extends Component {

    renderRecipeItems = () => {
        const { recipeList } = this.props;
        return recipeList.map((recipe, index) => {
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
    }

    render() {
        return (
            <div className='well'>{this.renderRecipeItems()}</div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    recipeList: selectRecipes()
});

export default connect(mapStateToProps)(RecipeContainer);