import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./reducers/TaskReducer";

export const store = configureStore({
   reducer: {
        task: TaskReducer
    }
})