import {
    DELETE_RECIPE,
    SAVE_NEW_RECIPE,
    START_EDIT_RECIPE
} from './constants';
import { closeModal, openModal } from '../../components/Modal/actions';

export const deleteRecipe = position => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        const newRecipes = recipes.slice(0, position).concat(recipes.slice(position + 1));
        try {
            localStorage.setItem('recipeBookStorage', JSON.stringify(newRecipes));
            dispatch({
                type: DELETE_RECIPE,
                payload: newRecipes
            });
        } catch(err) {
            dispatch({
                type: 'DELETE_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

export const saveNewRecipe = recipe => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        recipes.push(recipe);
        const newRecipes = recipes;
        try {
            localStorage.setItem('recipeBookStorage', JSON.stringify(newRecipes));
            dispatch({
                type: SAVE_NEW_RECIPE,
                payload: newRecipes
            });
            dispatch(closeModal());
        } catch(err) {
            dispatch({
                type: 'SAVE_NEW_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

export const startEditRecipe = position => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        try {
            dispatch({
                type: START_EDIT_RECIPE,
                payload: recipes,
                currentPosition: position
            });
            dispatch(openModal());
        } catch(err) {
            dispatch({
                type: 'START_EDIT_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

// export const saveRecipe = (recipes, recipe, position) => {
//     return dispatch => {
//         try {
//             if (position !== undefined) {
//                 recipes[position] = recipe;
//             } else {
//                 recipes.push(recipe);
//             }       
//             localStorage.setItem('recipeBookStorage', JSON.stringify(recipes));
//             dispatch({
//                 type: SAVE_RECIPE,
//                 payload: recipes
//             });
//         } catch(err) {
//             dispatch({
//                 type: 'SAVE_RECIPE_ERROR',
//                 payload: err
//             });
//         }
//     }
// }