import hobbyReducer from "../../views/todo/reducers";
import {combineReducers} from "redux";

const rootReducer=combineReducers({
    hobby:hobbyReducer,
});
export default rootReducer;