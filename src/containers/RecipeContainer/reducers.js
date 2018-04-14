import {
    DELETE_RECIPE,
    SAVE_NEW_RECIPE,
    START_EDIT_RECIPE,
} from './constants';

const initialState = {
    recipes: localStorage.getItem('recipeBookStorage') ? JSON.parse(localStorage.getItem('recipeBookStorage')) : [
        {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
        {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
        {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
    ]
};

const RecipeContainerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_RECIPE:
            return { ...state, recipes: action.payload };

        case SAVE_NEW_RECIPE:
            return { ...state, recipes: action.payload };

        case START_EDIT_RECIPE:
            return { ...state, recipes: action.payload, currentPosition: action.currentPosition };
        
        default:
            return state;
    }
};

export default RecipeContainerReducer;