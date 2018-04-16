import {
    DELETE_RECIPE,
    CLOSE_RECIPE,
    SAVE_RECIPE,
    SELECT_RECIPE
} from './constants';
import { closeModal, openModal } from '../../components/Modal/actions';

export const deleteRecipe = (position) => {
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

export const closeRecipe = () => {
    return dispatch => {
        try {
            dispatch({
                type: CLOSE_RECIPE
            });
            dispatch(closeModal());
        } catch(err) {
            dispatch({
                type: 'CLOSE_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

export const saveRecipe = (recipe) => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        const position = state.RecipeContainerReducer.currentPosition;
        if (position > -1) {
            recipes[position] = recipe;
        } else {
            recipes.push(recipe);       
        }
        const newRecipes = recipes.slice();
        try {
            localStorage.setItem('recipeBookStorage', JSON.stringify(newRecipes));
            dispatch({
                type: SAVE_RECIPE,
                payload: newRecipes
            });
            dispatch(closeModal());
        } catch(err) {
            dispatch({
                type: 'SAVE_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

export const selectRecipe = (position) => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        try {
            dispatch({
                type: SELECT_RECIPE,
                payload: recipes,
                currentPosition: position
            });
            dispatch(openModal());
        } catch(err) {
            dispatch({
                type: 'SELECT_RECIPE_ERROR',
                payload: err
            });
        }
    }
}