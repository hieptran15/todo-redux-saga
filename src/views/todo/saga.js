import { 
    actionTypes ,
    todosuccess, 
    addtodosuccess,
    addtodoerror,
    deletetodosuccess,
    deletetodoerror,
    edittodosuccess,
    edittodoerror,
    } from "./action";
import {takeLatest,put} from "redux-saga/effects";
const BASE_URL="https://5ee88c32ffee0c0016a12f24.mockapi.io/practicelc/todo";
function* sagaGettodo(){
    // console.log('saga');

   try {
    const response = yield fetch(BASE_URL,{
                 method: 'GET',
        })
        const resjson = yield response.json()
        // console.log(resjson);
        yield put(todosuccess(resjson));
        }
        catch (error) {

        }
}
export function* watchSagaGetTodo(){
    yield takeLatest(actionTypes.GET_TODO, sagaGettodo)
}
function* sagaAddtodo(value){

    // console.log(value.payload);

   try {
    const response = yield fetch(BASE_URL,{
                 method: 'POST',
                 headers: new Headers({
                    'Content-Type' : "application/json"
                  }),
                  body: JSON.stringify({name: value.payload})
        })
        // console.log({response})
        const resjson = yield response.json()
        yield put(addtodosuccess(resjson));
        }
        catch (error) {
             yield put(addtodoerror(error))
        }
}
export function* watchsagaAddtodo(){
    yield takeLatest(actionTypes.ADD_TODO, sagaAddtodo)
}

function* sagaDeletetodo(value){

    console.log(value.payload);

   try {
    const idTodoRemove = value.payload;
    const response = yield fetch(`https://5ee88c32ffee0c0016a12f24.mockapi.io/practicelc/todo/${idTodoRemove}`,{
                 method: 'DELETE',
                 headers:{
                    'Content-Type' : "application/json"
                  },
        })
        const resjson = yield response.json()
            yield put(deletetodosuccess(resjson));
        }
        catch (error) {
             yield put(deletetodoerror(error))
        }
}
export function* watchsagaDeletetodo(){
    yield takeLatest(actionTypes.DELETE_TODO, sagaDeletetodo)
}

function* sagaedittodo(valueid){

    console.log(valueid.payload.id);

   try {
    const idTodoedit = valueid.payload.id;
    const response = yield fetch(`https://5ee88c32ffee0c0016a12f24.mockapi.io/practicelc/todo/${idTodoedit}`,{
                 method: 'PUT',
                 headers:{
                    'Content-Type' : "application/json"
                  },
                  body: JSON.stringify({name: valueid.payload.name}),
        })
        const resjson = yield response.json()
            yield put(edittodosuccess(resjson));
        }
        catch (error) {
             yield put(edittodoerror(error))
        }
}
export function* watchsagaedittodo(){
    yield takeLatest(actionTypes.EDIT_TODO, sagaedittodo)
}