import {combineReducers} from "redux";


//import authGithubReducer from "./authGithubReducer";
import auth from './auth';


const rootReducer = combineReducers({auth});
export default rootReducer;