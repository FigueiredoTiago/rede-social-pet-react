import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import photo from "./reducers/photo";

const middleware = [...getDefaultMiddleware()];

const reducer = combineReducers({photo});

const store = configureStore({reducer, middleware});

export default store;