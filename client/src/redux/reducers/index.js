const initialState = {
    listRecipe: [],
    sort: [],
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
        case 'ORDERBY': {
            let sort = state.listRecipe.sort()
            if(action.payload === 'HIG'){
                return{...state, sort}
            } else if(action.payload === 'LOW'){
                 sort = sort.reverse()
                return{...state, sort}
            }
        }
        case 'SORT': {
            
        }
        case 'RESET_HOME':
            return {...state, filteredByName: [], sort: [], filteredByDiet: [], filtered: ''}
        default:
            return state;
    }
}   

export default recipeReducer