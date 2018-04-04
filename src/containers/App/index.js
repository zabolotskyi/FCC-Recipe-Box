import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import RecipeContainer from '../RecipeContainer';
import AddRecipeButton from '../../components/Button';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <RecipeContainer />
                        <Button />
                        <Modal />
                    </div>
                </div>
            </div>
        );
    }
}