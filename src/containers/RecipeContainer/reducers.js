import {  
    CLOSE_RECIPE,
    DEFAULT_RECIPES,
    DELETE_RECIPE,
    RECIPE_ERROR,
    SAVE_RECIPE,
    SELECT_RECIPE,
} from './constants';

const initialState = {
    recipes: localStorage.getItem('recipeBookStorage') ? JSON.parse(localStorage.getItem('recipeBookStorage')) : DEFAULT_RECIPES,
    currentPosition: -1
};

const RecipeContainerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_RECIPE:
            return { ...state, currentPosition: -1 };

        case DELETE_RECIPE:
            return { ...state, recipes: action.payload };   
            
        case RECIPE_ERROR:
            return { ...state };

        case SAVE_RECIPE:
            return { ...state, recipes: action.payload, currentPosition: -1 };

        case SELECT_RECIPE:
            return { ...state, currentPosition: action.payload };
        
        default:
            return state;
    }
};

export default RecipeContainerReducer;