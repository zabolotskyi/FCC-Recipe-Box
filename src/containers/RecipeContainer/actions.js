import {
    DELETE_RECIPE,
    END_EDIT_RECIPE,
    SAVE_NEW_EDITED_RECIPE,
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

export const endEditRecipe = () => {
    return dispatch => {
        try {
            dispatch({
                type: END_EDIT_RECIPE,
                payload: undefined
            });
        } catch(err) {
            dispatch({
                type: 'END_EDIT_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

export const saveNewEditedRecipe = (recipe, position) => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        recipes[position] = recipe;
        const newRecipes = recipes.slice();
        try {
            localStorage.setItem('recipeBookStorage', JSON.stringify(newRecipes));
            dispatch({
                type: SAVE_NEW_EDITED_RECIPE,
                payload: newRecipes
            });
            dispatch(closeModal());
        } catch(err) {
            dispatch({
                type: 'SAVE_NEW_EDITED_RECIPE_ERROR',
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
        const newRecipes = recipes.slice();
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