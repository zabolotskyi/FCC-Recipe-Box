import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';
import { openModal } from '../../components/Modal/actions';
import RecipeContainer from '../RecipeContainer';
import ModalWindow from '../../components/Modal';

class App extends Component {

    modalOpen = () => {
        this.props.modalOpenAction();
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <RecipeContainer />
                        <Button bsStyle='primary' onClick={this.modalOpen}>Add Recipe</Button>
                        <ModalWindow />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = {
    modalOpenAction: openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(App);