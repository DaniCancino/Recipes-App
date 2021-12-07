export const getRecipe = (payload) =>{
    return{
        type: 'GET_RECIPE',
        payload
    }
}

export const addRecipe = (payload) =>{
    return{
        type: 'ADD_RECIPE',
        payload
    }
}

export const filteredByName = (payload) =>{
    return{
        type: 'FILTERED_BY_NAME',
        payload
    }
}

export const ordered = (payload) =>{
    return{
        type: 'ORDERED',
        payload
    }
}

