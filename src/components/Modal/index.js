import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { closeModal } from './actions';
import { saveNewEditedRecipe, saveNewRecipe } from '../../containers/RecipeContainer/actions';
import { selectVisibility } from './selectors';
import { selectCurrentPosition, selectCurrentRecipe } from '../../containers/RecipeContainer/selectors';
import { Button, ButtonToolbar, FormGroup, Modal, ControlLabel, FormControl } from 'react-bootstrap';

class ModalWindow extends Component {

    constructor() {
        super();
        this.state = {
            title: 'Recipe title',
            ingredients: 'Recipe ingredients'
        };
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    handleIngredientsChange = (event) => {
        this.setState({ ingredients: event.target.value });
    }

    modalClose = () => {
        this.setState({ title: 'Recipe title', ingredients: 'Recipe ingredients' });
        this.props.modalCloseAction();
    }

    saveEditedRecipe = () => {
        this.setState({ title: 'Recipe title', ingredients: 'Recipe ingredients' });
        const { recipePosition } = this.props;
        let recipe = {
            title: this.state.title,
            ingredients: this.state.ingredients.split(',')
        };
        this.props.saveEditedRecipeAction(recipe, recipePosition);
    }

    saveRecipe = () => {
        this.setState({ title: 'Recipe title', ingredients: 'Recipe ingredients' });
        let recipe = {
            title: this.state.title,
            ingredients: this.state.ingredients.split(',')
        };
        this.props.saveRecipeAction(recipe);
    }
    
    render() {
        const { currentRecipe, showModal } = this.props;
        return (
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>
                        {!!currentRecipe ? 'Edit recipe' : 'Add recipe'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>{currentRecipe !== undefined ? currentRecipe.title : 'Recipe'}</ControlLabel>
                            <FormControl onChange={this.handleTitleChange} type='text' defaultValue={currentRecipe !== undefined ? currentRecipe.title : this.state.title} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>{currentRecipe !== undefined ? currentRecipe.ingredients : 'Ingredients'}</ControlLabel>
                            <FormControl onChange={this.handleIngredientsChange} type='text' defaultValue={currentRecipe !== undefined ? currentRecipe.ingredients : this.state.ingredients} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle='info' onClick={!!currentRecipe ? this.saveEditedRecipe : this.saveRecipe}>{currentRecipe !== undefined ? 'Edit recipe' : 'Add recipe'}</Button>
                        <Button onClick={this.modalClose}>Close</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    showModal: selectVisibility(),
    currentRecipe: selectCurrentRecipe(),
    recipePosition: selectCurrentPosition()
});

const mapDispatchToProps = {
    modalCloseAction: closeModal,
    saveEditedRecipeAction: saveNewEditedRecipe,
    saveRecipeAction: saveNewRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);