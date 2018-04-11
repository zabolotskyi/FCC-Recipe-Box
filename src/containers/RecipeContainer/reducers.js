import {
    CLOSE_RECIPE,
    DELETE_RECIPE,
    EDIT_RECIPE,
    SAVE_RECIPE
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

        case EDIT_RECIPE:
            return { ...state, recipes: action.payload };
        
        default:
            return state;
    }
};

export default RecipeContainerReducer;