export const actionTypes={
    GET_TODO:'GET_TODO',
    TODO_SUCCESS:'TODO_SUCCESS',
    TODO_ERROR:'TODO_ERROR',

    ADD_TODO:'ADD_TODO',
    ADD_TODO_SUCCESS:'ADD_TODO_SUCCESS',
    ADD_TODO_ERROR:'ADD_TODO_ERROR',

    DELETE_TODO:'DELETE_TODO',
    DELETE_TODO_SUCCESS:'DELETE_TODO_SUCCESS',
    DELETE_TODO_ERROR:'DELETE_TODO_ERROR',

    EDIT_TODO:'EDIT_TODO',
    EDIT_TODO_SUCCESS:'EDIT_TODO_SUCCESS',
    EDIT_TODO_ERROR:'EDIT_TODO_ERROR',

};
export const getTodos=()=>{
    return {type:actionTypes.GET_TODO}
};
export const todosuccess=(todo)=>{
    return{
        type:actionTypes.TODO_SUCCESS,
        payload:todo,
   }
};
export const todoerrer=(error)=>{
    return{
        type:actionTypes.TODO_ERROR
    }
};


export const addtodo=(addtodo)=>{
    return{
        type:actionTypes.ADD_TODO,
        payload:addtodo,
   }
};
export const addtodosuccess=(addtodosuccess)=>{
    return{
        type:actionTypes.ADD_TODO_SUCCESS,
        payload:addtodosuccess,
   }
};
export const addtodoerror=(addtodoerror)=>{
    return{
        type:actionTypes.ADD_TODO_ERROR,
   }
};


export const deletetodo=(deletodo)=>{
    return{
        type:actionTypes.DELETE_TODO,
        payload:deletodo,
   }
};
export const deletetodosuccess=(deletodosuccess)=>{
    return{
        type:actionTypes.DELETE_TODO_SUCCESS,
        payload:deletodosuccess,
   }
};
export const deletetodoerror=(deletodoerror)=>{
    return{
        type:actionTypes.DELETE_TODO_ERROR,
   }
};


export const edittodo=(edittodo)=>{
    return{
        type:actionTypes.EDIT_TODO,
        payload:edittodo,
   }
};
export const edittodosuccess=(edittodosuccess)=>{
    return{
        type:actionTypes.EDIT_TODO_SUCCESS,
        payload:edittodosuccess,
   }
};
export const edittodoerror=(edittodoerror)=>{
    return{
        type:actionTypes.EDIT_TODO_ERROR,
   }
};