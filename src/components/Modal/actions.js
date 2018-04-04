import {
    CLOSE_RECIPE,
    SAVE_RECIPE
} from './constants';

export const closeRecipe = (recipes) => {
    return dispatch => {
        try {
            dispatch({
                type: CLOSE_RECIPE,
                payload: recipes
            });
        } catch(err) {
            dispatch({
                type: 'CLOSE_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

export const saveRecipe = (recipes, recipe, position) => {
    return dispatch => {
        try {
            recipes[position] = recipe;
            dispatch({
                type: SAVE_RECIPE,
                payload: recipes
            });
        } catch(err) {
            dispatch({
                type: 'SAVE_RECIPE_ERROR',
                payload: err
            });
        }
    }
}