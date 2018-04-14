import {
    CLOSE_MODAL,
    OPEN_MODAL
} from './constants';
import { endEditRecipe } from '../../containers/RecipeContainer/actions';

export const closeModal = () => {
    return dispatch => {
        try {
            dispatch({
                type: CLOSE_MODAL
            });
            dispatch(endEditRecipe());
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
                type: OPEN_MODAL
            });
        } catch(err) {
            dispatch({
                type: 'OPEN_MODAL_ERROR',
                payload: err
            });
        }
    }
}