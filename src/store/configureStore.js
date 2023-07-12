import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import photo from "./reducers/photo";
import token from "./reducers/token";
import user from "./reducers/user";
import feed from "./reducers/feed";
import ui from "./reducers/ui";

const middleware = [...getDefaultMiddleware()];

const reducer = combineReducers({photo, token, user, feed, ui});

const store = configureStore({reducer, middleware});

export default store;