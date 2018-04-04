import {
    CLOSE_RECIPE,
    SAVE_RECIPE
} from './constants';

const initialState = {
    recipes: localStorage.getItem('recipeBookStorage') ? JSON.parse(localStorage.getItem('recipeBookStorage')) : [
        {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
        {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
        {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
    ]
};

const ModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_RECIPE:
            return { ...state, recipes: action.payload };

        case SAVE_RECIPE:
            return { ...state, recipes: action.payload };
        
        default:
            return state;
    }
};

export default ModalReducer;