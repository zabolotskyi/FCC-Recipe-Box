import {
    DELETE_RECIPE,
    CLOSE_RECIPE,
    RECIPE_ERROR,
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
                type: RECIPE_ERROR,
                payload: err
            });
            alert('An error occurred. Check out the information in the console.');
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
                type: RECIPE_ERROR,
                payload: err
            });
            alert('An error occurred. Check out the information in the console.');
        }
    }
}

export const saveRecipe = (recipe) => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        const position = state.RecipeContainerReducer.currentPosition;
        const newRecipes = recipes.slice();
        if (position > -1) {
            newRecipes[position] = recipe;
        } else {
            newRecipes.push(recipe);       
        }
        try {
            localStorage.setItem('recipeBookStorage', JSON.stringify(newRecipes));
            dispatch({
                type: SAVE_RECIPE,
                payload: newRecipes
            });
            dispatch(closeModal());
        } catch(err) {
            dispatch({
                type: RECIPE_ERROR,
                payload: err
            });
            alert('An error occurred. Check out the information in the console.');
        }
    }
}

export const selectRecipe = (position) => {
    return (dispatch) => {
        try {
            dispatch({
                type: SELECT_RECIPE,
                payload: position
            });
            dispatch(openModal());
        } catch(err) {
            dispatch({
                type: RECIPE_ERROR,
                payload: err
            });
            alert('An error occurred. Check out the information in the console.');
        }
    }
}