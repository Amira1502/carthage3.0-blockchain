import { applyMiddleware, createStore, compose } from "redux"
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"


// import reducer 
import rootReducer from "../reducer";

// middleware
const middleware = [thunk];
 
const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(...middleware))
    );
export default store;

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);