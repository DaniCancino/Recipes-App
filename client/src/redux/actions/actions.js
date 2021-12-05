export const getRecipe = (payload) =>{
    return{
        type: 'getRecipe',
        payload
    }
}

export const addRecipe = (payload) =>{
    return{
        type: 'addRecipe',
        payload
    }
}