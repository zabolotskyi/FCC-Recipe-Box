import {
    DELETE_RECIPE,
    START_EDIT_RECIPE
} from './constants';

export const deleteRecipe = position => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        const newRecipes = [].concat(recipes.slice(0, position)).concat(recipes.slice(position + 1));
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

export const startEditRecipe = position => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
        const recipe = recipes[position];
        try {
            dispatch({
                type: START_EDIT_RECIPE,
                payload: recipe
            })
        } catch(err) {
            dispatch({
                type: 'START_EDIT_RECIPE_ERROR',
                payload: err
            });
        }
    }
}

// export const closeRecipe = (recipes) => {
//     return dispatch => {
//         try {
//             dispatch({
//                 type: CLOSE_RECIPE,
//                 payload: recipes
//             });
//         } catch(err) {
//             dispatch({
//                 type: 'CLOSE_RECIPE_ERROR',
//                 payload: err
//             });
//         }
//     }
// }

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