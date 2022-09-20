import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfing = {
    key: "root",
    storage,
}
const reducers = combineReducers({
    task: taskReducer,
});

const persistedReducer = persistReducer(persistConfing, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store)
