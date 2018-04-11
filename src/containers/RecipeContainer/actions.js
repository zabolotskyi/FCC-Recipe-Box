import {
    DELETE_RECIPE,
    EDIT_RECIPE
} from './constants';

export const deleteRecipe = position => {
    return (dispatch, getState) => {
        const state = getState();
        const recipes = state.RecipeContainerReducer.recipes;
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

export const editRecipe = position => {
    return (dispatch, getState) => {
        const state = getState();
        const recipe = state.RecipeContainerReducer.recipe;
        const recipes = state.RecipeContainerReducer.recipes;
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