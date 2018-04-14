import { createSelector } from 'reselect';

export const selectRecipes = () => state => state.RecipeContainerReducer.recipes;
export const selectCurrentPosition = () => state => state.RecipeContainerReducer.currentPosition;
export const selectCurrentRecipe = createSelector(
    [selectRecipes, selectCurrentPosition],
    (recipes, position) => recipes[position]
);