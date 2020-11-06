import {all} from 'redux-saga/effects'
const { watchSagaGetTodo, watchsagaAddtodo, watchsagaDeletetodo ,watchsagaedittodo} = require("../../views/todo/saga");

function*rootsaga(){
    yield all([
        watchSagaGetTodo(),
        watchsagaAddtodo(),
        watchsagaDeletetodo(),
        watchsagaedittodo(),
    ])
}
export default rootsaga;