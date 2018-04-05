import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button } from 'react-bootstrap';
import { closeModal, openModal } from '../../components/Modal/actions';
import { selectVisibility } from '../../components/Modal/selectors';
import RecipeContainer from '../RecipeContainer';
import ModalWindow from '../../components/Modal';

class App extends Component {

    modalOpen = () => {
        this.props.modalOpenAction();
    }

    modalClose = () => {
        this.props.modalCloseAction();
    }

    render() {
        let { showModal } = this.props;
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <RecipeContainer />
                        <Button bsStyle='primary' onClick={this.modalOpen}>Add Recipe</Button>
                        <ModalWindow show={showModal} onHide={this.modalClose} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    showModal: selectVisibility()
});

const mapDispatchToProps = {
    modalCloseAction: closeModal,
    modalOpenAction: openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(App);