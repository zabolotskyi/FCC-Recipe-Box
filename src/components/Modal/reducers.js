import {
    CLOSE_MODAL,
    MODAL_ERROR,
    OPEN_MODAL
} from './constants';

const initialState = {
    modalVisibility: false
};

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return { ...state, modalVisibility: false };

        case MODAL_ERROR:
            return { ...state };

        case OPEN_MODAL:
            return { ...state, modalVisibility: true };
        
        default:
            return state;
    }
};

export default ModalReducer;