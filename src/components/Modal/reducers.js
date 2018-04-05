import {
    CLOSE_MODAL,
    OPEN_MODAL
} from './constants';

const initialState = {
    visible: false
};

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_MODAL:
            return { ...state, visible: action.payload };

        case OPEN_MODAL:
            return { ...state, visible: action.payload };
        
        default:
            return state;
    }
};

export default ModalReducer;