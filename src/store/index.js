import { compose ,applyMiddleware ,createStore } from "redux";
import promiseMiddleware from 'redux-promise';
import { ReduxREducer } from "./reducer";


const ReduxStore = ()=>{
    const composeEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        ReduxREducer,
        composeEn(applyMiddleware(promiseMiddleware))
    )

    return store;

}

export default ReduxStore;