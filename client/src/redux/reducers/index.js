const initialState = {
    listRecipe: [],
    sorted: [],
    filteredByName: [],
    filteredByDiet: [],
    filtered: ''
}


const recipeReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_RECIPE':
            return{...state, listRecipe: action.payload}
        case 'ADD_RECIPE':
            return[...state.listRecipe, action.payload]
        case 'RECIPEDETAIL':{
            const filter = state.listRecipe.filter(e => e.id === action.payload)
            return {...state, filter}
        }
        case 'FILTERED_BY_NAME': {
            let list = state.listRecipe
            const filteredByName = list.filter(e => e.title.toLowerCase().includes(action.payload.toLowerCase()))
            return {...state, filteredByName}
        }
        case 'FILTEREDBYDIET': {
            const diet  = action.payload

            if('all' === diet){
                return {...state, filteredByName: [], sorted: [], filteredByDiet: [], filtered: ''}
            }
            const filteredByDiet = state.listRecipe.filter(e => e.diets.includes(diet))
            return {...state, filteredByDiet}
        }
        case 'SORT': {
            
        }
        case 'RESET_HOME':
            return {...state, filteredByName: [], sorted: [], filteredByDiet: [], filtered: ''}
        default:
            return state;
    }
}   

export default recipeReducer