import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { closeRecipe, saveRecipe } from '../../containers/RecipeContainer/actions';
import { selectVisibility } from './selectors';
import { selectCurrentRecipe } from '../../containers/RecipeContainer/selectors';
import { Button, ButtonToolbar, FormGroup, Modal, ControlLabel, FormControl } from 'react-bootstrap';

class ModalWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.currentRecipe.title || 'Recipe title',
            ingredients: props.currentRecipe.ingredients || 'Recipe ingredients'
        };
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps !== this.props) {
            this.setState({ title: nextProps.currentRecipe.title, ingredients: nextProps.currentRecipe.ingredients });
        }
    }

    handleIngredientsChange = (event) => {
        this.setState({ ingredients: event.target.value });
    }

    handleEndEditing = () => {
        this.props.closeRecipeAction();
    }

    handleTitleChange = (event) => {
        this.setState({ title: event.target.value });
    }

    saveRecipe = () => {
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
                            <ControlLabel>Recipe title</ControlLabel>
                            <FormControl onChange={this.handleTitleChange} type='text' defaultValue={this.state.title} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Recipe Ingredients</ControlLabel>
                            <FormControl onChange={this.handleIngredientsChange} type='text' defaultValue={this.state.ingredients} />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle='info' disabled={!this.state.title || !this.state.ingredients} onClick={this.saveRecipe}>{currentRecipe.title ? 'Edit recipe' : 'Add recipe'}</Button>
                        <Button onClick={this.handleEndEditing}>Close</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    showModal: selectVisibility(),
    currentRecipe: selectCurrentRecipe(),
});

const mapDispatchToProps = {
    closeRecipeAction: closeRecipe,
    saveRecipeAction: saveRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);