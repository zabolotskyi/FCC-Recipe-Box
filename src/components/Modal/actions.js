import {
    CLOSE_MODAL,
    OPEN_MODAL
} from './constants';

export const closeModal = () => {
    return dispatch => {
        try {
            dispatch({
                type: CLOSE_MODAL,
                payload: false
            });
        } catch(err) {
            dispatch({
                type: 'CLOSE_MODAL_ERROR',
                payload: err
            });
        }
    }
}

export const openModal = () => {
    return dispatch => {
        try {
            dispatch({
                type: OPEN_MODAL,
                payload: true
            });
        } catch(err) {
            dispatch({
                type: 'OPEN_MODAL_ERROR',
                payload: err
            });
        }
    }
}