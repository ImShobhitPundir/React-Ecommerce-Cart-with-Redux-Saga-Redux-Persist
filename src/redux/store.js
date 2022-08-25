//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'persist-root',
    storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer);

//const store = createStore(rootReducer)
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:persistedReducer,
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(productSaga)

export default store;
export const persistor = persistStore(store)
