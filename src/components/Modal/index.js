import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { closeModal } from './actions';
import { selectVisibility } from './selectors';
import { Button, ButtonToolbar, FormGroup, Modal } from 'react-bootstrap';

class ModalWindow extends Component {

    modalClose = () => {
        this.props.modalCloseAction();
    }
    
    render() {
        const { showModal } = this.props;
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
                            <input type='text' label='Recipe' placeholder='Recipe Name' />
                            <input type='text' label='Ingredients' placeholder='Recipe Ingredients' />
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonToolbar>
                        <Button bsStyle='info'>Add Recipe</Button>
                        <Button onClick={this.modalClose}>Close</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    showModal: selectVisibility()
});

const mapDispatchToProps = {
    modalCloseAction: closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);