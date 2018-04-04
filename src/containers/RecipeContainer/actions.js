import {
    DELETE_RECIPE,
    EDIT_RECIPE
} from './constants';

export const deleteRecipe = (recipes, position) => {
    return dispatch => {
        try {
            recipes.splice(position, 1);
            localStorage.setItem('recipeBookStorage', JSON.stringify(recipes));
            dispatch({
                type: DELETE_RECIPE,
                payload: recipes
            });
        } catch(err) {
            dispatch({
                type: 'DELETE_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

export const editRecipe = (recipes, position) => {
    return dispatch => {
        try {
            const recipe = recipes.splice(position);
            dispatch({
                type: EDIT_RECIPE,
                payload: recipe
            })
        } catch(err) {
            dispatch({
                type: 'EDIT_RECIPE_ERROR',
                payload: err
            });
        }
    }
}