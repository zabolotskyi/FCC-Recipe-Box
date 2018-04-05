import React, { Component } from 'react';
import { Button, ButtonToolbar, FormGroup, Modal } from 'react-bootstrap';

export default class ModalWindow extends Component {
    render() {
        const { onHide } = this.props;
        return (
            <Modal>
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
                        <Button onClick={onHide}>Close</Button>
                    </ButtonToolbar>
                </Modal.Footer>
            </Modal>
        );
    }
}