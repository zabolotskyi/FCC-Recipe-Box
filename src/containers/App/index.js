import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import RecipeContainer from '../RecipeContainer';
import ModalWindow from '../../components/Modal';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }
    render() {
        let modalOpen = () => this.setState({ showModal: true });
        let modalClose = () => this.setState({ showModal: false });
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <RecipeContainer />
                        <Button bsStyle='primary' onClick={modalOpen}>Add Recipe</Button>
                        <ModalWindow show={this.state.showModal} onHide={modalClose} />
                    </div>
                </div>
            </div>
        );
    }
}