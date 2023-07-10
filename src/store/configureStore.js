import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import photo from "./reducers/photo";
import token from "./reducers/token";
import user from "./reducers/user";

const middleware = [...getDefaultMiddleware()];

const reducer = combineReducers({photo, token, user});

const store = configureStore({reducer, middleware});

export default store;