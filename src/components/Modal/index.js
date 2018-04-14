import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { closeModal } from './actions';
import { saveNewRecipe } from '../../containers/RecipeContainer/actions';
import { selectVisibility } from './selectors';
import { selectCurrentRecipe } from '../../containers/RecipeContainer/selectors';
import { Button, ButtonToolbar, FormGroup, Modal, ControlLabel, FormControl } from 'react-bootstrap';

class ModalWindow extends Component {

    modalClose = () => {
        this.props.modalCloseAction();
    }

    saveRecipe = () => {
        let title = document.getElementById('recipe-title').value ? document.getElementById('recipe-title').value : 'Untitled recipe';
        let ingredients = document.getElementById('recipe-ingredients').value.split(',');
        let recipe = {
            title,
            ingredients
        };
        this.props.saveRecipeAction(recipe);
    }
    
    render() {
        const { currentRecipe, showModal } = this.props;
        console.log('!!! ' + currentRecipe);
        return (
            <Modal show={showModal}>
                <Modal.Header>
                    <Modal.Title>
                        Edit Recipe
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup>
                            <ControlLabel>Recipe</ControlLabel>
                            <FormControl id='recipe-title' type='text' placeholder='Recipe Name' />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Ingredients</ControlLabel>
                            <FormControl id='recipe-ingredients' type='text' placeholder='Recipe Ingredients' />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle='info' onClick={this.saveRecipe}>Add Recipe</Button>
                        <Button onClick={this.modalClose}>Close</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    showModal: selectVisibility(),
    currentRecipe: selectCurrentRecipe()
});

const mapDispatchToProps = {
    modalCloseAction: closeModal,
    saveRecipeAction: saveNewRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);