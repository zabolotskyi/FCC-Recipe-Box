import {
    CLOSE_MODAL,
    MODAL_ERROR,
    OPEN_MODAL,
} from './constants';

export const closeModal = () => {
    return dispatch => {
        try {
            dispatch({
                type: CLOSE_MODAL
            });
        } catch(err) {
            dispatch({
                type: MODAL_ERROR,
                payload: err
            });
            alert('An error occurred. Check out the information in the console.');
        }
    }
}

export const openModal = () => {
    return dispatch => {
        try {
            dispatch({
                type: OPEN_MODAL
            });
        } catch(err) {
            dispatch({
                type: MODAL_ERROR,
                payload: err
            });
            alert('An error occurred. Check out the information in the console.');
        }
    }
}