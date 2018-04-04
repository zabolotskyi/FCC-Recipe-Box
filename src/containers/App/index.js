import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import RecipeContainer from '../RecipeContainer';
import Modal from '../../components/Modal';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <RecipeContainer />
                        <Button bsStyle='primary'>Add Recipe</Button>
                        <Modal />
                    </div>
                </div>
            </div>
        );
    }
}