import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "./reducers/moduleReducer";
import App from "./App";
import lessonReducer from "./reducers/lessonReducer";

//bc all of our components will no longer require state (stateless components),
//ideally we will have only functions as opposed to classes

//1. reducer generates the state
//2. the state is stored in the store
//3. the store is being Provided to the container
//4. the container is extracting the state variable and putting (mapping) it
//   in the property that the HelloWorld is expecting
//5. the HelloWorld is rendered by the container

//mega reducer that contains a bunch of reducer
const reducers = combineReducers({
    moduleReducer, lessonReducer
});

const store = createStore(reducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
