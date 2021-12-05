const initialState = {
    listRecipe: []
}
const recipeReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'getRecipe':
            return{...state, listRecipe: action.payload}
        case 'addRecipe':
            return[...state.listRecipe, action.payload]
        default:
            return state;
    }
}   

export default recipeReducer