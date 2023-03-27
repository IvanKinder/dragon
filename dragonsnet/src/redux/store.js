import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {tokenReducer} from "./reducers/tokenReducer";
import {profileReducer} from "./reducers/profileReducer";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
});
const reducer = combineReducers({token: tokenReducer, profile: profileReducer});

export const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'development',
});
