import { actionTypes } from "./action"


const initialstate={
    list:[],
}
const hobbyReducer=(state = initialstate,action)=>{
    switch(action.type){
        case 'TODO_SUCCESS':{
            return {
                ...state,
                list:action.payload,
            }
        }
 // add............................................................
        case  actionTypes.ADD_TODO:
           return {...state}
        //   return {...state}

        case actionTypes.ADD_TODO_SUCCESS:
        //    console.log({action})
           const newTodoAdd = [...state.list];
        //    console.log({newTodoAdd})
           const newTodo = {
                id: action.payload.id,
               name  : action.payload.name,
               onchageEdit: false,
           }
           newTodoAdd.push(newTodo);
           return {
               ...state,
               list : newTodoAdd,
           }
           case actionTypes.ADD_TODO_ERROR:
               return{
                   ...state,
                   error: action.payload,
               }

           
        //delete.....................................................
            case actionTypes.DELETE_TODO:
             return{...state}
             
            case actionTypes.DELETE_TODO_SUCCESS:
                // console.log({action})
                const newTodoListStateCurent = [...state.list];
                const indexCurrent = newTodoListStateCurent.findIndex(
                  (item) => item.id === action.payload.id
                );
                if (indexCurrent < 0) return;
                newTodoListStateCurent.splice(indexCurrent, 1);
                return {
                  ...state,
                  list: newTodoListStateCurent,
                };

             case actionTypes.DELETE_TODO_ERROR:
                    return{
                        ...state,
                        error: action.payload,
                    }
        //edit......................................................
        case actionTypes.EDIT_TODO:
            return{...state}
        case actionTypes.EDIT_TODO_SUCCESS:
            // console.log({action})
            const newtodoedit=state.list.map((todo)=>{
                console.log(todo)
                if(todo.id === action.payload.id){
                    return  {id: todo.id , name: action.payload.name}
                }
                return todo;
            })
            console.log(newtodoedit)
            return{
                    ...state,
                    list: newtodoedit,
            }
            
       default:
           return state;
    }
}
export default hobbyReducer;