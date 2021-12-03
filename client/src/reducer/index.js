const initialState = [];

const newPost = (state = initialState, action) =>{
    switch(action.type){
        case'addPost':
        return [...state, action.payload]
    }
}

export default newPost;