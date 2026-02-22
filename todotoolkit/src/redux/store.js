import {configureStore} from "@reduxjs/toolkit"
import {rootReducer} from "./reducer"

const store = configureStore({
    reducer: {
        task: taskReducer,
        filter: filterReducer
    }
})